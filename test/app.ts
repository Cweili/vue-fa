import {
  faFlag,
  faHome,
  faQuoteLeft,
  faQuoteRight,
  faMagic,
  fadFlag,
} from '@cweili/fa-test-util';
import { defineComponent } from 'vue';
import Fa from '../dist/vue-fa.esm';

export default defineComponent({
  components: {
    Fa,
  },

  setup() {
    return {
      faFlag,
      faHome,
      faQuoteLeft,
      faQuoteRight,
      faMagic,
      fadFlag,
      theme: {
        primaryColor: 'red',
        secondaryColor: '#000000',
        primaryOpacity: 0.8,
        secondaryOpacity: 0.6,
      },
    };
  },
});
