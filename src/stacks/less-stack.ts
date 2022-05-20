import { QuickStack } from './QuickStack';

export const lessStack = new QuickStack('less')
  .installDevDependencies('less')
  .copy('./vanilla-ts/src/typings/less.d.ts', './src/typings/less.d.ts');
