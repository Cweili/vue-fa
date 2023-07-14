import {
  PropType,
} from 'vue';

const validFlip = [
  'horizontal',
  'vertical',
  'both',
] as const;
type Flip = typeof validFlip[number];

const validPull = [
  'right',
  'left',
] as const;
type Pull = typeof validPull[number];

const typeNumber = {
  type: [
    Number,
    String,
  ],
  validator: (value: number | string): boolean => /^[-\d.]+$/.test(`${value}`),
};

export const size = {
  type: String,
  validator: (value: string) => /^(lg|xs|sm|([\d.]+)x)$/.test(value),
};

export const color = String;

export const pull = {
  type: String as PropType<Pull>,
  validator: (value: Pull) => validPull.indexOf(value) >= 0,
};

export const scale = {
  ...typeNumber,
  default: 1,
};

export const translate = {
  ...typeNumber,
  default: 0,
};

export const flip = {
  type: String as PropType<Flip>,
  validator: (value: Flip) => validFlip.indexOf(value) >= 0,
};

export const rotate = typeNumber;
