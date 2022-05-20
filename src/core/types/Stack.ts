import type { Action } from '../action';

export interface Stack {
  name: string;
  actions: Action[];
}
