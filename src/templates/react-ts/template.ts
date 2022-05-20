import type { Template } from '@/core';
import { reactStack } from '@/stacks';

import { vanillaTSTemplate } from '../vanilla-ts/template';

export const reactTSTemplate: Template = {
  id: 'react-ts',
  name: 'React TypeScript',
  inherits: [vanillaTSTemplate],
  stacks: [reactStack],
};
