<template>
  <main class="container my-4">
    <showcase />
    <docs />
  </main>
</template>

<script>
import { defineComponent } from 'vue';

import Showcase from './showcase.vue';
import Docs from './docs.vue';

export default defineComponent({
  components: {
    Showcase,
    Docs,
  },
});
</script>

<style scoped>
.my-4 {
  margin-top: calc(var(--pico-block-spacing-vertical) * 4);
  margin-bottom: calc(var(--pico-block-spacing-vertical) * 4);
}
</style>
