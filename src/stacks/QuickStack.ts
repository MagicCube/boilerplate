import type { Action, Stack } from '../core';
import {
  CopyFileAction,
  CreateFolderAction,
  DeleteFileAction,
  ShellCommandAction,
} from '../actions';

export class QuickStack implements Stack {
  readonly actions: Action[] = [];

  constructor(readonly name: string) {}

  run(action: Action) {
    this.actions.push(action);
    return this;
  }

  createFolder(path: string) {
    const action = new CreateFolderAction(path);
    return this.run(action);
  }

  copy(source: string, target: string) {
    const action = new CopyFileAction(source, target);
    return this.run(action);
  }

  delete(path: string) {
    const action = new DeleteFileAction(path);
    return this.run(action);
  }

  exec(command: string, args: string[] = []) {
    const action = new ShellCommandAction(command, args);
    return this.run(action);
  }

  installDependencies(...deps: string[]) {
    const action = new ShellCommandAction('pnpm', ['add', ...deps]);
    return this.run(action);
  }

  installDevDependencies(...deps: string[]) {
    const action = new ShellCommandAction('pnpm', ['add', ...deps, '-D']);
    return this.run(action);
  }
}
