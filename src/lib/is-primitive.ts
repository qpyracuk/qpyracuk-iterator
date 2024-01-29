import { INode } from '@/@types/general';
let type = '';
export default function isPrimitive(node: INode) {
	type = typeof node.value;
	if (type === 'object') return false;
	else {
		switch (type) {
			case 'string':
			case 'number':
			case 'boolean':
			case 'symbol':
			case 'bigint':
			case 'undefined':
				return true;
			default:
				return false;
		}
	}
}
