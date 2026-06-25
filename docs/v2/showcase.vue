<template>
  <section class="hero">
    <div class="grid">
      <div>
        <h1 class="hue hero-title">
          <a
            href="https://github.com/Cweili/vue-fa"
            target="_blank"
          >vue-fa</a>
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
        <p>
          Tiny <a
            class="hue"
            href="https://fontawesome.com/"
            target="_blank"
          >FontAwesome</a> component for <a
            class="hue"
            href="https://vuejs.org/"
            target="_blank"
          >Vue.js</a>.
        </p>
        <form @submit.prevent>
          <fieldset class="grid">
            <label>
              Icon Sizes
              <input
                v-model="model.size"
                type="range"
                min="1"
                max="10"
                step="0.1"
              >
            </label>
            <output>{{ model.size }}x</output>
          </fieldset>
          <fieldset class="grid">
            <label>Pulled Icons</label>
            <div role="group">
              <button
                v-for="p in pull"
                :key="p"
                :class="checked('pull', p) ? '' : 'secondary'"
                :aria-current="checked('pull', p) ? 'true' : undefined"
                type="button"
                @click="setValue('pull', p)"
              >
                {{ p }}
              </button>
            </div>
          </fieldset>
          <fieldset class="grid">
            <label>Flip</label>
            <div role="group">
              <button
                v-for="f in flip"
                :key="f"
                :class="checked('flip', f) ? '' : 'secondary'"
                :aria-current="checked('flip', f) ? 'true' : undefined"
                type="button"
                @click="setValue('flip', f)"
              >
                {{ f }}
              </button>
            </div>
          </fieldset>
          <fieldset class="grid">
            <label>
              Rotate
              <input
                v-model="model.rotate"
                type="range"
                min="-360"
                max="360"
                step="1"
              >
            </label>
            <output>{{ model.rotate }}deg</output>
          </fieldset>
        </form>
      </div>
      <div class="grid">
        <div
          v-for="(icon, i) in icons"
          :key="i"
          class="hue"
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
  </section>
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
  faMagic,
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
      faMagic,
    ];

    const setValue = (prop, value) => {
      model[prop] = value === 'None' ? undefined : value.toLowerCase();
    };
    const checked = (prop, value) => model[prop] === (value === 'None' ? undefined : value.toLowerCase());

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
.hero {
  background: var(--pico-card-background-color);
  border: 1px solid var(--pico-card-border-color);
  border-radius: var(--pico-border-radius);
  padding: var(--pico-block-spacing-vertical) var(--pico-block-spacing-horizontal);
  margin-bottom: var(--pico-block-spacing-vertical);
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 0;
}

.hero fieldset.grid:has([role="group"]) {
  grid-template-columns: 1fr;
}

.hero fieldset.grid:has([role="group"]) label {
  margin-bottom: 0;
}

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
