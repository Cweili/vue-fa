# vue-fa

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]


[![github][badge-issues]][github]
[![travis][badge-build]][travis]
[![coverage][badge-coverage]][codecov]

Tiny [FontAwesome 5][fontawesome] component for [Vue.js][vuejs].

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
  size="2x"/>
```

* `fw`: fixed width
* `flip`: `string` values `horizontal`, `vertical`, `both`
* `pull`: `string` values `left`, `right`
* `rotate`: `number or string` values `90`, `180`, `270`, `30`, `-30` ...
* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x` ...

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

[badge-build]: https://travis-ci.org/Cweili/vue-fa.svg?branch=master
[travis]: https://travis-ci.org/Cweili/vue-fa

[badge-coverage]: https://img.shields.io/codecov/c/github/Cweili/vue-fa.svg
[codecov]: https://codecov.io/gh/Cweili/vue-fa
