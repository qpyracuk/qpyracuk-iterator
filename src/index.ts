import DepthFirstIterator from '@/bin/DepthFirstIterator';
import BreadthFirstIterator from '@/bin/BreadthFirstIterator';
import { INode } from '@/@types/general';
export * from '@/@types/general';
export * from '@/@types/iterator';
/**
 * @descroption Iterator builder. Contains static methods for generating iterators or ready-made
 * sequences obtained by traversing your object with an iterator
 * @class
 */
export default class Iterator {
  /**
   * @description Creates a depth-first traversal iterator object
   * @param {any} root Any value
   * @param {number | 'Infinity'} depth Maximum object bypass depth
   * @returns {DeepFirstIterator} Depth-first iterator
   * @static
   */
  static createDepthFirstIterator(root: any, depth: number | 'Infinity' = 'Infinity', rootName?: string): DepthFirstIterator {
    if (depth === 'Infinity') return new DepthFirstIterator(root, -1, typeof rootName === 'string' && rootName.length > 0 ? rootName : 'root');
    else if (typeof depth === 'number' && depth > 0)
      return new DepthFirstIterator(root, depth, typeof rootName === 'string' && rootName.length > 0 ? rootName : 'root');
    else throw new Error('Depth parameter must be a positive number');
  }

  /**
   * @description Creates a breadth-first traversal iterator object
   * @param {any} root Any value
   * @param {number | 'Infinity'} depth Maximum object bypass depth
   * @returns {DeepFirstIterator} Breadth-first iterator
   * @static
   */
  static createBreadthFirstIterator(root: any, depth: number | 'Infinity' = 'Infinity', rootName?: string): BreadthFirstIterator {
    if (depth === 'Infinity') return new BreadthFirstIterator(root, -1, typeof rootName === 'string' && rootName.length > 0 ? rootName : 'root');
    else if (typeof depth === 'number' && depth > 0)
      return new BreadthFirstIterator(root, depth, typeof rootName === 'string' && rootName.length > 0 ? rootName : 'root');
    else throw new Error('Depth parameter must be a positive number');
  }

  /**
   * @description Creates an array of INode interface objects. The array is a linear sequence of
   * ALL nodes obtained during a depth-first traversal of the object tree
   * @param {any} root Any value
   * @param {number | 'Infinity'} depth Maximum object bypass depth
   * @returns {INode[]} An array of ALL object nodes arranged in order corresponding to the result
   * of a depth-first traversal of this object
   * @static
   */
  static createDepthFirstSequenceNode(root: any, depth: number | 'Infinity' = 'Infinity', rootName?: string): INode[] {
    const iterator = Iterator.createDepthFirstIterator(root, depth, typeof rootName === 'string' && rootName.length > 0 ? rootName : 'root'),
      response: INode[] = [];
    let item: INode | undefined;
    while ((item = iterator.next())) {
      response.push(item);
    }
    return response;
  }

  /**
   * @description Creates an array of INode interface objects. The array is a linear sequence of
   * ALL nodes obtained during a breadth-first traversal of the object tree
   * @param {any} root Any value
   * @param {number | 'Infinity'} depth Maximum object bypass depth
   * @returns {INode[]} An array of ALL object nodes arranged in order corresponding to the result
   * of a breadth-first traversal of this object
   * @static
   */
  static createBreadthFirstSequenceNode(root: any, depth: number | 'Infinity' = 'Infinity', rootName?: string): INode[] {
    const iterator = Iterator.createBreadthFirstIterator(root, depth, typeof rootName === 'string' && rootName.length > 0 ? rootName : 'root'),
      response: INode[] = [];
    let item: INode | undefined;
    while ((item = iterator.next())) {
      response.push(item);
    }
    return response;
  }

  /**
   * @description Creates an array of INode interface objects. An array is a linear sequence of
   * all PRIMITIVE VALUES obtained from a depth-first traversal of the object tree.
   * @param {any} root Any value
   * @param {number | 'Infinity'} depth Maximum object bypass depth
   * @returns {INode[]} An array of PRIMITIVE values  of objects, arranged in order corresponding
   * to the result of a depth-first traversal of this object.
   * @static
   */
  static createDepthFirstSequenceLiaf(root: any, depth: number | 'Infinity' = 'Infinity', rootName?: string): INode[] {
    const iterator = Iterator.createDepthFirstIterator(root, depth, typeof rootName === 'string' && rootName.length > 0 ? rootName : 'root'),
      response: INode[] = [];
    let item: INode | undefined;
    while ((item = iterator.nextLiaf())) {
      response.push(item);
    }
    return response;
  }

  /**
   * @description Creates an array of INode interface objects. An array is a linear sequence of all
   * PRIMITIVE VALUES obtained from a breadth-first traversal of the object tree.
   * @param {any} root Any value
   * @param {number | 'Infinity'} depth Maximum object bypass depth
   * @returns {INode[]} An array of PRIMITIVE values   of objects, arranged in order corresponding
   * to the result of a breadth-first traversal of this object.
   * @static
   */
  static createBreadthFirstSequenceLiaf(root: any, depth: number | 'Infinity' = 'Infinity', rootName?: string): INode[] {
    const iterator = Iterator.createBreadthFirstIterator(root, depth, typeof rootName === 'string' && rootName.length > 0 ? rootName : 'root'),
      response: INode[] = [];
    let item: INode | undefined;
    while ((item = iterator.nextLiaf())) {
      response.push(item);
    }
    return response;
  }
}
