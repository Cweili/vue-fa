<template>
  <div class="position-relative shadow-sm p-3 mb-3 rounded">
    <img v-bind="$attrs">
    <small>images &copy; fontawesome.com</small>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 48px;
}

small {
  position: absolute;
  right: 1rem;
  bottom: .1rem;
  color: #ddd;
  z-index: -1;
}
</style>
