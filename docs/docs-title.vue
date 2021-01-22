<template>
  <h4
    :id="id"
    :class="`h${level}`"
  >
    <a :href="`#${id}`">{{ title }}</a> <small><Fa :icon="faLink" /></small>
  </h4>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
} from 'vue';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Fa from 'vue-fa';

export default defineComponent({
  components: {
    Fa,
  },

  props: {
    level: {
      default: 4,
    },
    title: {
      default: '',
    },
  },

  setup(props) {
    return {
      faLink,
      id: computed(() => props.title.toLowerCase().replace(/[^\w]/g, '-')),
    };
  },
});
</script>

<style scoped>
a,
a:visited {
  color: currentColor;
}

small {
  visibility: hidden;
}

a:hover + small {
  visibility: visible;
}
</style>
