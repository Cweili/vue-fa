<template>
  <main class="container">
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
