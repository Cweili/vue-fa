# vue-fa

[![npm][npm-version]][npm]
[![npm][npm-size]][npm]
[![npm][npm-downloads]][npm]
[![npm][npm-license]][npm]


[![github][github-issues]][github]
[![travis][travis-build]][travis]
[![codecov][codecov-svg]][codecov]

Simple [FontAwesome 5][fontawesome] [Vue.js 2][vuejs] component.

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
  import { faFlag } from '@fortawesome/fontawesome-free-solid'

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

## Attributes

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

[npm]: https://www.npmjs.com/package/vue-fa
[npm-version]: https://img.shields.io/npm/v/vue-fa.svg
[npm-size]: https://img.shields.io/bundlephobia/minzip/vue-fa.svg
[npm-downloads]: https://img.shields.io/npm/dt/vue-fa.svg
[npm-license]: https://img.shields.io/npm/l/vue-fa.svg

[github]: https://github.com/Cweili/vue-fa
[github-issues]: https://img.shields.io/github/issues/Cweili/vue-fa.svg

[travis]: https://travis-ci.org/Cweili/vue-fa
[travis-build]: https://img.shields.io/travis/Cweili/vue-fa.svg

[codecov]: https://codecov.io/gh/Cweili/vue-fa
[codecov-svg]: https://img.shields.io/codecov/c/github/Cweili/vue-fa.svg


[fontawesome]: https://fontawesome.com/
[vuejs]: https://vuejs.org/

[doc]: https://cweili.github.io/vue-fa/
