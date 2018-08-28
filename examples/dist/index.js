(function (Vue) {
'use strict';

Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

var Fa = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('svg', { directives: [{ name: "show", rawName: "v-show", value: _vm.icon.icon[4], expression: "icon.icon[4]" }], style: _vm.style, attrs: { "aria-hidden": "true", "role": "img", "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 " + _vm.icon.icon[0] + " " + _vm.icon.icon[1] } }, [_vm.icon.icon[4] ? _c('g', { attrs: { "transform": "translate(256 256)" } }, [_c('g', { attrs: { "transform": _vm.transform } }, [_c('path', { attrs: { "fill": "currentColor", "d": _vm.icon.icon[4], "transform": "translate(-256 -256)" } })])]) : _vm._e()]);
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
      if (!this.icon.icon[4]) {
        return {};
      }
      var base = {
        height: '1em',
        overflow: 'visible'
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

/*!
 * Font Awesome Free 5.3.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var faBook={prefix:'fas',iconName:'book',icon:[448,512,[],"f02d","M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"]};var faCog={prefix:'fas',iconName:'cog',icon:[512,512,[],"f013","M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z"]};var faFlag={prefix:'fas',iconName:'flag',icon:[512,512,[],"f024","M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"]};var faHome={prefix:'fas',iconName:'home',icon:[576,512,[],"f015","M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z"]};var faInfo={prefix:'fas',iconName:'info',icon:[192,512,[],"f129","M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"]};var faMagic={prefix:'fas',iconName:'magic',icon:[512,512,[],"f0d0","M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"]};var faPencilAlt={prefix:'fas',iconName:'pencil-alt',icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]};var faQuoteLeft={prefix:'fas',iconName:'quote-left',icon:[512,512,[],"f10d","M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"]};var faQuoteRight={prefix:'fas',iconName:'quote-right',icon:[512,512,[],"f10e","M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"]};

var App = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "m-4" }, [_vm._m(0), _vm._v(" "), _c('h4', [_vm._v("Installation")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h4', [_vm._v("Basic Use")]), _vm._v(" "), _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded" }, [_c('fa', { attrs: { "icon": _vm.faFlag } }), _vm._v(" Flag ")], 1), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded" }, [_c('div', { staticStyle: { "font-size": "3em", "color": "tomato" } }, [_c('fa', { attrs: { "icon": _vm.faFlag } })], 1)]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('h4', [_vm._v("Additional Styling")]), _vm._v(" "), _c('h5', [_vm._v("Icon Sizes")]), _vm._v(" "), _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded" }, [_c('fa', { attrs: { "icon": _vm.faFlag, "size": "xs" } }), _vm._v(" "), _c('fa', { attrs: { "icon": _vm.faFlag, "size": "sm" } }), _vm._v(" "), _c('fa', { attrs: { "icon": _vm.faFlag, "size": "lg" } }), _vm._v(" "), _c('fa', { attrs: { "icon": _vm.faFlag, "size": "2x" } }), _vm._v(" "), _c('fa', { attrs: { "icon": _vm.faFlag, "size": "2.5x" } }), _vm._v(" "), _c('fa', { attrs: { "icon": _vm.faFlag, "size": "5x" } }), _vm._v(" "), _c('fa', { attrs: { "icon": _vm.faFlag, "size": "7x" } }), _vm._v(" "), _c('fa', { attrs: { "icon": _vm.faFlag, "size": "10x" } })], 1), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('h5', [_vm._v("Fixed Width Icons")]), _vm._v(" "), _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded" }, [_c('div', [_c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faHome, "fw": "" } }), _vm._v(" Home")], 1), _vm._v(" "), _c('div', [_c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faInfo, "fw": "" } }), _vm._v(" Info")], 1), _vm._v(" "), _c('div', [_c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faBook, "fw": "" } }), _vm._v(" Library")], 1), _vm._v(" "), _c('div', [_c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faPencilAlt, "fw": "" } }), _vm._v(" Applications")], 1), _vm._v(" "), _c('div', [_c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faCog, "fw": "" } }), _vm._v(" Settins")], 1)]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('h5', [_vm._v("Pulled Icons")]), _vm._v(" "), _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded clearfix" }, [_c('fa', { attrs: { "icon": _vm.faQuoteLeft, "pull": "left", "size": "2x" } }), _vm._v(" "), _c('fa', { attrs: { "icon": _vm.faQuoteRight, "pull": "right", "size": "2x" } }), _vm._v(" Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past. ")], 1), _vm._v(" "), _vm._m(7), _vm._v(" "), _c('h4', [_vm._v("Power Transforms")]), _vm._v(" "), _c('h5', [_vm._v("Rotating & Flipping")]), _vm._v(" "), _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded" }, [_c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faMagic, "size": "4x", "rotate": 90 } }), _vm._v(" "), _c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faMagic, "size": "4x", "rotate": 180 } }), _vm._v(" "), _c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faMagic, "size": "4x", "rotate": "270" } }), _vm._v(" "), _c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faMagic, "size": "4x", "rotate": "30" } }), _vm._v(" "), _c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faMagic, "size": "4x", "rotate": "-30" } }), _vm._v(" "), _c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faMagic, "size": "4x", "flip": "vertical" } }), _vm._v(" "), _c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faMagic, "size": "4x", "flip": "horizontal" } }), _vm._v(" "), _c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faMagic, "size": "4x", "flip": "both" } }), _vm._v(" "), _c('fa', { staticStyle: { "background": "mistyrose" }, attrs: { "icon": _vm.faMagic, "size": "4x", "flip": "both", "rotate": "30" } })], 1), _vm._v(" "), _vm._m(8)]);
  }, staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "jumbotron" }, [_c('h1', [_vm._v("vue-fa")]), _vm._v(" "), _c('p', { staticClass: "lead" }, [_vm._v(" Simple "), _c('a', { attrs: { "href": "https://fontawesome.com/", "target": "_blank" } }, [_vm._v("FontAwesome 5")]), _vm._v(" "), _c('a', { attrs: { "href": "https://vuejs.org/", "target": "_blank" } }, [_vm._v("Vue.js 2")]), _vm._v(" component. ")])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded bg-dark" }, [_c('pre', { staticClass: "mb-0 text-white" }, [_c('code', [_vm._v("npm install vue-fa --save")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded bg-dark" }, [_c('pre', { staticClass: "mb-0 text-white" }, [_c('code', [_vm._v("import Fa from 'vue-fa'\nimport { faFlag } from '@fortawesome/free-solid-svg-icons'\n\nexport default {\n  components: {\n    Fa\n  },\n\n  data() {\n    return {\n      faFlag\n    }\n  }\n}")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded bg-dark" }, [_c('pre', { staticClass: "mb-0 text-white" }, [_c('code', [_vm._v("<fa :icon=\"faFlag\"/> Flag")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded bg-dark" }, [_c('pre', { staticClass: "mb-0 text-white" }, [_c('code', [_vm._v("<div style=\"font-size: 3em; color: tomato\">\n  <fa :icon=\"faFlag\"/>\n</div>")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded bg-dark" }, [_c('pre', { staticClass: "mb-0 text-white" }, [_c('code', [_vm._v("<fa :icon=\"faFlag\" size=\"xs\"/>\n<fa :icon=\"faFlag\" size=\"xs\"/>\n<fa :icon=\"faFlag\" size=\"sm\"/>\n<fa :icon=\"faFlag\" size=\"lg\"/>\n<fa :icon=\"faFlag\" size=\"2x\"/>\n<fa :icon=\"faFlag\" size=\"2.5x\"/>\n<fa :icon=\"faFlag\" size=\"5x\"/>\n<fa :icon=\"faFlag\" size=\"7x\"/>\n<fa :icon=\"faFlag\" size=\"10x\"/>")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded bg-dark" }, [_c('pre', { staticClass: "mb-0 text-white" }, [_c('code', [_vm._v("<div><fa :icon=\"faHome\" fw style=\"background: mistyrose\"/></div>\n<div><fa :icon=\"faInfo\" fw style=\"background: mistyrose\"/></div>\n<div><fa :icon=\"faBook\" fw style=\"background: mistyrose\"/></div>\n<div><fa :icon=\"faPencilAlt\" fw style=\"background: mistyrose\"/></div>\n<div><fa :icon=\"faCog\" fw style=\"background: mistyrose\"/></div>")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded bg-dark" }, [_c('pre', { staticClass: "mb-0 text-white" }, [_c('code', [_vm._v("<fa :icon=\"faQuoteLeft\" pull=\"left\" size=\"2x\"/>\n<fa :icon=\"faQuoteRight\" pull=\"right\" size=\"2x\"/>\nGatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.")])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "shadow-sm p-3 mb-3 rounded bg-dark" }, [_c('pre', { staticClass: "mb-0 text-white" }, [_c('code', [_vm._v("<fa :icon=\"faMagic\" size=\"4x\" :rotate=\"90\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" :rotate=\"180\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" rotate=\"270\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" rotate=\"30\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" rotate=\"-30\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"vertical\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"horizontal\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>")])])]);
  }],
  components: {
    Fa: Fa
  },

  data: function data() {
    return {
      faFlag: faFlag,
      faHome: faHome,
      faInfo: faInfo,
      faBook: faBook,
      faPencilAlt: faPencilAlt,
      faCog: faCog,
      faQuoteLeft: faQuoteLeft,
      faQuoteRight: faQuoteRight,
      faMagic: faMagic
    };
  }
};

new Vue({
  el: '#app',
  components: { App: App },
  render: function render(h) {
    return h('app');
  }
});

}(Vue));
