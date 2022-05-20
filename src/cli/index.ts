import childProcess from 'child_process';
import prompts from 'prompts';

import { templates } from '@/templates';
import type { Author, Project } from '@/core';
import { createProject } from '@/core';

export async function main() {
  // const response = await prompts([
  //   {
  //     type: 'select',
  //     name: 'templateName',
  //     message: 'Choose project type',
  //     choices: [
  //       {
  //         title: 'React Typescript',
  //         description: 'HTML, TypeScript, React, LESS',
  //         value: 'react-typescript',
  //       },
  //       {
  //         title: 'Vanilla TypeScript',
  //         description: 'HTML, TypeScript, LESS',
  //         value: 'vanilla-typescript',
  //       },
  //     ],
  //   },
  // ]);
  // console.info(response);
  const author = await getAuthorFromGit();
  const project: Project = {
    name: 'test',
    author,
    rootDir: '/Users/henry/Desktop/test',
  };
  const template = templates['react-ts'];
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
