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
} from 'vue';

import {
  size,
  pull,
} from './props';

import {
  getStyles,
} from './utils';

export default defineComponent({
  props: {
    size,
    pull,
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
