<template>
  <div class="shadow-sm mb-3 rounded">
    <pre><code :class="`language-${lang}`">{{ code }}</code></pre>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: 'html',
    },
  },
};
</script>
