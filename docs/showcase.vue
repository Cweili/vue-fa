<template>
  <div class="jumbotron">
    <div class="row">
      <div class="col-md">
        <h1 class="hue">
          <strong><a
            href="https://github.com/Cweili/vue-fa"
            target="_blank"
          >vue-fa</a></strong>
        </h1>
        <p>
          <a
            href="https://www.npmjs.com/package/vue-fa"
            target="_blank"
          >
            <img
              src="https://img.shields.io/npm/v/vue-fa.svg"
              alt="npm version"
            >
          </a> <a
            href="https://bundlephobia.com/result?p=vue-fa"
            target="_blank"
          >
            <img
              src="https://img.shields.io/bundlephobia/minzip/vue-fa.svg"
              alt="bundle size"
            >
          </a> <a
            href="https://github.com/Cweili/vue-fa/blob/master/LICENSE"
            target="_blank"
          >
            <img
              src="https://img.shields.io/npm/l/vue-fa.svg"
              alt="MIT licence"
            >
          </a> <a
            href="https://www.npmjs.com/package/vue-fa"
            target="_blank"
          >
            <img
              src="https://img.shields.io/npm/dt/vue-fa.svg"
              alt="npm downloads"
            >
          </a> <a
            href="https://github.com/Cweili/vue-fa"
            target="_blank"
          >
            <img
              src="https://img.shields.io/github/issues/Cweili/vue-fa.svg"
              alt="github issues"
            >
          </a>
        </p>
        <p class="lead mb-5">
          Tiny <a
            class="hue"
            href="https://fontawesome.com/"
            target="_blank"
          >FontAwesome 5+</a> component for <a
            class="hue"
            href="https://vuejs.org/"
            target="_blank"
          >Vue.js</a>.
        </p>
        <form @submit.prevent>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label">Icon Sizes</label>
            <div class="col-sm-9 row">
              <div class="col-md-8 py-2">
                <input
                  v-model="model.size"
                  type="range"
                  class="form-control-range"
                  min="1"
                  max="10"
                  step="0.1"
                >
              </div>
              <div class="col-md-4">
                <div class="form-control text-center">
                  {{ model.size }}x
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label">Pulled Icons</label>
            <div class="col-sm-9">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  v-for="p in pull"
                  :key="p"
                  :class="`btn btn-${checked('pull', p)}`"
                  type="button"
                  @click="setValue('pull', p)"
                >
                  {{ p }}
                </button>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label">Flip</label>
            <div class="col-sm-9">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  v-for="f in flip"
                  :key="f"
                  :class="`btn btn-${checked('flip', f)}`"
                  type="button"
                  @click="setValue('flip', f)"
                >
                  {{ f }}
                </button>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-3 col-form-label">Rotate</label>
            <div class="col-sm-9 row">
              <div class="col-md-8 py-2">
                <input
                  v-model="model.rotate"
                  type="range"
                  class="form-control-range"
                  min="-360"
                  max="360"
                  step="1"
                >
              </div>
              <div class="col-md-4">
                <div class="form-control text-center">
                  {{ model.rotate }}deg
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md row">
        <div
          v-for="(icon, i) in icons"
          :key="i"
          class="col text-center hue"
        >
          <Fa
            :icon="icon"
            :flip="model.flip"
            :pull="model.pull"
            :rotate="model.rotate"
            :size="`${model.size}x`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
} from 'vue';
import {
  faFlag,
  faHome,
  faCog,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import Fa from 'vue-fa';

export default defineComponent({
  components: {
    Fa,
  },

  setup() {
    const model = reactive({
      size: 5,
      pull: undefined,
      flip: undefined,
      rotate: 0,
    });
    const pull = ['None', 'Left', 'Right'];
    const flip = ['None', 'Horizontal', 'Vertical', 'Both'];
    const icons = [
      faFlag,
      faHome,
      faCog,
      faSeedling,
    ];

    const setValue = (prop, value) => {
      model[prop] = value === 'None' ? undefined : value.toLowerCase();
    };
    const checked = (prop, value) => (model[prop] === (value === 'None' ? undefined : value.toLowerCase()) ? 'primary' : 'secondary');

    return {
      model,
      pull,
      flip,
      icons,

      setValue,
      checked,
    };
  },
});
</script>

<style scoped>
.hue {
  color: #238ae6;
  animation: hue 30s infinite linear;
}

@keyframes hue {
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}
</style>
