import fs from 'fs';
import path from 'path';

import type { ActionContext } from '@/core';
import { BasedAction } from '@/core';

export interface CreateFilePayload {
  source: string;
  target: string;
}

export class CopyFileAction extends BasedAction<CreateFilePayload> {
  readonly payload: CreateFilePayload;

  constructor(source: string, target: string) {
    super();
    this.payload = { source, target };
  }

  run(context: ActionContext) {
    const source = this.resolveTemplatePath(this.payload.source);
    const target = this.resolveProjectPath(context, this.payload.target);
    const raw = fs.readFileSync(source, 'utf8');
    const targetDir = path.dirname(target);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(target, raw, 'utf8');
  }
}
