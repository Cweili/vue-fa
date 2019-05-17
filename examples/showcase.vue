<template>
  <div class="jumbotron">
    <div class="row">
      <div class="col-md">
        <h1>vue-fa</h1>
        <p class="lead">
          Tiny <a href="https://fontawesome.com/" target="_blank">FontAwesome 5</a> component for <a href="https://vuejs.org/" target="_blank">Vue.js</a>.
        </p>
        <form @submit.prevent>
          <div class="form-group row">
            <label class="col-sm-1 col-form-label" for="size">Size</label>
            <div class="col-sm-11 row">
              <div class="col-md-9 pt-2 pb-2">
                <input
                  v-model="model.size"
                  type="range"
                  class="form-control-range"
                  id="size"
                  min="1"
                  max="10"
                  step="0.5">
              </div>
              <div class="col-md-3">
                <div class="form-control">{{ model.size }}x</div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md row">
        <div
          v-for="(icon, name) in icons"
          :key="name"
          class="col text-center">
          <fa
            :icon="icon"
            :fw="model.fw"
            :flip="model.flip"
            :pull="model.pull"
            :rotate="model.rotate"
            :size="`${model.size}x`"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fa from 'vue-fa'
import {
  faFlag,
  faHome,
  faCog,
  faMagic
} from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    Fa
  },

  data() {
    return {
      model: {
        size: 5,
        fw: false,
        flip: '',
        pull: '',
        rotate: ''
      },
      icons: {
        faFlag,
        faHome,
        faCog,
        faMagic
      }
    }
  }
}
</script>
