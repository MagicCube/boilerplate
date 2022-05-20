import type { Project } from './Project';
import type { Template } from './Template';

export interface Context {
  project: Project;
  template: Template;
}
