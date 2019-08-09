import {
  faFlag,
  faHome,
  faQuoteLeft,
  faQuoteRight,
  faMagic,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFlag as fadFlag,
} from '@fortawesome/pro-duotone-svg-icons';
import Fa from '../dist/vue-fa';

export default {
  components: {
    Fa,
  },

  data() {
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
};
