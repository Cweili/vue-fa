import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export const validFlip = [
  'horizontal',
  'vertical',
  'both',
] as const;
export type Flip = typeof validFlip[number];

export const validPull = [
  'right',
  'left',
] as const;
export type Pull = typeof validPull[number];

export {
  IconDefinition,
};
