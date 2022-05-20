import fs from 'fs';

import type { ActionContext } from '@/core';
import { BasedAction } from '@/core';

export interface DeleteFilePayload {
  path: string;
}

export class DeleteFileAction extends BasedAction<DeleteFilePayload> {
  readonly payload: DeleteFilePayload;

  constructor(path: string) {
    super();
    this.payload = { path };
  }

  run(context: ActionContext) {
    fs.rmSync(this.resolveProjectPath(context, this.payload.path));
  }
}
