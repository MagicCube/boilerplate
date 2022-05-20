import { QuickStack } from './QuickStack';

export const reactStack = new QuickStack('basic')
  .installDevDependencies(
    '@types/react',
    '@types/react-dom',
    '@vitejs/plugin-react',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks'
  )
  .installDependencies('react', 'react-dom')
  .copy('./react-ts/.eslintrc', './.eslintrc')
  .copy('./react-ts/vite.config.ts', './vite.config.ts')
  .delete('src/index.ts')
  .copy('./react-ts/src/index.tsx', './src/index.tsx')
  .copy('./react-ts/index.html', './index.html');
