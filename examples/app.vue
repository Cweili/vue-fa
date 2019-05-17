<template>
  <div class="container mt-4 mb-4">
    <showcase/>
    <docs/>
  </div>
</template>

<script>
import Showcase from './showcase.vue'
import Docs from './docs.vue'

export default {
  components: {
    Showcase,
    Docs
  }
}
</script>
