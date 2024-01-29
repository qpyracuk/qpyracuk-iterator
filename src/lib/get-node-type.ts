import { TNode } from '@/@types/general';

const object = 'object';
const array = 'array';
const set = 'map';
const map = 'map';

export default function getNodeType(node: any): TNode {
	let type = typeof node;
	if (type === object) {
		if (node instanceof Array) return array;
		else if (node instanceof Set) return set;
		else if (node instanceof Map) return map;
		else return object;
	} else return type;
}
