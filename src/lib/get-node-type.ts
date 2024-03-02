import { TNode } from '@/@types/general';

const OBJECT = 'object';
const ARRAY = 'array';
const SET = 'set';
const MAP = 'map';
const NULL = 'null';

export default function getNodeType(node: any): TNode {
  if (node === null) return NULL;
  const type = typeof node;
  if (type === OBJECT) {
    if (node instanceof Array) return ARRAY;
    else if (node instanceof Set) return SET;
    else if (node instanceof Map) return MAP;
    else return OBJECT;
  } else return type;
}
