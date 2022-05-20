import { QuickStack } from './QuickStack';

export const reactStack = new QuickStack('basic')
  .installDevDependencies(
    '@types/react',
    '@types/react-dom',
    '@vitejs/plugin-react',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks'
  )
  .installDependencies('react', 'react-dom');
