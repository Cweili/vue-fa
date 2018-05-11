<template>
  <svg
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="`0 0 ${icon.icon[0]} ${icon.icon[1]}`"
    :style="style">
    <path fill="currentColor" :d="icon.icon[4]"/>
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
    rotation: {
      type: Number,
      default: null,
      validator: value => [90, 180, 270].indexOf(value) >= 0
    },
    size: {
      type: String,
      default: null,
      validator: value => /^(lg|xs|sm|(\d+)x)$/.test(value)
    }
  },

  computed: {
    style() {
      const base = {
        display: 'inline-block',
        fontSize: 'inherit',
        height: '1em',
        overflow: 'visible',
        verticalAlign: '-.125em'
      };
      const {
        fw,
        flip,
        pull,
        rotation,
        size
      } = this;

      if (fw) {
        base.textAlign = 'center';
        base.width = '1.25em';
      }

      if (flip) {
        if (flip == 'horizontal') {
          base.msFilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)';
          base.transform = base.webkitTransform = 'scale(-1, 1)';
        } else if (flip == 'vertical') {
          base.msFilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)';
          base.transform = base.webkitTransform = 'scale(1, -1)';
        } else {
          base.msFilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)';
          base.transform = base.webkitTransform = 'scale(-1, -1)';
        }
      }

      if (pull) {
        base.float = pull;
      }

      if (rotation) {
        base.msFilter = `progid:DXImageTransform.Microsoft.BasicImage(rotation=${rotation / 90})`;
        base.transform = base.webkitTransform = `rotate(${rotation}deg)`;
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
    }
  }
};
</script>
