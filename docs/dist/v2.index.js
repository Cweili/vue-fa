(function (vue, Fa) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Fa__default = /*#__PURE__*/_interopDefaultLegacy(Fa);

  var faInfo={prefix:'fas',iconName:'info',icon:[192,512,[],"f129","M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"]};var faPencil={prefix:'fas',iconName:'pencil',icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]};var faPencilAlt=faPencil;var faFlag={prefix:'fas',iconName:'flag',icon:[448,512,[127988,61725],"f024","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"]};var faQuoteRight={prefix:'fas',iconName:'quote-right',icon:[448,512,[8221,"quote-right-alt"],"f10e","M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]};var faGear={prefix:'fas',iconName:'gear',icon:[512,512,[9881,"cog"],"f013","M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]};var faCog=faGear;var faHouse={prefix:'fas',iconName:'house',icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]};var faHome=faHouse;var faLink={prefix:'fas',iconName:'link',icon:[640,512,[128279,"chain"],"f0c1","M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"]};var faQuoteLeft={prefix:'fas',iconName:'quote-left',icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]};var faWandMagic={prefix:'fas',iconName:'wand-magic',icon:[512,512,["magic"],"f0d0","M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z"]};var faMagic=faWandMagic;var faBook={prefix:'fas',iconName:'book',icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};

  var script$5 = vue.defineComponent({
    components: {
      Fa: Fa__default["default"]
    },
    setup: function setup() {
      var model = vue.reactive({
        size: 5,
        pull: undefined,
        flip: undefined,
        rotate: 0
      });
      var pull = ['None', 'Left', 'Right'];
      var flip = ['None', 'Horizontal', 'Vertical', 'Both'];
      var icons = [faFlag, faHome, faCog, faMagic];
      var setValue = function setValue(prop, value) {
        model[prop] = value === 'None' ? undefined : value.toLowerCase();
      };
      var checked = function checked(prop, value) {
        return model[prop] === (value === 'None' ? undefined : value.toLowerCase()) ? 'primary' : 'secondary';
      };
      return {
        model: model,
        pull: pull,
        flip: flip,
        icons: icons,
        setValue: setValue,
        checked: checked
      };
    }
  });

  var _withScopeId$1 = function _withScopeId(n) {
    return vue.pushScopeId("data-v-535d0c7c"), n = n(), vue.popScopeId(), n;
  };
  var _hoisted_1$5 = {
    class: "jumbotron"
  };
  var _hoisted_2$3 = {
    class: "row"
  };
  var _hoisted_3$1 = {
    class: "col-md"
  };
  var _hoisted_4$1 = /*#__PURE__*/vue.createStaticVNode("<h1 class=\"hue\" data-v-535d0c7c><strong data-v-535d0c7c><a href=\"https://github.com/Cweili/vue-fa\" target=\"_blank\" data-v-535d0c7c>vue-fa</a></strong></h1><p class=\"lead mb-5\" data-v-535d0c7c> Tiny <a class=\"hue\" href=\"https://fontawesome.com/\" target=\"_blank\" data-v-535d0c7c>FontAwesome</a> component for <a class=\"hue\" href=\"https://vuejs.org/\" target=\"_blank\" data-v-535d0c7c>Vue.js</a>. </p>", 2);
  var _hoisted_6$1 = {
    class: "form-group row"
  };
  var _hoisted_7$1 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("label", {
      class: "col-sm-3 col-form-label"
    }, "Icon Sizes", -1 /* HOISTED */);
  });
  var _hoisted_8 = {
    class: "col-sm-9 row"
  };
  var _hoisted_9 = {
    class: "col-md-8 py-2"
  };
  var _hoisted_10 = {
    class: "col-md-4"
  };
  var _hoisted_11 = {
    class: "form-control text-center"
  };
  var _hoisted_12 = {
    class: "form-group row"
  };
  var _hoisted_13 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("label", {
      class: "col-sm-3 col-form-label"
    }, "Pulled Icons", -1 /* HOISTED */);
  });
  var _hoisted_14 = {
    class: "col-sm-9"
  };
  var _hoisted_15 = {
    class: "btn-group",
    role: "group",
    "aria-label": "Basic example"
  };
  var _hoisted_16 = ["onClick"];
  var _hoisted_17 = {
    class: "form-group row"
  };
  var _hoisted_18 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("label", {
      class: "col-sm-3 col-form-label"
    }, "Flip", -1 /* HOISTED */);
  });
  var _hoisted_19 = {
    class: "col-sm-9"
  };
  var _hoisted_20 = {
    class: "btn-group",
    role: "group",
    "aria-label": "Basic example"
  };
  var _hoisted_21 = ["onClick"];
  var _hoisted_22 = {
    class: "form-group row"
  };
  var _hoisted_23 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("label", {
      class: "col-sm-3 col-form-label"
    }, "Rotate", -1 /* HOISTED */);
  });
  var _hoisted_24 = {
    class: "col-sm-9 row"
  };
  var _hoisted_25 = {
    class: "col-md-8 py-2"
  };
  var _hoisted_26 = {
    class: "col-md-4"
  };
  var _hoisted_27 = {
    class: "form-control text-center"
  };
  var _hoisted_28 = {
    class: "col-md row"
  };
  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [vue.createElementVNode("div", _hoisted_2$3, [vue.createElementVNode("div", _hoisted_3$1, [_hoisted_4$1, vue.createElementVNode("form", {
      onSubmit: _cache[2] || (_cache[2] = vue.withModifiers(function () {}, ["prevent"]))
    }, [vue.createElementVNode("div", _hoisted_6$1, [_hoisted_7$1, vue.createElementVNode("div", _hoisted_8, [vue.createElementVNode("div", _hoisted_9, [vue.withDirectives(vue.createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return _ctx.model.size = $event;
      }),
      type: "range",
      class: "form-control-range",
      min: "1",
      max: "10",
      step: "0.1"
    }, null, 512 /* NEED_PATCH */), [[vue.vModelText, _ctx.model.size]])]), vue.createElementVNode("div", _hoisted_10, [vue.createElementVNode("div", _hoisted_11, vue.toDisplayString(_ctx.model.size) + "x ", 1 /* TEXT */)])])]), vue.createElementVNode("div", _hoisted_12, [_hoisted_13, vue.createElementVNode("div", _hoisted_14, [vue.createElementVNode("div", _hoisted_15, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pull, function (p) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: p,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('pull', p)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('pull', p);
        }
      }, vue.toDisplayString(p), 11 /* TEXT, CLASS, PROPS */, _hoisted_16);
    }), 128 /* KEYED_FRAGMENT */))])])]), vue.createElementVNode("div", _hoisted_17, [_hoisted_18, vue.createElementVNode("div", _hoisted_19, [vue.createElementVNode("div", _hoisted_20, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.flip, function (f) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: f,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('flip', f)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('flip', f);
        }
      }, vue.toDisplayString(f), 11 /* TEXT, CLASS, PROPS */, _hoisted_21);
    }), 128 /* KEYED_FRAGMENT */))])])]), vue.createElementVNode("div", _hoisted_22, [_hoisted_23, vue.createElementVNode("div", _hoisted_24, [vue.createElementVNode("div", _hoisted_25, [vue.withDirectives(vue.createElementVNode("input", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return _ctx.model.rotate = $event;
      }),
      type: "range",
      class: "form-control-range",
      min: "-360",
      max: "360",
      step: "1"
    }, null, 512 /* NEED_PATCH */), [[vue.vModelText, _ctx.model.rotate]])]), vue.createElementVNode("div", _hoisted_26, [vue.createElementVNode("div", _hoisted_27, vue.toDisplayString(_ctx.model.rotate) + "deg ", 1 /* TEXT */)])])])], 32 /* HYDRATE_EVENTS */)]), vue.createElementVNode("div", _hoisted_28, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.icons, function (icon, i) {
      return vue.openBlock(), vue.createElementBlock("div", {
        key: i,
        class: "col text-center hue"
      }, [vue.createVNode(_component_Fa, {
        icon: icon,
        flip: _ctx.model.flip,
        pull: _ctx.model.pull,
        rotate: _ctx.model.rotate,
        size: _ctx.model.size + "x"
      }, null, 8 /* PROPS */, ["icon", "flip", "pull", "rotate", "size"])]);
    }), 128 /* KEYED_FRAGMENT */))])])]);
  }

  script$5.render = render$5;
  script$5.__scopeId = "data-v-535d0c7c";
  script$5.__file = "v2/showcase.vue";

  var script$4 = vue.defineComponent({
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
    setup: function setup(props) {
      var el = vue.ref();
      var highlight = function highlight() {
        if (el.value) {
          window.Prism.highlightElement(el.value);
        }
      };
      vue.watch(function () {
        return props.code;
      }, highlight);
      vue.onMounted(highlight);
      return {
        el: el
      };
    }
  });

  var _hoisted_1$4 = {
    class: "shadow-sm mb-3 rounded"
  };
  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [vue.createElementVNode("pre", null, [vue.createElementVNode("code", {
      ref: "el",
      class: vue.normalizeClass("language-" + _ctx.lang)
    }, vue.toDisplayString(_ctx.code), 3 /* TEXT, CLASS */)])]);
  }

  script$4.render = render$4;
  script$4.__file = "docs-code.vue";

  var script$3 = {
    inheritAttrs: false
  };

  var _withScopeId = function _withScopeId(n) {
    return vue.pushScopeId("data-v-218e963f"), n = n(), vue.popScopeId(), n;
  };
  var _hoisted_1$3 = {
    class: "position-relative shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_2$2 = /*#__PURE__*/_withScopeId(function () {
    return /*#__PURE__*/vue.createElementVNode("small", null, "images © fontawesome.com", -1 /* HOISTED */);
  });

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [vue.createElementVNode("img", vue.normalizeProps(vue.guardReactiveProps(_ctx.$attrs)), null, 16 /* FULL_PROPS */), _hoisted_2$2]);
  }

  script$3.render = render$3;
  script$3.__scopeId = "data-v-218e963f";
  script$3.__file = "docs-img.vue";

  var script$2 = vue.defineComponent({
    components: {
      Fa: Fa__default["default"]
    },
    props: {
      level: {
        default: 2
      },
      title: {
        default: ''
      }
    },
    setup: function setup(props) {
      return {
        faLink: faLink,
        id: vue.computed(function () {
          return props.title.toLowerCase().replace(/[^\w]/g, '-');
        })
      };
    }
  });

  var _hoisted_1$2 = ["id"];
  var _hoisted_2$1 = ["href"];
  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");
    return vue.openBlock(), vue.createElementBlock("h4", {
      id: _ctx.id,
      class: vue.normalizeClass("h" + _ctx.level)
    }, [vue.createElementVNode("a", {
      href: "#" + _ctx.id
    }, vue.toDisplayString(_ctx.title), 9 /* TEXT, PROPS */, _hoisted_2$1), vue.createTextVNode(), vue.createElementVNode("small", null, [vue.createVNode(_component_Fa, {
      icon: _ctx.faLink
    }, null, 8 /* PROPS */, ["icon"])])], 10 /* CLASS, PROPS */, _hoisted_1$2);
  }

  script$2.render = render$2;
  script$2.__scopeId = "data-v-5fc7f558";
  script$2.__file = "docs-title.vue";

  var script$1 = {
    components: {
      Fa: Fa__default["default"],
      DocsCode: script$4,
      DocsImg: script$3,
      DocsTitle: script$2
    },
    setup: function setup() {
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
          installation: ['npm install vue-fa', "import Fa from 'vue-fa'\nimport { faFlag } from '@fortawesome/free-solid-svg-icons'\n\n" + 'export ' + "default {\n  components: {\n    Fa\n  },\n\n  data() {\n    return {\n      faFlag\n    }\n  }\n}"],
          basicUse: ['<Fa :icon="faFlag" /> Flag', "<div style=\"font-size: 3em; color: tomato\">\n  <Fa :icon=\"faFlag\" />\n</div>"],
          additionalStyling: ["<Fa :icon=\"faFlag\" size=\"xs\" />\n<Fa :icon=\"faFlag\" size=\"sm\" />\n<Fa :icon=\"faFlag\" size=\"lg\" />\n<Fa :icon=\"faFlag\" size=\"2x\" />\n<Fa :icon=\"faFlag\" size=\"2.5x\" />\n<Fa :icon=\"faFlag\" size=\"5x\" />\n<Fa :icon=\"faFlag\" size=\"7x\" />\n<Fa :icon=\"faFlag\" size=\"10x\" />", "<div>\n  <Fa :icon=\"faHome\" fw style=\"background: mistyrose\" /> Home\n</div>\n<div>\n  <Fa :icon=\"faInfo\" fw style=\"background: mistyrose\" /> Info\n</div>\n<div>\n  <Fa :icon=\"faBook\" fw style=\"background: mistyrose\" /> Library\n</div>\n<div>\n  <Fa :icon=\"faPencilAlt\" fw style=\"background: mistyrose\" /> Applications\n</div>\n<div>\n  <Fa :icon=\"faCog\" fw style=\"background: mistyrose\" /> Settins\n</div>", "<Fa :icon=\"faQuoteLeft\" pull=\"left\" size=\"2x\" />\n<Fa :icon=\"faQuoteRight\" pull=\"right\" size=\"2x\" />\nGatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that\u2019s no matter \u2014 tomorrow we will run faster, stretch our arms further... And one fine morning \u2014 So we beat on, boats against the current, borne back ceaselessly into the past."],
          powerTransforms: ["<Fa :icon=\"faMagic\" size=\"4x\" :rotate=\"90\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" :rotate=\"180\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" rotate=\"270\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" rotate=\"30\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" rotate=\"-30\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" flip=\"vertical\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" flip=\"horizontal\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>"],
          duotoneIcons: ["import {\n  faCamera,\n  faFireAlt,\n  faBusAlt,\n  faFillDrip,\n} from '@fortawesome/pro-duotone-svg-icons'", "<Fa :icon=\"faCamera\" size=\"3x\" />\n<Fa :icon=\"faFireAlt\" size=\"3x\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" />", "<Fa :icon=\"faCamera\" size=\"3x\" />\n<Fa :icon=\"faCamera\" size=\"3x\" swap-opacity />\n<Fa :icon=\"faFireAlt\" size=\"3x\" />\n<Fa :icon=\"faFireAlt\" size=\"3x\" swap-opacity />\n<Fa :icon=\"faBusAlt\" size=\"3x\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" swap-opacity />\n<Fa :icon=\"faFillDrip\" size=\"3x\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" swap-opacity />", "<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".2\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".4\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".6\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".8\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\"1\" />", "<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".2\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".4\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".6\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".8\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\"1\" />", "<Fa :icon=\"faBusAlt\" size=\"3x\" primary-color=\"gold\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" primary-color=\"orangered\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" secondary-color=\"limegreen\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" secondary-color=\"rebeccapurple\" />\n<Fa :icon=\"faBatteryFull\" size=\"3x\" primary-color=\"limegreen\" secondary-color=\"dimgray\" />\n<Fa :icon=\"faBatteryQuarter\" size=\"3x\" primary-color=\"orange\" secondary-color=\"dimgray\" />", "<Fa :icon=\"faBook\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"lightseagreen\" secondary-color=\"linen\" />\n<Fa :icon=\"faBookSpells\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"mediumpurple\" secondary-color=\"linen\" />\n<Fa :icon=\"faBookMedical\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"crimson\" secondary-color=\"linen\" />\n<Fa :icon=\"faBookUser\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"peru\" secondary-color=\"linen\" />\n<Fa :icon=\"faToggleOff\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"gray\" />\n<Fa :icon=\"faToggleOn\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"dodgerblue\" secondary-color=\"white\" />\n<Fa :icon=\"faFilePlus\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"limegreen\" />\n<Fa :icon=\"faFileExclamation\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"gold\" />\n<Fa :icon=\"faFileTimes\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"tomato\" />", "<Fa :icon=\"faCrow\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"dodgerblue\" secondary-color=\"gold\" />\n<Fa :icon=\"faCampfire\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"sienna\" secondary-color=\"red\" />\n<Fa :icon=\"faBirthdayCake\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"pink\" secondary-color=\"palevioletred\" />\n<Fa :icon=\"faEar\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"sandybrown\" secondary-color=\"bisque\" />\n<Fa :icon=\"faCorn\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"mediumseagreen\" secondary-color=\"gold\" />\n<Fa :icon=\"faCookieBite\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"saddlebrown\" secondary-color=\"burlywood\" />", "const themeRavenclaw = {\n  secondaryOpacity: 1,\n  primary-color: '#0438a1',\n  secondary-color: '#6c6c6c',\n}", "<Fa :icon=\"faHatWizard\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faFlaskPotion\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faWandMagic\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faScarf\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faBookSpells\" size=\"3x\" v-bind=\"themeRavenclaw\" />"]
        }
      };
    }
  };

  var _hoisted_1$1 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_2 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_3 = {
    style: {
      "font-size": "3em",
      "color": "tomato"
    }
  };
  var _hoisted_4 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_5 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_6 = {
    class: "shadow-sm p-3 mb-3 rounded clearfix"
  };
  var _hoisted_7 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_DocsTitle = vue.resolveComponent("DocsTitle");
    var _component_DocsCode = vue.resolveComponent("DocsCode");
    var _component_Fa = vue.resolveComponent("Fa");
    var _component_DocsImg = vue.resolveComponent("DocsImg");
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.createVNode(_component_DocsTitle, {
      title: "Installation"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.installation[0]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.installation[1],
      lang: "js"
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Basic Use"
    }), vue.createElementVNode("div", _hoisted_1$1, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Flag ")]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.basicUse[0]
    }, null, 8 /* PROPS */, ["code"]), vue.createElementVNode("div", _hoisted_2, [vue.createElementVNode("div", _hoisted_3, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag
    }, null, 8 /* PROPS */, ["icon"])])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.basicUse[1]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Additional Styling"
    }), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Icon Sizes"
    }), vue.createElementVNode("div", _hoisted_4, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "xs"
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "sm"
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "lg"
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "2x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "2.5x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "5x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "7x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "10x"
    }, null, 8 /* PROPS */, ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[0]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Fixed Width Icons"
    }), vue.createElementVNode("div", _hoisted_5, [vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faHome,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Home ")]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faInfo,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Info ")]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faBook,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Library ")]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faPencilAlt,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Applications ")]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faCog,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Settins ")])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[1]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Pulled Icons"
    }), vue.createElementVNode("div", _hoisted_6, [vue.createVNode(_component_Fa, {
      icon: $setup.faQuoteLeft,
      pull: "left",
      size: "2x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faQuoteRight,
      pull: "right",
      size: "2x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past. ")]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[2]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Power Transforms"
    }), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Rotating & Flipping"
    }), vue.createElementVNode("div", _hoisted_7, [vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      rotate: 90,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      rotate: 180,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      rotate: "270",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      rotate: "30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      rotate: "-30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      flip: "vertical",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      flip: "horizontal",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      flip: "both",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      flip: "both",
      rotate: "30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.powerTransforms[0]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Duotone Icons"
    }), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Basic Use"
    }), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-0.png",
      alt: "duotone icons basic use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[0],
      lang: "js"
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[1]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Swapping Layer Opacity"
    }), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-1.png",
      alt: "swapping duotone icons layer opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[2]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Changing Opacity"
    }), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-2.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[3]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-3.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[4]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Coloring Duotone Icons"
    }), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-4.png",
      alt: "coloring duotone icons"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[5]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Advanced Use"
    }), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-5.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[6]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-6.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[7]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-7.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[8],
      lang: "js"
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[9]
    }, null, 8 /* PROPS */, ["code"])]);
  }

  script$1.render = render$1;
  script$1.__file = "v2/docs.vue";

  var script = vue.defineComponent({
    components: {
      Showcase: script$5,
      Docs: script$1
    }
  });

  var _hoisted_1 = {
    class: "container my-4"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_showcase = vue.resolveComponent("showcase");
    var _component_docs = vue.resolveComponent("docs");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createVNode(_component_showcase), vue.createVNode(_component_docs)]);
  }

  script.render = render;
  script.__file = "v2/app.vue";

  vue.createApp(script).mount('#app');

})(Vue, VueFa);
