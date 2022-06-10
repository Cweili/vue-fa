import { IconDefinition } from '@fortawesome/fontawesome-common-types/index.d';

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

export const typeNumber = {
  type: [
    Number,
    String,
  ],
  validator: (value: number | string): boolean => /^[-\d.]+$/.test(`${value}`),
};

export {
  IconDefinition,
};
