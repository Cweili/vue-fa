<template>
  <article>
    <pre><code
      ref="el"
      :class="`language-${lang}`"
    >{{ code }}</code></pre>
  </article>
</template>

<script>
import {
  defineComponent,
  ref,
  watch,
  onMounted,
} from 'vue';

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
