<template>
  <span
    class='vue-fa-layers'
    :style="style"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  PropType,
} from 'vue';

import {
  validPull,
  Pull,
} from './types';

import {
  getStyles,
} from './utils';

export default defineComponent({
  props: {
    size: {
      type: String,
      validator: (value: string) => /^(lg|xs|sm|([\d.]+)x)$/.test(value),
    },
    pull: {
      type: String as PropType<Pull>,
      validator: (value: Pull) => validPull.indexOf(value) >= 0,
    },
  },

  setup(props) {
    return {
      style: computed(() => getStyles(
        props.size,
        props.pull,
        true,
      )),
    };
  },
});
</script>

<style scoped>
.vue-fa-layers {
  display: inline-block;
  position: relative;
}

.vue-fa-layers :deep(.vue-fa) {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  text-align: center;
}

.vue-fa-layers :deep(.vue-fa-layers-text) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.vue-fa-layers :deep(.vue-fa-layers-text span) {
  display: inline-block;
}
</style>
