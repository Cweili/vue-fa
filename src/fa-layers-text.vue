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
} from 'vue';

import {
  size,
  color,
  scale,
  translate,
  flip,
  rotate,
} from './props';

import {
  getStyles,
  getTransform,
} from './utils';

export default defineComponent({
  props: {
    size,
    color,

    scale,
    translateX: translate,
    translateY: translate,
    flip,
    rotate,
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
