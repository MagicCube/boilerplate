import { InitNPMAction } from '@/actions';

import { QuickStack } from './QuickStack';

export const vanillaStack = new QuickStack('vanilla')
  .createFolder('./')
  .run(new InitNPMAction())
  .installDevDependencies(
    'vite',
    'typescript',
    'eslint',
    'prettier',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint-config-prettier',
    'eslint-plugin-prettier',
    'vite-tsconfig-paths'
  )
  .installDependencies('classnames')
  .copy('./vanilla-ts/.gitignore', './.gitignore')
  .copy('./vanilla-ts/.prettierrc', './.prettierrc')
  .copy('./vanilla-ts/.eslintrc', './.eslintrc')
  .copy('./vanilla-ts/README.md', './README.md')
  .copy('./vanilla-ts/tsconfig.json', './tsconfig.json')
  .copy('./vanilla-ts/vite.config.ts', './vite.config.ts')
  .copy('./vanilla-ts/index.html', './index.html')
  .copy('./vanilla-ts/src/index.ts', './src/index.ts');
