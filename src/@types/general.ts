export type TNode = 'string' | 'number' | 'boolean' | 'symbol' | 'bigint' | 'undefined' | 'object' | 'map' | 'set' | 'array' | 'function' | '';
export type INode = {
  type: TNode;
  level: number;
  value: any;
  key: string;
};
