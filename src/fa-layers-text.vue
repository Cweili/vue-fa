<template>
  <span class='vue-fa-layers-text'>
    <span :style="style">
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  PropType,
} from 'vue';

import {
  validFlip,
  typeNumber,
  Flip,
} from './types';

import {
  getStyles,
  getTransform,
} from './utils';

export default defineComponent({
  props: {
    size: {
      type: String,
      validator: (value: string) => /^(lg|xs|sm|([\d.]+)x)$/.test(value),
    },
    color: String,

    scale: {
      ...typeNumber,
      default: 1,
    },
    translateX: {
      ...typeNumber,
      default: 0,
    },
    translateY: {
      ...typeNumber,
      default: 0,
    },
    flip: {
      type: String as PropType<Flip>,
      validator: (value: Flip) => validFlip.indexOf(value) >= 0,
    },
    rotate: typeNumber,
  },

  setup(props) {
    return {
      style: computed(() => ({
        ...getStyles(
          props.size,
        ),
        color: props.color,
        transform: getTransform(
          props.scale,
          props.translateX,
          props.translateY,
          props.rotate,
          props.flip,
          undefined,
          'em',
          'deg',
        ),
      })),
    };
  },
});
</script>
