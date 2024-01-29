import type { IIterator } from '@/@types/IIterator';
import BaseIterator from './BaseIterator';

export default class DepthFirstIterator extends BaseIterator implements IIterator {
	constructor(root: any, depth: number) {
		super(root, depth, 'depth');
	}
}
