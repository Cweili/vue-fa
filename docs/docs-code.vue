<template>
  <div class="shadow-sm mb-3 rounded">
    <pre><code
      :class="`language-${lang}`"
      v-ref="el"
    >{{ code }}</code></pre>
  </div>
</template>

<script>
/* global Prism */

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

  watch: {
    code: 'highlight',
  },

  mounted() {
    this.highlight();
  },

  methods: {
    highlight() {
      const { el } = this.$refs;
      if (el) {
        Prism.highlightElement(el);
      }
    },
  },
};
</script>
