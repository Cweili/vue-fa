<template>
  <div class="container my-4">
    <showcase />
    <docs />
  </div>
</template>

<script>
import Showcase from './showcase.vue';
import Docs from './docs.vue';

export default {
  components: {
    Showcase,
    Docs,
  },
};
</script>
