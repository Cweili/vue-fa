'use strict';

var fa = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { directives: [{ name: "show", rawName: "v-show", value: _vm.icon.icon[4], expression: "icon.icon[4]" }], style: _vm.style, attrs: { "aria-hidden": "true", "role": "img", "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 " + _vm.icon.icon[0] + " " + _vm.icon.icon[1] } }, [_c('g', { attrs: { "transform": "translate(256 256)" } }, [_c('g', { attrs: { "transform": _vm.transform } }, [_c('path', { attrs: { "fill": "currentColor", "d": _vm.icon.icon[4], "transform": "translate(-256 -256)" } })])])]);
  }, staticRenderFns: [],
  props: {
    icon: {
      type: Object,
      default: function _default() {
        return {
          icon: [0, 0, '', [], '']
        };
      }
    },
    fw: {
      type: Boolean,
      default: false
    },
    flip: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['horizontal', 'vertical', 'both'].indexOf(value) >= 0;
      }
    },
    pull: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['right', 'left'].indexOf(value) >= 0;
      }
    },
    rotate: {
      type: [Number, String],
      default: null,
      validator: function validator(value) {
        return (/^[-\d\.]+$/.test("" + value)
        );
      }
    },
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return (/^(lg|xs|sm|([\d\.]+)x)$/.test(value)
        );
      }
    }
  },

  computed: {
    style: function style() {
      var base = {
        fontSize: 'inherit',
        height: '1em',
        overflow: 'visible',
        verticalAlign: '-.125em'
      };
      var fw = this.fw,
          pull = this.pull,
          size = this.size;


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
    transform: function transform() {
      var flip = this.flip,
          rotate = this.rotate;


      var transform = '';

      if (flip) {
        var flipX = 1;
        var flipY = 1;
        if (flip == 'horizontal') {
          flipX = -1;
        } else if (flip == 'vertical') {
          flipY = -1;
        } else {
          flipX = flipY = -1;
        }
        transform += " scale(" + flipX + " " + flipY + ")";
      }

      if (rotate) {
        transform += " rotate(" + rotate + " 0 0)";
      }

      return transform;
    }
  }
};

module.exports = fa;
