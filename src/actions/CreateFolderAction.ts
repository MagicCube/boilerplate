import fs from 'fs';
import path from 'path';

import type { Action, ActionContext } from '@/core';

export interface CreateFolderPayload {
  path: string;
}

export class CreateFolderAction implements Action<CreateFolderPayload> {
  readonly payload: CreateFolderPayload;

  constructor(path: string) {
    this.payload = { path };
  }

  run(context: ActionContext) {
    fs.mkdirSync(path.resolve(context.project.rootDir, this.payload.path));
  }
}
