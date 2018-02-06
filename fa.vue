<template>
  <svg
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${icon.icon[0]} ${icon.icon[1]}`"
    :style="style">
    <path fill="currentColor" :d="icon.icon[4]"></path>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object
    },
    fw: {
      type: Boolean,
      default: false
    },
    flip: {
      type: String,
      default: null,
      validator: (value) => ['horizontal', 'vertical', 'both'].indexOf(value) > -1
    },
    pull: {
      type: String,
      default: null,
      validator: (value) => ['right', 'left'].indexOf(value) > -1
    },
    rotation: {
      type: Number,
      default: null,
      validator: (value) => [90, 180, 270].indexOf(value) > -1
    },
    size: {
      type: String,
      default: null,
      validator: (value) => ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1
    },
  },

  computed: {
    style() {
      const base = {
        display: 'inline-block',
        font-size: 'inherit',
        height: '1em',
        overflow: 'visible';
        vertical-align: '-.125em'
      };
      return base;
    }
  }
};
</script>
