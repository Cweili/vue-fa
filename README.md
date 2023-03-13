# vue-fa

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]


[![github][badge-issues]][github]
[![build][badge-build]][workflows]
[![coverage][badge-coverage]][coveralls]

Tiny [FontAwesome][fontawesome] component for [Vue.js][vuejs].

* FontAwesome version 5 and 6
* FontAwesome svg icons
* Tree-shakable, only import used icons
* No CSS file required
* FontAwesome layering
* FontAwesome duotone icons

[Documents and examples][doc].

## Installation

**Notice:** vue-fa >= 3.x is based on Vue.js 3.x.

```shell
npm install vue-fa --save
```

> Old versions:
>
> vue-fa@2 => vue@2 [[Documents][doc-v2]]
>
> `npm install vue-fa@2`

Install FontAwesome icons via [official packages][fontawesome-npm], for example:

```shell
npm install @fortawesome/free-solid-svg-icons
```

## Usage

```html
<template>
  <div>
    <Fa :icon="faFlag"/>
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
<Fa
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
* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x`, ..., `${number}x`
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

## Layering &amp; Text

```js
import Fa, {
  FaLayers,
  FaLayersText,
} from 'vue-fa';
```

```html
<FaLayers
  size="4x"
  pull="left"
>
  <Fa :icon="faCertificate" />
  <FaLayersText
    :scale="0.25"
    :rotate="-30"
    color="white"
    style="font-weight: 900"
  >
    NEW
  </FaLayersText>
</FaLayers>
```

### `FaLayers` Properties

* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x`, ..., `${number}x`
* `pull`: `string` values `left`, `right`

### `FaLayersText` Properties

* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x`, ..., `${number}x`
* `color`: `string` icon color, default `currentColor`
* `scale`: `number | string` transform scale, unit is `em`, default `1`
* `translateX`: `number | string` transform position X, unit is `em`, default `0`
* `translateY`: `number | string` transform position Y, unit is `em`, default `0`
* `flip`: `string` values `horizontal`, `vertical`, `both`
* `rotate`: `number | string` values `90`, `180`, `270`, `30`, `-30` ...

## Duotone Icons

```js
import { faFlag } from '@fortawesome/pro-duotone-svg-icons'
```

```html
<Fa
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
import Fa from 'vue-fa'
import { faFlag } from '@fortawesome/pro-duotone-svg-icons'

const theme = {
  primaryColor: 'red',
  secondaryColor: '#000000',
  primaryOpacity: 0.8,
  secondaryOpacity: 0.6,
}
</script>

<Fa
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

[badge-build]: https://img.shields.io/github/actions/workflow/status/Cweili/vue-fa/ci.yml?branch=master
[workflows]: https://github.com/Cweili/vue-fa/actions/workflows/ci.yml?query=branch%3Amaster

[badge-coverage]: https://img.shields.io/coveralls/github/Cweili/vue-fa/master.svg
[coveralls]: https://coveralls.io/github/Cweili/vue-fa?branch=master
