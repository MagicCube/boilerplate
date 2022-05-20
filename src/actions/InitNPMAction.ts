import type { ActionContext } from '@/core';
import { BasedAction } from '@/core';

export class InitNPMAction extends BasedAction<undefined> {
  async run(context: ActionContext) {
    await this.executeCommand(context, 'pnpm', ['init']);
    this.modifyJSONFile(
      this.resolveProjectPath(context, './package.json'),
      (json) => {
        return {
          ...json,
          name: context.project.name,
          author: context.project.author,
          license: context.project.license || 'MIT',
        };
      }
    );
  }
}
