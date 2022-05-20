import type { Author } from './Author';

export interface Project {
  name: string;
  author: Author;
  rootDir: string;
  license?: string;
}
