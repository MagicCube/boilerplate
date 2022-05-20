import childProcess from 'child_process';
import path from 'path';
import prompts from 'prompts';

import type { Author, Project } from '@/core';
import { createProject } from '@/core';
import { templates } from '@/templates';

export async function main() {
  const response = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'Input project name',
    },
    {
      type: 'select',
      name: 'templateId',
      message: 'Choose project type',
      choices: Object.entries(templates).map(([id, template]) => ({
        title: template.name,
        description: template.tags ? template.tags.join(', ') : '',
        value: id,
      })),
    },
  ]);
  const author = await getAuthorFromGit();
  const project: Project = {
    name: response.projectName,
    author,
    rootDir: path.resolve(process.cwd(), response.projectName),
  };
  const template = templates[response.templateId];
  createProject(project, template);
}

async function getAuthorFromGit(): Promise<Author> {
  const name = await exec('git config --global user.name');
  const email = await exec('git config --global user.email');
  return { name, email };
}

function exec(command: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    childProcess.exec(command, (error, stdout, stderr) => {
      if (stderr) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}
