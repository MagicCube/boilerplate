import childProcess from 'child_process';
import fs from 'fs';
import path from 'path';

import type { Action } from '.';

import type { ActionContext } from './ActionContext';

export abstract class BasedAction<P> implements Action<P> {
  payload!: P;

  abstract run(context: ActionContext): void | Promise<void>;

  protected resolveProjectPath(context: ActionContext, relativePath: string) {
    return path.resolve(context.project.rootDir, relativePath);
  }

  protected resolveTemplatePath(relativePath: string) {
    return path.resolve(__dirname, '../../templates', relativePath);
  }

  protected modifyJSONFile(absPath: string, fn: (json: any) => any) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const json = fs.readFileSync(absPath).toString();
    const newJson = fn(JSON.parse(json));
    fs.writeFileSync(absPath, JSON.stringify(newJson, null, 2));
  }

  protected executeCommand(
    context: ActionContext,
    command: string,
    args: string[] = []
  ) {
    const [cmd, ...rest] = command.split(' ');
    const finalArgs = [...rest, ...args];
    const p = childProcess.spawn(cmd, finalArgs, {
      cwd: context.project.rootDir,
      stdio: 'inherit',
    });
    return new Promise<void>((resolve, reject) => {
      p.on('close', () => {
        resolve();
      });
      p.on('error', (e: Error) => {
        reject(e);
      });
    });
  }
}
