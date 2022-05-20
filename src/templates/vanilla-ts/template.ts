import type { Template } from '@/core';
import { vanillaStack, lessStack } from '@/stacks';

export const vanillaTSTemplate: Template = {
  id: 'vanilla-ts',
  name: 'Vanilla TypeScript',
  tags: ['html', 'typescript', 'less'],
  stacks: [vanillaStack, lessStack],
};
