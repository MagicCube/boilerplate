import type { ActionContext } from '@/core';
import { BasedAction } from '@/core';

export interface ShellCommandPayload {
  command: string;
  args: string[];
}

export class ShellCommandAction extends BasedAction<ShellCommandPayload> {
  constructor(command: string, args: string[] = []) {
    super();
    this.payload = { command, args };
  }

  run(context: ActionContext) {
    return this.executeCommand(
      context,
      this.payload.command,
      this.payload.args
    );
  }
}
