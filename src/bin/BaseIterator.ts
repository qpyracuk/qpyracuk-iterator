import type { INode } from '@/@types/general';
import type { IIterator } from '@/@types/iterator';
import { unknown, object, array, set, map } from '@/lib/type-names';
import getNodeType from '@/lib/get-node-type';
import isPrimitive from '@/lib/is-primitive';

export default class BaseIterator implements IIterator {
  //#region Приватные переменные
  private _storage: INode[] = [];
  private _filter: Set<any> = new Set();
  private _rootName: string;
  private _root: any;
  private _current?: INode;
  private _depth: number;
  private _isInfinity: boolean;
  private _algorithm: boolean;
  //#endregion

  constructor(root: any, depth: number, algorithm: 'depth' | 'breadth', rootName?: string) {
    this._root = root;
    this._depth = depth;
    this._isInfinity = depth === -1;
    if (typeof rootName === 'string') this._rootName = rootName || 'root';
    else this._rootName = 'root';
    if (algorithm === 'depth') this._algorithm = true;
    else if (algorithm === 'breadth') this._algorithm = false;
    else throw new Error('Incorrect algorithm name');
    const rootNode = { value: root, level: 0, key: this._rootName, type: getNodeType(root) };
    this._storage.push(rootNode);
  }

  public has(): boolean {
    return this._storage.length > 0;
  }

  public get(): INode | undefined {
    return this._current;
  }

  public next(): INode | undefined {
    let repeat = false,
      node: INode | undefined;
    do {
      node = this._getNextNode();
      this._current = node;
      if (node === undefined) return undefined;
      if (isPrimitive(node)) repeat = false;
      else repeat = this._handler(node);
    } while (repeat);
    return node;
  }

  public nextLiaf(): INode | undefined {
    let liaf: INode | undefined;
    do {
      liaf = this.next();
      if (liaf === undefined) return undefined;
      if (isPrimitive(liaf)) return liaf;
    } while (this.has());
    return undefined;
  }

  public reset(): void {
    this._filter.clear();
    this._storage = [];
    this._handler({ value: this._root, level: 0, type: unknown, key: this._rootName });
  }

  private _handler(node: INode): boolean {
    const nextLevel = node.level + 1;
    if (!(this._isInfinity || this._depth > node.level)) return true;
    const type = typeof node.value;
    if (type === object && !this._filter.has(node.value)) {
      this._filter.add(node.value);
      if (node.value instanceof Array) {
        node.type = array;
        if (node.value.length > 0) {
          let i = node.value.length - 1;
          do {
            this._storage.push({ value: node.value[i], level: nextLevel, type: getNodeType(node.value[i]), key: `${i}` });
          } while (i--);
        }
      } else if (node.value instanceof Set) {
        node.type = set;
        node.value.forEach((value: any) => {
          this._storage.push({ value: value, level: nextLevel, type: getNodeType(value), key: value });
        });
      } else if (node.value instanceof Map) {
        node.type = map;
        node.value.forEach((value: any, key: any) => {
          this._storage.push({ value: value, level: nextLevel, type: getNodeType(value), key: key });
        });
      } else {
        node.type = object;
        const keys = Object.keys(node.value);
        if (keys.length > 0) {
          let i = keys.length - 1;
          do {
            if (Object.prototype.hasOwnProperty.call(node.value, keys[i]))
              this._storage.push({
                value: node.value[keys[i]],
                key: keys[i],
                level: nextLevel,
                type: getNodeType(node.value[keys[i]])
              });
          } while (i--);
        }
      }
    } else node.type = getNodeType(node.value);
    return false;
  }

  private _getNextNode(): INode | undefined {
    return this._algorithm ? this._storage.pop() : this._storage.shift();
  }
}
