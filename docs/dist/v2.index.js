(function (vue, Fa) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Fa__default = /*#__PURE__*/_interopDefaultLegacy(Fa);

  var faBook={prefix:'fas',iconName:'book',icon:[448,512,[128212],"f02d","M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"]};var faFlag={prefix:'fas',iconName:'flag',icon:[512,512,[61725,127988],"f024","M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"]};var faGear={prefix:'fas',iconName:'gear',icon:[512,512,[9881,"cog"],"f013","M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]};var faCog=faGear;var faHouse={prefix:'fas',iconName:'house',icon:[576,512,[63498,63500,127968,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"]};var faHome=faHouse;var faInfo={prefix:'fas',iconName:'info',icon:[192,512,[],"f129","M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"]};var faLink={prefix:'fas',iconName:'link',icon:[640,512,[128279,"chain"],"f0c1","M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"]};var faPencil={prefix:'fas',iconName:'pencil',icon:[512,512,[61504,9999,"pencil-alt"],"f303","M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"]};var faPencilAlt=faPencil;var faQuoteLeft={prefix:'fas',iconName:'quote-left',icon:[448,512,[8220,"quote-left-alt"],"f10d","M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"]};var faQuoteRight={prefix:'fas',iconName:'quote-right',icon:[448,512,[8221,"quote-right-alt"],"f10e","M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z"]};var faWandMagic={prefix:'fas',iconName:'wand-magic',icon:[512,512,["magic"],"f0d0","M14.06 463.3C-4.686 444.6-4.686 414.2 14.06 395.4L395.4 14.06C414.2-4.686 444.6-4.686 463.3 14.06L497.9 48.64C516.6 67.38 516.6 97.78 497.9 116.5L116.5 497.9C97.78 516.6 67.38 516.6 48.64 497.9L14.06 463.3zM347.6 187.6L452.6 82.58L429.4 59.31L324.3 164.3L347.6 187.6z"]};var faMagic=faWandMagic;

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

  vue.pushScopeId("data-v-535d0c7c");

  var _hoisted_1$5 = {
    class: "jumbotron"
  };
  var _hoisted_2$3 = {
    class: "row"
  };
  var _hoisted_3$2 = {
    class: "col-md"
  };

  var _hoisted_4$1 = /*#__PURE__*/vue.createStaticVNode("<h1 class=\"hue\" data-v-535d0c7c><strong data-v-535d0c7c><a href=\"https://github.com/Cweili/vue-fa\" target=\"_blank\" data-v-535d0c7c>vue-fa</a></strong></h1><p class=\"lead mb-5\" data-v-535d0c7c> Tiny <a class=\"hue\" href=\"https://fontawesome.com/\" target=\"_blank\" data-v-535d0c7c>FontAwesome 5</a> component for <a class=\"hue\" href=\"https://vuejs.org/\" target=\"_blank\" data-v-535d0c7c>Vue.js</a>. </p>", 2);

  var _hoisted_6$1 = {
    class: "form-group row"
  };

  var _hoisted_7$1 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Icon Sizes", -1
  /* HOISTED */
  );

  var _hoisted_8$1 = {
    class: "col-sm-9 row"
  };
  var _hoisted_9$1 = {
    class: "col-md-8 py-2"
  };
  var _hoisted_10$1 = {
    class: "col-md-4"
  };
  var _hoisted_11$1 = {
    class: "form-control text-center"
  };
  var _hoisted_12$1 = {
    class: "form-group row"
  };

  var _hoisted_13$1 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Pulled Icons", -1
  /* HOISTED */
  );

  var _hoisted_14$1 = {
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

  var _hoisted_18 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Flip", -1
  /* HOISTED */
  );

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

  var _hoisted_23 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Rotate", -1
  /* HOISTED */
  );

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

  vue.popScopeId();

  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");

    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [vue.createElementVNode("div", _hoisted_2$3, [vue.createElementVNode("div", _hoisted_3$2, [_hoisted_4$1, vue.createElementVNode("form", {
      onSubmit: _cache[2] || (_cache[2] = vue.withModifiers(function () {}, ["prevent"]))
    }, [vue.createElementVNode("div", _hoisted_6$1, [_hoisted_7$1, vue.createElementVNode("div", _hoisted_8$1, [vue.createElementVNode("div", _hoisted_9$1, [vue.withDirectives(vue.createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return _ctx.model.size = $event;
      }),
      type: "range",
      class: "form-control-range",
      min: "1",
      max: "10",
      step: "0.1"
    }, null, 512
    /* NEED_PATCH */
    ), [[vue.vModelText, _ctx.model.size]])]), vue.createElementVNode("div", _hoisted_10$1, [vue.createElementVNode("div", _hoisted_11$1, vue.toDisplayString(_ctx.model.size) + "x ", 1
    /* TEXT */
    )])])]), vue.createElementVNode("div", _hoisted_12$1, [_hoisted_13$1, vue.createElementVNode("div", _hoisted_14$1, [vue.createElementVNode("div", _hoisted_15, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pull, function (p) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: p,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('pull', p)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('pull', p);
        }
      }, vue.toDisplayString(p), 11
      /* TEXT, CLASS, PROPS */
      , _hoisted_16);
    }), 128
    /* KEYED_FRAGMENT */
    ))])])]), vue.createElementVNode("div", _hoisted_17, [_hoisted_18, vue.createElementVNode("div", _hoisted_19, [vue.createElementVNode("div", _hoisted_20, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.flip, function (f) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: f,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('flip', f)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('flip', f);
        }
      }, vue.toDisplayString(f), 11
      /* TEXT, CLASS, PROPS */
      , _hoisted_21);
    }), 128
    /* KEYED_FRAGMENT */
    ))])])]), vue.createElementVNode("div", _hoisted_22, [_hoisted_23, vue.createElementVNode("div", _hoisted_24, [vue.createElementVNode("div", _hoisted_25, [vue.withDirectives(vue.createElementVNode("input", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return _ctx.model.rotate = $event;
      }),
      type: "range",
      class: "form-control-range",
      min: "-360",
      max: "360",
      step: "1"
    }, null, 512
    /* NEED_PATCH */
    ), [[vue.vModelText, _ctx.model.rotate]])]), vue.createElementVNode("div", _hoisted_26, [vue.createElementVNode("div", _hoisted_27, vue.toDisplayString(_ctx.model.rotate) + "deg ", 1
    /* TEXT */
    )])])])], 32
    /* HYDRATE_EVENTS */
    )]), vue.createElementVNode("div", _hoisted_28, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.icons, function (icon, i) {
      return vue.openBlock(), vue.createElementBlock("div", {
        key: i,
        class: "col text-center hue"
      }, [vue.createVNode(_component_Fa, {
        icon: icon,
        flip: _ctx.model.flip,
        pull: _ctx.model.pull,
        rotate: _ctx.model.rotate,
        size: _ctx.model.size + "x"
      }, null, 8
      /* PROPS */
      , ["icon", "flip", "pull", "rotate", "size"])]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])])]);
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
    }, vue.toDisplayString(_ctx.code), 3
    /* TEXT, CLASS */
    )])]);
  }

  script$4.render = render$4;
  script$4.__file = "docs-code.vue";

  var script$3 = {
    inheritAttrs: false
  };

  vue.pushScopeId("data-v-218e963f");

  var _hoisted_1$3 = {
    class: "position-relative shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("small", null, "images © fontawesome.com", -1
  /* HOISTED */
  );

  vue.popScopeId();

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [vue.createElementVNode("img", vue.normalizeProps(vue.guardReactiveProps(_ctx.$attrs)), null, 16
    /* FULL_PROPS */
    ), _hoisted_2$2]);
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

  vue.pushScopeId("data-v-5fc7f558");

  var _hoisted_1$2 = ["id"];
  var _hoisted_2$1 = ["href"];

  var _hoisted_3$1 = /*#__PURE__*/vue.createTextVNode();

  vue.popScopeId();

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");

    return vue.openBlock(), vue.createElementBlock("h4", {
      id: _ctx.id,
      class: vue.normalizeClass("h" + _ctx.level)
    }, [vue.createElementVNode("a", {
      href: "#" + _ctx.id
    }, vue.toDisplayString(_ctx.title), 9
    /* TEXT, PROPS */
    , _hoisted_2$1), _hoisted_3$1, vue.createElementVNode("small", null, [vue.createVNode(_component_Fa, {
      icon: _ctx.faLink
    }, null, 8
    /* PROPS */
    , ["icon"])])], 10
    /* CLASS, PROPS */
    , _hoisted_1$2);
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

  var _hoisted_2 = /*#__PURE__*/vue.createTextVNode(" Flag ");

  var _hoisted_3 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_4 = {
    style: {
      "font-size": "3em",
      "color": "tomato"
    }
  };
  var _hoisted_5 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_6 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_7 = /*#__PURE__*/vue.createTextVNode(" Home ");

  var _hoisted_8 = /*#__PURE__*/vue.createTextVNode(" Info ");

  var _hoisted_9 = /*#__PURE__*/vue.createTextVNode(" Library ");

  var _hoisted_10 = /*#__PURE__*/vue.createTextVNode(" Applications ");

  var _hoisted_11 = /*#__PURE__*/vue.createTextVNode(" Settins ");

  var _hoisted_12 = {
    class: "shadow-sm p-3 mb-3 rounded clearfix"
  };

  var _hoisted_13 = /*#__PURE__*/vue.createTextVNode(" Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past. ");

  var _hoisted_14 = {
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
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.installation[1],
      lang: "js"
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Basic Use"
    }), vue.createElementVNode("div", _hoisted_1$1, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_2]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.basicUse[0]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createElementVNode("div", _hoisted_3, [vue.createElementVNode("div", _hoisted_4, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag
    }, null, 8
    /* PROPS */
    , ["icon"])])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.basicUse[1]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Additional Styling"
    }), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Icon Sizes"
    }), vue.createElementVNode("div", _hoisted_5, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "xs"
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "sm"
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "lg"
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "2x"
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "2.5x"
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "5x"
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "7x"
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "10x"
    }, null, 8
    /* PROPS */
    , ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[0]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Fixed Width Icons"
    }), vue.createElementVNode("div", _hoisted_6, [vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faHome,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_7]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faInfo,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_8]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faBook,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_9]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faPencilAlt,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_10]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faCog,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_11])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[1]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Pulled Icons"
    }), vue.createElementVNode("div", _hoisted_12, [vue.createVNode(_component_Fa, {
      icon: $setup.faQuoteLeft,
      pull: "left",
      size: "2x"
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faQuoteRight,
      pull: "right",
      size: "2x"
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_13]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[2]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Power Transforms"
    }), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Rotating & Flipping"
    }), vue.createElementVNode("div", _hoisted_14, [vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      rotate: 90,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      rotate: 180,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      rotate: "270",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      rotate: "30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      rotate: "-30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      flip: "vertical",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      flip: "horizontal",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      flip: "both",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faMagic,
      size: "4x",
      flip: "both",
      rotate: "30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.powerTransforms[0]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
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
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[1]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Swapping Layer Opacity"
    }), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-1.png",
      alt: "swapping duotone icons layer opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[2]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Changing Opacity"
    }), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-2.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[3]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-3.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[4]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Coloring Duotone Icons"
    }), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-4.png",
      alt: "coloring duotone icons"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[5]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Advanced Use"
    }), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-5.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[6]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-6.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[7]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsImg, {
      src: "../assets/duotone-7.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[8],
      lang: "js"
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[9]
    }, null, 8
    /* PROPS */
    , ["code"])]);
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
