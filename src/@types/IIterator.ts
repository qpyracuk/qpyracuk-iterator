import { INode } from './general';
/**
 * @interface IIterator Iterator Interface
 * @description Standard interface for all types of iterators
 */
export interface IIterator {
  /**
   * @description Resets the iterator to it's initial state
   */
  reset(): void;
  /**
   * @description Returns the last value obtained from an iterator
   */
  get(): INode | undefined;
  /**
   * @description Checks for the existence of the next element in the tree
   * @returns {boolean} [true - next element exists | false - next element not exists]
   */
  has(): boolean;
  /**
   * @description Returns the next node of an object
   * @returns {INode} Next node
   */
  next(): INode | undefined;
  /**
   * @description Returns the next liaf of an object
   * @returns {INode} Next liaf
   */
  nextLiaf(): INode | undefined;
}
