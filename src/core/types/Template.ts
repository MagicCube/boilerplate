import type { Stack } from './Stack';

export interface Template {
  id: string;
  name: string;
  tags?: string[];
  stacks: Stack[];
  inherits?: Template[];
}
