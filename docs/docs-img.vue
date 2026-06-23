<template>
  <article class="img-card">
    <img v-bind="$attrs">
    <small class="credit">images &copy; fontawesome.com</small>
  </article>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped>
.img-card {
  position: relative;
}

img {
  max-width: 100%;
  max-height: 48px;
}

.credit {
  position: absolute;
  bottom: 0.25rem;
  right: 0.5rem;
  font-size: 0.65rem;
  opacity: 0.35;
  transition: opacity 0.3s;
}

.img-card:hover .credit {
  opacity: 0.7;
}
</style>
