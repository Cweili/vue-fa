(function (vue, Fa) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Fa__default = /*#__PURE__*/_interopDefaultLegacy(Fa);

  var faBook={prefix:'fas',iconName:'book',icon:[448,512,[],"f02d","M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"]};var faCircleNotch={prefix:'fas',iconName:'circle-notch',icon:[512,512,[],"f1ce","M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"]};var faCog={prefix:'fas',iconName:'cog',icon:[512,512,[],"f013","M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"]};var faFlag={prefix:'fas',iconName:'flag',icon:[512,512,[],"f024","M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"]};var faHome={prefix:'fas',iconName:'home',icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]};var faInfo={prefix:'fas',iconName:'info',icon:[192,512,[],"f129","M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"]};var faLink={prefix:'fas',iconName:'link',icon:[512,512,[],"f0c1","M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"]};var faMagic={prefix:'fas',iconName:'magic',icon:[512,512,[],"f0d0","M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"]};var faPencilAlt={prefix:'fas',iconName:'pencil-alt',icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]};var faQuoteLeft={prefix:'fas',iconName:'quote-left',icon:[512,512,[],"f10d","M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"]};var faQuoteRight={prefix:'fas',iconName:'quote-right',icon:[512,512,[],"f10e","M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"]};var faSpinner={prefix:'fas',iconName:'spinner',icon:[512,512,[],"f110","M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]};var faStroopwafel={prefix:'fas',iconName:'stroopwafel',icon:[512,512,[],"f551","M188.12 210.74L142.86 256l45.25 45.25L233.37 256l-45.25-45.26zm113.13-22.62L256 142.86l-45.25 45.25L256 233.37l45.25-45.25zm-90.5 135.76L256 369.14l45.26-45.26L256 278.63l-45.25 45.25zM256 0C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm186.68 295.6l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0l-28.29-28.29-45.25 45.25 33.94 33.94 16.97-16.97c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31l-16.97 16.97 16.97 16.97c3.12 3.12 3.12 8.19 0 11.31l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0l-16.97-16.97-16.97 16.97c-3.12 3.12-8.19 3.12-11.31 0l-11.31-11.31c-3.12-3.12-3.12-8.19 0-11.31l16.97-16.97-33.94-33.94-45.26 45.26 28.29 28.29c3.12 3.12 3.12 8.19 0 11.31l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0L256 414.39l-28.29 28.29c-3.12 3.12-8.19 3.12-11.31 0l-11.31-11.31c-3.12-3.12-3.12-8.19 0-11.31l28.29-28.29-45.25-45.26-33.94 33.94 16.97 16.97c3.12 3.12 3.12 8.19 0 11.31l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0l-16.97-16.97-16.97 16.97c-3.12 3.12-8.19 3.12-11.31 0l-11.31-11.31c-3.12-3.12-3.12-8.19 0-11.31l16.97-16.97-16.97-16.97c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0l16.97 16.97 33.94-33.94-45.25-45.25-28.29 28.29c-3.12 3.12-8.19 3.12-11.31 0L69.32 295.6c-3.12-3.12-3.12-8.19 0-11.31L97.61 256l-28.29-28.29c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0l28.29 28.29 45.25-45.26-33.94-33.94-16.97 16.97c-3.12 3.12-8.19 3.12-11.31 0l-11.31-11.31c-3.12-3.12-3.12-8.19 0-11.31l16.97-16.97-16.97-16.97c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0l16.97 16.97 16.97-16.97c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31l-16.97 16.97 33.94 33.94 45.26-45.25-28.29-28.29c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0L256 97.61l28.29-28.29c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31l-28.29 28.29 45.26 45.25 33.94-33.94-16.97-16.97c-3.12-3.12-3.12-8.19 0-11.31l11.31-11.31c3.12-3.12 8.19-3.12 11.31 0l16.97 16.97 16.97-16.97c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31l-16.97 16.97 16.97 16.97c3.12 3.12 3.12 8.19 0 11.31l-11.31 11.31c-3.12 3.12-8.19 3.12-11.31 0l-16.97-16.97-33.94 33.94 45.25 45.26 28.29-28.29c3.12-3.12 8.19-3.12 11.31 0l11.31 11.31c3.12 3.12 3.12 8.19 0 11.31L414.39 256l28.29 28.28a8.015 8.015 0 0 1 0 11.32zM278.63 256l45.26 45.25L369.14 256l-45.25-45.26L278.63 256z"]};var faSync={prefix:'fas',iconName:'sync',icon:[512,512,[],"f021","M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"]};

  var script = vue.defineComponent({
    components: {
      Fa: Fa__default['default']
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

  vue.pushScopeId("data-v-d8b0228a");

  var _hoisted_1 = {
    class: "jumbotron"
  };
  var _hoisted_2 = {
    class: "row"
  };
  var _hoisted_3 = {
    class: "col-md"
  };

  var _hoisted_4 = /*#__PURE__*/vue.createStaticVNode("<h1 class=\"hue\" data-v-d8b0228a><strong data-v-d8b0228a><a href=\"https://github.com/Cweili/vue-fa\" target=\"_blank\" data-v-d8b0228a>vue-fa</a></strong></h1><p data-v-d8b0228a><a href=\"https://www.npmjs.com/package/vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/npm/v/vue-fa.svg\" alt=\"npm version\" data-v-d8b0228a></a> <a href=\"https://bundlephobia.com/result?p=vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/bundlephobia/minzip/vue-fa.svg\" alt=\"bundle size\" data-v-d8b0228a></a> <a href=\"https://github.com/Cweili/vue-fa/blob/master/LICENSE\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/npm/l/vue-fa.svg\" alt=\"MIT licence\" data-v-d8b0228a></a> <a href=\"https://www.npmjs.com/package/vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/npm/dt/vue-fa.svg\" alt=\"npm downloads\" data-v-d8b0228a></a> <a href=\"https://github.com/Cweili/vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/github/issues/Cweili/vue-fa.svg\" alt=\"github issues\" data-v-d8b0228a></a></p><p class=\"lead mb-5\" data-v-d8b0228a> Tiny <a class=\"hue\" href=\"https://fontawesome.com/\" target=\"_blank\" data-v-d8b0228a>FontAwesome 5</a> component for <a class=\"hue\" href=\"https://vuejs.org/\" target=\"_blank\" data-v-d8b0228a>Vue.js</a>. </p>", 3);

  var _hoisted_7 = {
    class: "form-group row"
  };

  var _hoisted_8 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Icon Sizes", -1
  /* HOISTED */
  );

  var _hoisted_9 = {
    class: "col-sm-9 row"
  };
  var _hoisted_10 = {
    class: "col-md-8 py-2"
  };
  var _hoisted_11 = {
    class: "col-md-4"
  };
  var _hoisted_12 = {
    class: "form-control text-center"
  };
  var _hoisted_13 = {
    class: "form-group row"
  };

  var _hoisted_14 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Pulled Icons", -1
  /* HOISTED */
  );

  var _hoisted_15 = {
    class: "col-sm-9"
  };
  var _hoisted_16 = {
    class: "btn-group",
    role: "group",
    "aria-label": "Basic example"
  };
  var _hoisted_17 = ["onClick"];
  var _hoisted_18 = {
    class: "form-group row"
  };

  var _hoisted_19 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Flip", -1
  /* HOISTED */
  );

  var _hoisted_20 = {
    class: "col-sm-9"
  };
  var _hoisted_21 = {
    class: "btn-group",
    role: "group",
    "aria-label": "Basic example"
  };
  var _hoisted_22 = ["onClick"];
  var _hoisted_23 = {
    class: "form-group row"
  };

  var _hoisted_24 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Rotate", -1
  /* HOISTED */
  );

  var _hoisted_25 = {
    class: "col-sm-9 row"
  };
  var _hoisted_26 = {
    class: "col-md-8 py-2"
  };
  var _hoisted_27 = {
    class: "col-md-4"
  };
  var _hoisted_28 = {
    class: "form-control text-center"
  };
  var _hoisted_29 = {
    class: "col-md row"
  };

  vue.popScopeId();

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");

    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createElementVNode("div", _hoisted_2, [vue.createElementVNode("div", _hoisted_3, [_hoisted_4, vue.createElementVNode("form", {
      onSubmit: _cache[2] || (_cache[2] = vue.withModifiers(function () {}, ["prevent"]))
    }, [vue.createElementVNode("div", _hoisted_7, [_hoisted_8, vue.createElementVNode("div", _hoisted_9, [vue.createElementVNode("div", _hoisted_10, [vue.withDirectives(vue.createElementVNode("input", {
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
    ), [[vue.vModelText, _ctx.model.size]])]), vue.createElementVNode("div", _hoisted_11, [vue.createElementVNode("div", _hoisted_12, vue.toDisplayString(_ctx.model.size) + "x ", 1
    /* TEXT */
    )])])]), vue.createElementVNode("div", _hoisted_13, [_hoisted_14, vue.createElementVNode("div", _hoisted_15, [vue.createElementVNode("div", _hoisted_16, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pull, function (p) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: p,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('pull', p)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('pull', p);
        }
      }, vue.toDisplayString(p), 11
      /* TEXT, CLASS, PROPS */
      , _hoisted_17);
    }), 128
    /* KEYED_FRAGMENT */
    ))])])]), vue.createElementVNode("div", _hoisted_18, [_hoisted_19, vue.createElementVNode("div", _hoisted_20, [vue.createElementVNode("div", _hoisted_21, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.flip, function (f) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: f,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('flip', f)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('flip', f);
        }
      }, vue.toDisplayString(f), 11
      /* TEXT, CLASS, PROPS */
      , _hoisted_22);
    }), 128
    /* KEYED_FRAGMENT */
    ))])])]), vue.createElementVNode("div", _hoisted_23, [_hoisted_24, vue.createElementVNode("div", _hoisted_25, [vue.createElementVNode("div", _hoisted_26, [vue.withDirectives(vue.createElementVNode("input", {
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
    ), [[vue.vModelText, _ctx.model.rotate]])]), vue.createElementVNode("div", _hoisted_27, [vue.createElementVNode("div", _hoisted_28, vue.toDisplayString(_ctx.model.rotate) + "deg ", 1
    /* TEXT */
    )])])])], 32
    /* HYDRATE_EVENTS */
    )]), vue.createElementVNode("div", _hoisted_29, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.icons, function (icon, i) {
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

  script.render = render;
  script.__scopeId = "data-v-d8b0228a";
  script.__file = "showcase.vue";

  var validFlip = ['horizontal', 'vertical', 'both'];
  var validPull = ['right', 'left'];
  var script$1 = vue.defineComponent({
    props: {
      icon: {
        type: Object,
        required: true
      },
      size: {
        type: String,
        validator: function validator(value) {
          return /^(lg|xs|sm|([\d.]+)x)$/.test(value);
        }
      },
      color: String,
      fw: Boolean,
      pull: {
        type: String,
        validator: function validator(value) {
          return validPull.indexOf(value) >= 0;
        }
      },
      flip: {
        type: String,
        validator: function validator(value) {
          return validFlip.indexOf(value) >= 0;
        }
      },
      rotate: {
        type: [Number, String],
        validator: function validator(value) {
          return /^[-\d.]+$/.test("" + value);
        }
      },
      spin: Boolean,
      pulse: Boolean,
      primaryColor: String,
      secondaryColor: String,
      primaryOpacity: {
        type: [Number, String],
        default: 1
      },
      secondaryOpacity: {
        type: [Number, String],
        default: 0.4
      },
      swapOpacity: Boolean
    },
    setup: function setup(props) {
      var i = function i() {
        var _props$icon$icon, _props$icon;

        return (_props$icon$icon = (_props$icon = props.icon) == null ? void 0 : _props$icon.icon) != null ? _props$icon$icon : [0, 0, '', [], ''];
      };

      return {
        i: vue.computed(i),
        style: vue.computed(function () {
          if (!i()[4]) {
            return {};
          }

          var base = {
            height: '1em',
            overflow: 'visible',
            verticalAlign: '-.125em'
          };
          var fw = props.fw,
              pull = props.pull,
              size = props.size;

          if (fw) {
            base.textAlign = 'center';
            base.width = '1.25em';
          }

          if (pull) {
            base.float = pull;
          }

          if (size) {
            if (size === 'lg') {
              base.fontSize = '1.33333em';
              base.lineHeight = '.75em';
              base.verticalAlign = '-.225em';
            } else if (size === 'xs') {
              base.fontSize = '.75em';
            } else if (size === 'sm') {
              base.fontSize = '.875em';
            } else {
              base.fontSize = size.replace('x', 'em');
            }
          }

          return base;
        }),
        transform: vue.computed(function () {
          var flip = props.flip,
              rotate = props.rotate;
          var transform = '';

          if (flip) {
            var flipX = 1;
            var flipY = 1;

            if (flip === 'horizontal') {
              flipX = -1;
            } else if (flip === 'vertical') {
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
        })
      };
    }
  });
  vue.pushScopeId("data-v-7e44f4d4");
  var _hoisted_1$1 = ["viewBox"];
  var _hoisted_2$1 = ["transform", "transform-origin"];
  var _hoisted_3$1 = ["transform"];
  var _hoisted_4$1 = ["d", "fill"];
  var _hoisted_5 = ["d", "fill", "fill-opacity"];
  var _hoisted_6 = ["d", "fill", "fill-opacity"];
  vue.popScopeId();

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("svg", {
      viewBox: "0 0 " + _ctx.i[0] + " " + _ctx.i[1],
      class: vue.normalizeClass({
        spin: _ctx.spin,
        pulse: _ctx.pulse
      }),
      style: vue.normalizeStyle(_ctx.style),
      "aria-hidden": "true",
      role: "img",
      xmlns: "http://www.w3.org/2000/svg"
    }, [_ctx.i[4] ? (vue.openBlock(), vue.createElementBlock("g", {
      key: 0,
      transform: "translate(" + _ctx.i[0] / 2 + " " + _ctx.i[1] / 2 + ")",
      "transform-origin": _ctx.i[0] / 4 + " 0"
    }, [vue.createElementVNode("g", {
      transform: _ctx.transform
    }, [typeof _ctx.i[4] === 'string' ? (vue.openBlock(), vue.createElementBlock("path", {
      key: 0,
      d: _ctx.i[4],
      fill: _ctx.color || _ctx.primaryColor || 'currentColor',
      transform: "translate(-256 -256)"
    }, null, 8
    /* PROPS */
    , _hoisted_4$1)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
      key: 1
    }, [vue.createElementVNode("path", {
      d: _ctx.i[4][0],
      fill: _ctx.secondaryColor || _ctx.color || 'currentColor',
      "fill-opacity": _ctx.swapOpacity !== false ? _ctx.primaryOpacity : _ctx.secondaryOpacity,
      transform: "translate(-256 -256)"
    }, null, 8
    /* PROPS */
    , _hoisted_5), vue.createElementVNode("path", {
      d: _ctx.i[4][1],
      fill: _ctx.primaryColor || _ctx.color || 'currentColor',
      "fill-opacity": _ctx.swapOpacity !== false ? _ctx.secondaryOpacity : _ctx.primaryOpacity,
      transform: "translate(-256 -256)"
    }, null, 8
    /* PROPS */
    , _hoisted_6)], 64
    /* STABLE_FRAGMENT */
    ))], 8
    /* PROPS */
    , _hoisted_3$1)], 8
    /* PROPS */
    , _hoisted_2$1)) : vue.createCommentVNode("v-if", true)], 14
    /* CLASS, STYLE, PROPS */
    , _hoisted_1$1)), [[vue.vShow, _ctx.i[4]]]);
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "@-webkit-keyframes spin-7e44f4d4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin-7e44f4d4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spin[data-v-7e44f4d4]{-webkit-animation:spin-7e44f4d4 2s 0s infinite linear;animation:spin-7e44f4d4 2s 0s infinite linear}.pulse[data-v-7e44f4d4]{-webkit-animation:spin-7e44f4d4 1s infinite steps(8);animation:spin-7e44f4d4 1s infinite steps(8)}";
  styleInject(css_248z);
  script$1.render = render$1;
  script$1.__scopeId = "data-v-7e44f4d4";
  script$1.__file = "src/fa.vue";

  var script$2 = vue.defineComponent({
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

  var _hoisted_1$2 = {
    class: "shadow-sm mb-3 rounded"
  };
  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [vue.createElementVNode("pre", null, [vue.createElementVNode("code", {
      ref: "el",
      class: vue.normalizeClass("language-" + _ctx.lang)
    }, vue.toDisplayString(_ctx.code), 3
    /* TEXT, CLASS */
    )])]);
  }

  script$2.render = render$2;
  script$2.__file = "docs-code.vue";

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

  var script$4 = vue.defineComponent({
    components: {
      Fa: Fa__default['default']
    },
    props: {
      level: {
        default: 4
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

  var _hoisted_1$4 = ["id"];
  var _hoisted_2$3 = ["href"];

  var _hoisted_3$2 = /*#__PURE__*/vue.createTextVNode();

  vue.popScopeId();

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");

    return vue.openBlock(), vue.createElementBlock("h4", {
      id: _ctx.id,
      class: vue.normalizeClass("h" + _ctx.level)
    }, [vue.createElementVNode("a", {
      href: "#" + _ctx.id
    }, vue.toDisplayString(_ctx.title), 9
    /* TEXT, PROPS */
    , _hoisted_2$3), _hoisted_3$2, vue.createElementVNode("small", null, [vue.createVNode(_component_Fa, {
      icon: _ctx.faLink
    }, null, 8
    /* PROPS */
    , ["icon"])])], 10
    /* CLASS, PROPS */
    , _hoisted_1$4);
  }

  script$4.render = render$4;
  script$4.__scopeId = "data-v-5fc7f558";
  script$4.__file = "docs-title.vue";

  var script$5 = {
    components: {
      Fa: script$1,
      DocsCode: script$2,
      DocsImg: script$3,
      DocsTitle: script$4
    },
    setup: function setup() {
      return {
        faFlag: faFlag,
        faHome: faHome,
        faInfo: faInfo,
        faBook: faBook,
        faPencilAlt: faPencilAlt,
        faCog: faCog,
        faCircleNotch: faCircleNotch,
        faQuoteLeft: faQuoteLeft,
        faQuoteRight: faQuoteRight,
        faSpinner: faSpinner,
        faStroopwafel: faStroopwafel,
        faSync: faSync,
        faMagic: faMagic,
        codes: {
          installation: ['npm install vue-fa', "import Fa from 'vue-fa'\nimport { faFlag } from '@fortawesome/free-solid-svg-icons'\n\n" + 'export ' + "default {\n  components: {\n    Fa\n  },\n\n  setup() {\n    return {\n      faFlag\n    }\n  }\n}"],
          basicUse: ['<Fa :icon="faFlag" /> Flag', "<div style=\"font-size: 3em; color: tomato\">\n  <Fa :icon=\"faFlag\" />\n</div>"],
          additionalStyling: ["<Fa :icon=\"faFlag\" size=\"xs\" />\n<Fa :icon=\"faFlag\" size=\"sm\" />\n<Fa :icon=\"faFlag\" size=\"lg\" />\n<Fa :icon=\"faFlag\" size=\"2x\" />\n<Fa :icon=\"faFlag\" size=\"2.5x\" />\n<Fa :icon=\"faFlag\" size=\"5x\" />\n<Fa :icon=\"faFlag\" size=\"7x\" />\n<Fa :icon=\"faFlag\" size=\"10x\" />", "<div>\n  <Fa :icon=\"faHome\" fw style=\"background: mistyrose\" /> Home\n</div>\n<div>\n  <Fa :icon=\"faInfo\" fw style=\"background: mistyrose\" /> Info\n</div>\n<div>\n  <Fa :icon=\"faBook\" fw style=\"background: mistyrose\" /> Library\n</div>\n<div>\n  <Fa :icon=\"faPencilAlt\" fw style=\"background: mistyrose\" /> Applications\n</div>\n<div>\n  <Fa :icon=\"faCog\" fw style=\"background: mistyrose\" /> Settins\n</div>", "<Fa :icon=\"faQuoteLeft\" pull=\"left\" size=\"2x\" />\n<Fa :icon=\"faQuoteRight\" pull=\"right\" size=\"2x\" />\nGatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that\u2019s no matter \u2014 tomorrow we will run faster, stretch our arms further... And one fine morning \u2014 So we beat on, boats against the current, borne back ceaselessly into the past."],
          animatingIcons: ["<Fa :icon=\"faSpinner\" size=\"3x\" spin />\n<Fa :icon=\"faCircleNotch\" size=\"3x\" spin />\n<Fa :icon=\"faSync\" size=\"3x\" spin />\n<Fa :icon=\"faCog\" size=\"3x\" spin />\n<Fa :icon=\"faSpinner\" size=\"3x\" pulse />\n<Fa :icon=\"faStroopwafel\" size=\"3x\" spin />"],
          powerTransforms: ["<Fa :icon=\"faMagic\" size=\"4x\" :rotate=\"90\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" :rotate=\"180\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" rotate=\"270\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" rotate=\"30\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" rotate=\"-30\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" flip=\"vertical\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" flip=\"horizontal\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>"],
          duotoneIcons: ["import {\n  faCamera,\n  faFireAlt,\n  faBusAlt,\n  faFillDrip,\n} from '@fortawesome/pro-duotone-svg-icons'", "<Fa :icon=\"faCamera\" size=\"3x\" />\n<Fa :icon=\"faFireAlt\" size=\"3x\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" />", "<Fa :icon=\"faCamera\" size=\"3x\" />\n<Fa :icon=\"faCamera\" size=\"3x\" swap-opacity />\n<Fa :icon=\"faFireAlt\" size=\"3x\" />\n<Fa :icon=\"faFireAlt\" size=\"3x\" swap-opacity />\n<Fa :icon=\"faBusAlt\" size=\"3x\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" swap-opacity />\n<Fa :icon=\"faFillDrip\" size=\"3x\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" swap-opacity />", "<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".2\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".4\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".6\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".8\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\"1\" />", "<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".2\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".4\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".6\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".8\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\"1\" />", "<Fa :icon=\"faBusAlt\" size=\"3x\" primary-color=\"gold\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" primary-color=\"orangered\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" secondary-color=\"limegreen\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" secondary-color=\"rebeccapurple\" />\n<Fa :icon=\"faBatteryFull\" size=\"3x\" primary-color=\"limegreen\" secondary-color=\"dimgray\" />\n<Fa :icon=\"faBatteryQuarter\" size=\"3x\" primary-color=\"orange\" secondary-color=\"dimgray\" />", "<Fa :icon=\"faBook\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"lightseagreen\" secondary-color=\"linen\" />\n<Fa :icon=\"faBookSpells\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"mediumpurple\" secondary-color=\"linen\" />\n<Fa :icon=\"faBookMedical\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"crimson\" secondary-color=\"linen\" />\n<Fa :icon=\"faBookUser\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"peru\" secondary-color=\"linen\" />\n<Fa :icon=\"faToggleOff\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"gray\" />\n<Fa :icon=\"faToggleOn\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"dodgerblue\" secondary-color=\"white\" />\n<Fa :icon=\"faFilePlus\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"limegreen\" />\n<Fa :icon=\"faFileExclamation\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"gold\" />\n<Fa :icon=\"faFileTimes\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"tomato\" />", "<Fa :icon=\"faCrow\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"dodgerblue\" secondary-color=\"gold\" />\n<Fa :icon=\"faCampfire\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"sienna\" secondary-color=\"red\" />\n<Fa :icon=\"faBirthdayCake\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"pink\" secondary-color=\"palevioletred\" />\n<Fa :icon=\"faEar\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"sandybrown\" secondary-color=\"bisque\" />\n<Fa :icon=\"faCorn\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"mediumseagreen\" secondary-color=\"gold\" />\n<Fa :icon=\"faCookieBite\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"saddlebrown\" secondary-color=\"burlywood\" />", "const themeRavenclaw = {\n  secondaryOpacity: 1,\n  primary-color: '#0438a1',\n  secondary-color: '#6c6c6c',\n}", "<Fa :icon=\"faHatWizard\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faFlaskPotion\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faWandMagic\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faScarf\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faBookSpells\" size=\"3x\" v-bind=\"themeRavenclaw\" />"]
        }
      };
    }
  };

  var _hoisted_1$5 = {
    class: "p-2 mb-3"
  };

  var _hoisted_2$4 = /*#__PURE__*/vue.createTextVNode(" for Vue.js v2.x, uses vue-fa@2: ");

  var _hoisted_3$3 = /*#__PURE__*/vue.createElementVNode("span", {
    class: "shadow-sm p-1 rounded"
  }, "npm install vue-fa@2", -1
  /* HOISTED */
  );

  var _hoisted_4$2 = /*#__PURE__*/vue.createTextVNode(" [");

  var _hoisted_5$1 = /*#__PURE__*/vue.createElementVNode("a", {
    href: "https://cweili.github.io/vue-fa/v2/",
    target: "_blank"
  }, "vue-fa v2 documents", -1
  /* HOISTED */
  );

  var _hoisted_6$1 = /*#__PURE__*/vue.createTextVNode("] ");

  var _hoisted_7$1 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_8$1 = /*#__PURE__*/vue.createTextVNode(" Flag ");

  var _hoisted_9$1 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_10$1 = {
    style: {
      "font-size": "3em",
      "color": "tomato"
    }
  };
  var _hoisted_11$1 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_12$1 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_13$1 = /*#__PURE__*/vue.createTextVNode(" Home ");

  var _hoisted_14$1 = /*#__PURE__*/vue.createTextVNode(" Info ");

  var _hoisted_15$1 = /*#__PURE__*/vue.createTextVNode(" Library ");

  var _hoisted_16$1 = /*#__PURE__*/vue.createTextVNode(" Applications ");

  var _hoisted_17$1 = /*#__PURE__*/vue.createTextVNode(" Settins ");

  var _hoisted_18$1 = {
    class: "shadow-sm p-3 mb-3 rounded clearfix"
  };

  var _hoisted_19$1 = /*#__PURE__*/vue.createTextVNode(" Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past. ");

  var _hoisted_20$1 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_21$1 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
    , ["code"]), vue.createElementVNode("div", _hoisted_1$5, [vue.createVNode(_component_Fa, {
      icon: $setup.faInfo,
      fw: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_2$4, _hoisted_3$3, _hoisted_4$2, _hoisted_5$1, _hoisted_6$1]), vue.createVNode(_component_DocsTitle, {
      title: "Basic Use"
    }), vue.createElementVNode("div", _hoisted_7$1, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_8$1]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.basicUse[0]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createElementVNode("div", _hoisted_9$1, [vue.createElementVNode("div", _hoisted_10$1, [vue.createVNode(_component_Fa, {
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
    }), vue.createElementVNode("div", _hoisted_11$1, [vue.createVNode(_component_Fa, {
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
    }), vue.createElementVNode("div", _hoisted_12$1, [vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faHome,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_13$1]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faInfo,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_14$1]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faBook,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_15$1]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faPencilAlt,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_16$1]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faCog,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_17$1])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[1]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Pulled Icons"
    }), vue.createElementVNode("div", _hoisted_18$1, [vue.createVNode(_component_Fa, {
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
    , ["icon"]), _hoisted_19$1]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[2]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Animating Icons"
    }), vue.createElementVNode("div", _hoisted_20$1, [vue.createVNode(_component_Fa, {
      icon: $setup.faSpinner,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faCircleNotch,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faSync,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faCog,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faSpinner,
      size: "3x",
      pulse: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faStroopwafel,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.animatingIcons[0]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Power Transforms"
    }), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Rotating & Flipping"
    }), vue.createElementVNode("div", _hoisted_21$1, [vue.createVNode(_component_Fa, {
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
      src: "assets/duotone-0.png",
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
      src: "assets/duotone-1.png",
      alt: "swapping duotone icons layer opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[2]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Changing Opacity"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-2.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[3]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-3.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[4]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Coloring Duotone Icons"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-4.png",
      alt: "coloring duotone icons"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[5]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 5,
      title: "Advanced Use"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-5.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[6]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-6.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[7]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-7.png",
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

  script$5.render = render$5;
  script$5.__file = "docs.vue";

  var script$6 = vue.defineComponent({
    components: {
      Showcase: script,
      Docs: script$5
    }
  });

  var _hoisted_1$6 = {
    class: "container my-4"
  };
  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_showcase = vue.resolveComponent("showcase");

    var _component_docs = vue.resolveComponent("docs");

    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [vue.createVNode(_component_showcase), vue.createVNode(_component_docs)]);
  }

  script$6.render = render$6;
  script$6.__file = "app.vue";

  vue.createApp(script$6).mount('#app');

}(Vue, VueFa));
