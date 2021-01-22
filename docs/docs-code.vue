<template>
  <div class="shadow-sm mb-3 rounded">
    <pre><code
      ref="el"
      :class="`language-${lang}`"
    >{{ code }}</code></pre>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  onMounted,
} from 'vue';

declare global {
  interface Window {
    Prism: any
  }
}

export default defineComponent({
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

  setup(props) {
    const el = ref();

    const highlight = () => {
      if (el.value) {
        window.Prism.highlightElement(el.value);
      }
    };

    watch(() => props.code, highlight);

    onMounted(highlight);

    return {
      el,
    };
  },
});
</script>
