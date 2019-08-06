(function (Vue, Fa) {
  'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
  Fa = Fa && Fa.hasOwnProperty('default') ? Fa['default'] : Fa;

  var faBook={prefix:'fas',iconName:'book',icon:[448,512,[],"f02d","M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"]};var faCog={prefix:'fas',iconName:'cog',icon:[512,512,[],"f013","M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"]};var faFlag={prefix:'fas',iconName:'flag',icon:[512,512,[],"f024","M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"]};var faHome={prefix:'fas',iconName:'home',icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]};var faInfo={prefix:'fas',iconName:'info',icon:[192,512,[],"f129","M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"]};var faMagic={prefix:'fas',iconName:'magic',icon:[512,512,[],"f0d0","M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"]};var faPencilAlt={prefix:'fas',iconName:'pencil-alt',icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]};var faQuoteLeft={prefix:'fas',iconName:'quote-left',icon:[512,512,[],"f10d","M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"]};var faQuoteRight={prefix:'fas',iconName:'quote-right',icon:[512,512,[],"f10e","M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"]};

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = " .hue { color: #238ae6; animation: hue 30s infinite linear; } @keyframes hue { from { filter: hue-rotate(0deg); } to { filter: hue-rotate(-360deg); } } ";
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  })();
  var Showcase = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', {
        staticClass: "jumbotron"
      }, [_c('div', {
        staticClass: "row"
      }, [_c('div', {
        staticClass: "col-md"
      }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('form', {
        on: {
          "submit": function submit($event) {
            $event.preventDefault();
          }
        }
      }, [_c('div', {
        staticClass: "form-group row"
      }, [_c('label', {
        staticClass: "col-sm-3 col-form-label"
      }, [_vm._v("Icon Sizes")]), _vm._v(" "), _c('div', {
        staticClass: "col-sm-9 row"
      }, [_c('div', {
        staticClass: "col-md-8 py-2"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.model.size,
          expression: "model.size"
        }],
        staticClass: "form-control-range",
        attrs: {
          "type": "range",
          "min": "1",
          "max": "10",
          "step": "0.1"
        },
        domProps: {
          "value": _vm.model.size
        },
        on: {
          "__r": function __r($event) {
            return _vm.$set(_vm.model, "size", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "col-md-4"
      }, [_c('div', {
        staticClass: "form-control text-center"
      }, [_vm._v(" " + _vm._s(_vm.model.size) + "x ")])])])]), _vm._v(" "), _c('div', {
        staticClass: "form-group row"
      }, [_c('label', {
        staticClass: "col-sm-3 col-form-label"
      }, [_vm._v("Pulled Icons")]), _vm._v(" "), _c('div', {
        staticClass: "col-sm-9"
      }, [_c('div', {
        staticClass: "btn-group",
        attrs: {
          "role": "group",
          "aria-label": "Basic example"
        }
      }, _vm._l(_vm.pull, function (p) {
        return _c('button', {
          key: p,
          class: "btn btn-" + _vm.checked('pull', p),
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.setValue('pull', p);
            }
          }
        }, [_vm._v(" " + _vm._s(p) + " ")]);
      }), 0)])]), _vm._v(" "), _c('div', {
        staticClass: "form-group row"
      }, [_c('label', {
        staticClass: "col-sm-3 col-form-label"
      }, [_vm._v("Flip")]), _vm._v(" "), _c('div', {
        staticClass: "col-sm-9"
      }, [_c('div', {
        staticClass: "btn-group",
        attrs: {
          "role": "group",
          "aria-label": "Basic example"
        }
      }, _vm._l(_vm.flip, function (f) {
        return _c('button', {
          key: f,
          class: "btn btn-" + _vm.checked('flip', f),
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.setValue('flip', f);
            }
          }
        }, [_vm._v(" " + _vm._s(f) + " ")]);
      }), 0)])]), _vm._v(" "), _c('div', {
        staticClass: "form-group row"
      }, [_c('label', {
        staticClass: "col-sm-3 col-form-label"
      }, [_vm._v("Rotate")]), _vm._v(" "), _c('div', {
        staticClass: "col-sm-9 row"
      }, [_c('div', {
        staticClass: "col-md-8 py-2"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.model.rotate,
          expression: "model.rotate"
        }],
        staticClass: "form-control-range",
        attrs: {
          "type": "range",
          "min": "-360",
          "max": "360",
          "step": "1"
        },
        domProps: {
          "value": _vm.model.rotate
        },
        on: {
          "__r": function __r($event) {
            return _vm.$set(_vm.model, "rotate", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "col-md-4"
      }, [_c('div', {
        staticClass: "form-control text-center"
      }, [_vm._v(" " + _vm._s(_vm.model.rotate) + "deg ")])])])])])]), _vm._v(" "), _c('div', {
        staticClass: "col-md row"
      }, _vm._l(_vm.icons, function (icon, i) {
        return _c('div', {
          key: i,
          staticClass: "col text-center hue"
        }, [_c('fa', {
          attrs: {
            "icon": icon,
            "flip": _vm.model.flip,
            "pull": _vm.model.pull,
            "rotate": _vm.model.rotate,
            "size": _vm.model.size + "x"
          }
        })], 1);
      }), 0)])]);
    },
    staticRenderFns: [function () {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('h1', {
        staticClass: "hue"
      }, [_c('strong', [_vm._v("vue-fa")])]);
    }, function () {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('p', {
        staticClass: "lead mb-5"
      }, [_vm._v(" Tiny "), _c('a', {
        attrs: {
          "href": "https://fontawesome.com/",
          "target": "_blank"
        }
      }, [_vm._v("FontAwesome 5")]), _vm._v(" component for "), _c('a', {
        attrs: {
          "href": "https://vuejs.org/",
          "target": "_blank"
        }
      }, [_vm._v("Vue.js")]), _vm._v(". ")]);
    }],
    components: {
      Fa: Fa
    },
    data: function data() {
      return {
        model: {
          size: 5,
          pull: undefined,
          flip: undefined,
          rotate: 0
        },
        pull: ['None', 'Left', 'Right'],
        flip: ['None', 'Horizontal', 'Vertical', 'Both'],
        icons: [faFlag, faHome, faCog, faMagic]
      };
    },
    methods: {
      setValue: function setValue(prop, value) {
        this.model[prop] = value == 'None' ? undefined : value.toLowerCase();
      },
      checked: function checked(prop, value) {
        return this.model[prop] == (value == 'None' ? undefined : value.toLowerCase()) ? 'primary' : 'secondary';
      }
    }
  };

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = "";
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  })();
  /* global Prism */


  var DocsCode = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', {
        staticClass: "shadow-sm mb-3 rounded"
      }, [_c('pre', [_c('code', {
        directives: [{
          name: "ref",
          rawName: "v-ref",
          value: _vm.el,
          expression: "el"
        }],
        class: "language-" + _vm.lang
      }, [_vm._v(_vm._s(_vm.code))])])]);
    },
    staticRenderFns: [],
    props: {
      code: {
        type: String,
        default: ''
      },
      lang: {
        type: String,
        default: 'html'
      }
    },
    watch: {
      code: 'highlight'
    },
    mounted: function mounted() {
      this.highlight();
    },
    methods: {
      highlight: function highlight() {
        var el = this.$refs.el;

        if (el) {
          Prism.highlightElement(el);
        }
      }
    }
  };

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = "";
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  })();
  var Docs = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', [_c('h4', [_vm._v("Installation")]), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.installation[0]
        }
      }), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.installation[1],
          "lang": "js"
        }
      }), _vm._v(" "), _c('h4', [_vm._v("Basic Use")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.faFlag
        }
      }), _vm._v(" Flag ")], 1), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.basicUse[0]
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('div', {
        staticStyle: {
          "font-size": "3em",
          "color": "tomato"
        }
      }, [_c('fa', {
        attrs: {
          "icon": _vm.faFlag
        }
      })], 1)]), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.basicUse[1]
        }
      }), _vm._v(" "), _c('h4', [_vm._v("Additional Styling")]), _vm._v(" "), _c('h5', [_vm._v("Icon Sizes")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "xs"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "sm"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "lg"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "2x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "2.5x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "5x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "7x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "10x"
        }
      })], 1), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.additionalStyling[0]
        }
      }), _vm._v(" "), _c('h5', [_vm._v("Fixed Width Icons")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faHome,
          "fw": ""
        }
      }), _vm._v(" Home ")], 1), _vm._v(" "), _c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faInfo,
          "fw": ""
        }
      }), _vm._v(" Info ")], 1), _vm._v(" "), _c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faBook,
          "fw": ""
        }
      }), _vm._v(" Library ")], 1), _vm._v(" "), _c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faPencilAlt,
          "fw": ""
        }
      }), _vm._v(" Applications ")], 1), _vm._v(" "), _c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faCog,
          "fw": ""
        }
      }), _vm._v(" Settins ")], 1)]), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.additionalStyling[1]
        }
      }), _vm._v(" "), _c('h5', [_vm._v("Pulled Icons")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded clearfix"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.faQuoteLeft,
          "pull": "left",
          "size": "2x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faQuoteRight,
          "pull": "right",
          "size": "2x"
        }
      }), _vm._v(" Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past. ")], 1), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.additionalStyling[2]
        }
      }), _vm._v(" "), _c('h4', [_vm._v("Power Transforms")]), _vm._v(" "), _c('h5', [_vm._v("Rotating & Flipping")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "rotate": 90,
          "size": "4x"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "rotate": 180,
          "size": "4x"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "rotate": "270"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "rotate": "30"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "rotate": "-30"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "flip": "vertical"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "flip": "horizontal"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "flip": "both"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "flip": "both",
          "rotate": "30"
        }
      })], 1), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.powerTransforms[0]
        }
      })], 1);
    },
    staticRenderFns: [],
    components: {
      Fa: Fa,
      DocsCode: DocsCode
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
        faMagic: faMagic,
        codes: {
          installation: ['npm install vue-fa --save', "import Fa from 'vue-fa'\nimport { faFlag } from '@fortawesome/free-solid-svg-icons'\n\n" + 'export ' + "default {\n  components: {\n    Fa\n  },\n\n  data() {\n    return {\n      faFlag\n    }\n  }\n}"],
          basicUse: ['<fa :icon="faFlag" /> Flag', "<div style=\"font-size: 3em; color: tomato\">\n  <fa :icon=\"faFlag\" />\n</div>"],
          additionalStyling: ["<fa :icon=\"faFlag\" size=\"xs\" />\n<fa :icon=\"faFlag\" size=\"sm\" />\n<fa :icon=\"faFlag\" size=\"lg\" />\n<fa :icon=\"faFlag\" size=\"2x\" />\n<fa :icon=\"faFlag\" size=\"2.5x\" />\n<fa :icon=\"faFlag\" size=\"5x\" />\n<fa :icon=\"faFlag\" size=\"7x\" />\n<fa :icon=\"faFlag\" size=\"10x\" />", "<div>\n  <fa :icon=\"faHome\" fw style=\"background: mistyrose\" /> Home\n</div>\n<div>\n  <fa :icon=\"faInfo\" fw style=\"background: mistyrose\" /> Info\n</div>\n<div>\n  <fa :icon=\"faBook\" fw style=\"background: mistyrose\" /> Library\n</div>\n<div>\n  <fa :icon=\"faPencilAlt\" fw style=\"background: mistyrose\" /> Applications\n</div>\n<div>\n  <fa :icon=\"faCog\" fw style=\"background: mistyrose\" /> Settins\n</div>", "<fa :icon=\"faQuoteLeft\" pull=\"left\" size=\"2x\" />\n<fa :icon=\"faQuoteRight\" pull=\"right\" size=\"2x\" />\nGatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that\u2019s no matter \u2014 tomorrow we will run faster, stretch our arms further... And one fine morning \u2014 So we beat on, boats against the current, borne back ceaselessly into the past."],
          powerTransforms: ["<fa :icon=\"faMagic\" size=\"4x\" :rotate=\"90\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" :rotate=\"180\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" rotate=\"270\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" rotate=\"30\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" rotate=\"-30\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"vertical\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"horizontal\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>"]
        }
      };
    }
  };

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = "";
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  })();
  var App = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', {
        staticClass: "container my-4"
      }, [_c('showcase'), _vm._v(" "), _c('docs')], 1);
    },
    staticRenderFns: [],
    components: {
      Showcase: Showcase,
      Docs: Docs
    }
  };

  new Vue({
    el: '#app',
    components: {
      App: App
    },
    render: function render(h) {
      return h('app');
    }
  });

}(Vue, VueFa));