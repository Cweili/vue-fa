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

**Notice:** vue-fa 3.x is based on Vue.js 3.x.

```shell
npm install vue-fa@next --save
```

> Old versions:
>
> vue-fa@2 => vue@2 [[Documents][doc-v2]]
>
> `npm install vue-fa@2`

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

    setup() {
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
  size="2x"
  color="#ff0000"
  fw
  pull="left"
  :scale="1.2"
  :translateX="0.2"
  :translateY="0.2"
  flip="horizontal"
  :rotate="90"
  spin
  pulse
/>
```

* `icon`: icon from FontAwesome packages, for example: `@fortawesome/free-solid-svg-icons`
* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x`, ..., `10x`
* `color`: `string` icon color, default `currentColor`
* `fw`: `boolean` fixed width
* `pull`: `string` values `left`, `right`
* `scale`: `number | string` transform scale, unit is `em`, default `1`
* `translateX`: `number | string` transform position X, unit is `em`, default `0`
* `translateY`: `number | string` transform position Y, unit is `em`, default `0`
* `flip`: `string` values `horizontal`, `vertical`, `both`
* `rotate`: `number | string` values `90`, `180`, `270`, `30`, `-30` ...
* `spin`: `boolean` spin icons
* `pulse`: `boolean` pulse spin icons

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
  swap-opacity
/>
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
  v-bind="theme"
/>
```

[fontawesome]: https://fontawesome.com/
[vuejs]: https://vuejs.org/

[doc]: https://cweili.github.io/vue-fa/
[doc-v2]: https://cweili.github.io/vue-fa/v2/

[badge-version]: https://img.shields.io/npm/v/vue-fa.svg
[badge-downloads]: https://img.shields.io/npm/dt/vue-fa.svg
[npm]: https://www.npmjs.com/package/vue-fa

[badge-size]: https://img.shields.io/bundlephobia/minzip/vue-fa.svg
[bundlephobia]: https://bundlephobia.com/result?p=vue-fa

[badge-license]: https://img.shields.io/npm/l/vue-fa.svg
[license]: https://github.com/Cweili/vue-fa/blob/master/LICENSE

[badge-issues]: https://img.shields.io/github/issues/Cweili/vue-fa.svg
[github]: https://github.com/Cweili/vue-fa

[badge-build]: https://img.shields.io/travis/com/Cweili/vue-fa/master.svg
[travis]: https://travis-ci.com/Cweili/vue-fa

[badge-coverage]: https://img.shields.io/codecov/c/github/Cweili/vue-fa.svg
[codecov]: https://codecov.io/gh/Cweili/vue-fa
