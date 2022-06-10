<template>
  <svg
    v-show="i[4]"
    :viewBox="`0 0 ${i[0]} ${i[1]}`"
    :class="{
      'vue-fa': true,
      spin,
      pulse,
    }"
    :style="style"
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      v-if="i[4]"
      :transform="`translate(${i[0] / 2} ${i[1] / 2})`"
      :transform-origin="`${i[0] / 4} 0`"
    >
      <g :transform="transform">
        <path
          v-if="typeof i[4] === 'string'"
          :d="i[4]"
          :fill="color || primaryColor || 'currentColor'"
          :transform="`translate(${i[0] / -2} ${i[1] / -2})`"
        />
        <template v-else>
          <path
            :d="i[4][0]"
            :fill="secondaryColor || color || 'currentColor'"
            :fill-opacity="swapOpacity !== false ? primaryOpacity : secondaryOpacity"
            :transform="`translate(${i[0] / -2} ${i[1] / -2})`"
          />
          <path
            :d="i[4][1]"
            :fill="primaryColor || color || 'currentColor'"
            :fill-opacity="swapOpacity !== false ? secondaryOpacity : primaryOpacity"
            :transform="`translate(${i[0] / -2} ${i[1] / -2})`"
          />
        </template>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  PropType,
} from 'vue';

import {
  validFlip,
  validPull,
  typeNumber,
  IconDefinition,
  Flip,
  Pull,
} from './types';

import {
  getStyles,
  getTransform,
} from './utils';

export default defineComponent({
  props: {
    icon: {
      type: Object as PropType<IconDefinition>,
      required: true,
    },

    size: {
      type: String,
      validator: (value: string) => /^(lg|xs|sm|([\d.]+)x)$/.test(value),
    },
    color: String,

    fw: Boolean,
    pull: {
      type: String as PropType<Pull>,
      validator: (value: Pull) => validPull.indexOf(value) >= 0,
    },

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

    spin: Boolean,
    pulse: Boolean,

    primaryColor: String,
    secondaryColor: String,
    primaryOpacity: {
      type: [
        Number,
        String,
      ],
      default: 1,
    },
    secondaryOpacity: {
      type: [
        Number,
        String,
      ],
      default: 0.4,
    },
    swapOpacity: Boolean,
  },

  setup(props) {
    const i = () => props.icon?.icon ?? [0, 0, '', [], ''];

    return {
      i: computed(i),
      style: computed(() => {
        if (!i()[4]) {
          return {};
        }
        return getStyles(
          props.size,
          props.pull,
          props.fw,
        );
      }),
      transform: computed(() => getTransform(
        props.scale,
        props.translateX,
        props.translateY,
        props.rotate,
        props.flip,
        512,
      )),
    };
  },
});
</script>

<style scoped>
.spin {
  animation: spin 2s 0s infinite linear;
}

.pulse {
  animation: spin 1s infinite steps(8);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
