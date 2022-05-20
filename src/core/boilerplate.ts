import type { Action } from './action';
import type { Context, Project, Template } from './types';

export async function createProject(project: Project, template: Template) {
  const context: Context = {
    project,
    template,
  };
  const actions = getActionsFromTemplate(template);
  console.info(actions);
  for (const action of actions) {
    await action.run(context);
  }
}

function getActionsFromTemplate(template: Template) {
  const actions: Action[] = [];
  if (template.inherits) {
    for (const inheritedTemplate of template.inherits) {
      actions.push(...getActionsFromTemplate(inheritedTemplate));
    }
  }
  for (const stack of template.stacks) {
    for (const action of stack.actions) {
      actions.push(action);
    }
  }
  return actions;
}
