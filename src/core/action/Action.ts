import type { ActionContext } from './ActionContext';

export interface Action<P = unknown> {
  readonly payload?: P;
  run(context: ActionContext): Promise<void> | void;
}
