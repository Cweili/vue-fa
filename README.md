# vue-fa

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]


[![github][badge-issues]][github]
[![build][badge-build]][travis]
[![coverage][badge-coverage]][codecov]

Tiny [FontAwesome 5][fontawesome] component for [Vue.js][vuejs].

* FontAwesome svg icons
* Tree-shakable, only import used icons
* No CSS file required
* FontAwesome duotone icons

[Documents and examples][doc].

## Installation

```shell
npm install vue-fa --save
```

## Usage

```html
<template>
  <div>
    <fa :icon="faFlag"/>
  </div>
</template>

<script>
  import Fa from 'vue-fa'
  import { faFlag } from '@fortawesome/free-solid-svg-icons'

  export default {
    components: {
      Fa
    },

    data() {
      return {
        faFlag
      }
    }
  }
</script>
```

## Properties

```html
<fa
  :icon="faFlag"
  fw
  flip="horizontal"
  pull="left"
  :rotate="90"
  size="2x"
  color="#ff0000"/>
```

* `fw`: fixed width
* `flip`: `string` values `horizontal`, `vertical`, `both`
* `pull`: `string` values `left`, `right`
* `rotate`: `number or string` values `90`, `180`, `270`, `30`, `-30` ...
* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x` ...
* `color`: icon color, default `currentColor`

## Duotone Icons

```js
import { faFlag } from '@fortawesome/pro-duotone-svg-icons'
```

```html
<fa
  :icon="faFlag"
  primary-color="red"
  secondary-color="#000000"
  :primary-opacity="0.8"
  :secondary-opacity="0.6"
  swap-opacity/>
```

### Duotone Icons Theme

```html
<script>
import Fa from 'svelte-fa'
import { faFlag } from '@fortawesome/pro-duotone-svg-icons'

const theme = {
  primaryColor: 'red',
  secondaryColor: '#000000',
  primaryOpacity: 0.8,
  secondaryOpacity: 0.6,
}
</script>

<fa
  icon={faFlag}
  v-bind="theme"/>
```

[fontawesome]: https://fontawesome.com/
[vuejs]: https://vuejs.org/

[doc]: https://cweili.github.io/vue-fa/

[badge-version]: https://img.shields.io/npm/v/vue-fa.svg
[badge-downloads]: https://img.shields.io/npm/dt/vue-fa.svg
[npm]: https://www.npmjs.com/package/vue-fa

[badge-size]: https://img.shields.io/bundlephobia/minzip/vue-fa.svg
[bundlephobia]: https://bundlephobia.com/result?p=vue-fa

[badge-license]: https://img.shields.io/npm/l/vue-fa.svg
[license]: https://github.com/Cweili/vue-fa/blob/master/LICENSE

[badge-issues]: https://img.shields.io/github/issues/Cweili/vue-fa.svg
[github]: https://github.com/Cweili/vue-fa

[badge-build]: https://img.shields.io/travis/Cweili/vue-fa/master.svg
[travis]: https://travis-ci.org/Cweili/vue-fa

[badge-coverage]: https://img.shields.io/codecov/c/github/Cweili/vue-fa.svg
[codecov]: https://codecov.io/gh/Cweili/vue-fa
