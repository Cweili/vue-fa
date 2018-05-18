<template>
  <svg
    v-show="icon.icon[4]"
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${icon.icon[0]} ${icon.icon[1]}`"
    :style="style">
    <g transform="translate(256 256)">
      <g :transform="transform">
        <path fill="currentColor" :d="icon.icon[4]" transform="translate(-256 -256)"/>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      default: () => ({
        icon: [0, 0, '', [], '']
      })
    },
    fw: {
      type: Boolean,
      default: false
    },
    flip: {
      type: String,
      default: null,
      validator: value => ['horizontal', 'vertical', 'both'].indexOf(value) >= 0
    },
    pull: {
      type: String,
      default: null,
      validator: value => ['right', 'left'].indexOf(value) >= 0
    },
    rotate: {
      type: [
        Number,
        String
      ],
      default: null,
      validator: value => /^[-\d\.]+$/.test(`${value}`)
    },
    size: {
      type: String,
      default: null,
      validator: value => /^(lg|xs|sm|([\d\.]+)x)$/.test(value)
    }
  },

  computed: {
    style() {
      const base = {
        fontSize: 'inherit',
        height: '1em',
        overflow: 'visible',
        verticalAlign: '-.125em'
      };
      const {
        fw,
        pull,
        size
      } = this;

      if (fw) {
        base.textAlign = 'center';
        base.width = '1.25em';
      }

      if (pull) {
        base.float = pull;
      }

      if (size) {
        if (size == 'lg') {
          base.fontSize = '1.33333em';
          base.lineHeight = '.75em';
          base.verticalAlign = '-.0667em';
        } else if (size == 'xs') {
          base.fontSize = '.75em';
        } else if (size == 'sm') {
          base.fontSize = '.875em';
        } else {
          base.fontSize = size.replace('x', 'em');
        }
      }

      return base;
    },
    transform() {
      const {
        flip,
        rotate
      } = this;

      let transform = '';

      if (flip) {
        let flipX = 1;
        let flipY = 1;
        if (flip == 'horizontal') {
          flipX = -1;
        } else if (flip == 'vertical') {
          flipY = -1;
        } else {
          flipX = flipY = -1;
        }
        transform += ` scale(${flipX} ${flipY})`;
      }

      if (rotate) {
        transform += ` rotate(${rotate} 0 0)`;
      }

      return transform;
    }
  }
};
</script>
