<template>
  <div class="container my-4">
    <showcase />
    <docs />
  </div>
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
