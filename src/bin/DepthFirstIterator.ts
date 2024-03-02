import type { IIterator } from '@/@types/iterator';
import BaseIterator from './BaseIterator';

export default class DepthFirstIterator extends BaseIterator implements IIterator {
  constructor(root: any, depth: number, rootName?: string) {
    super(root, depth, 'depth', rootName);
  }
}
