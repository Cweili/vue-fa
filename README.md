# vue-fa

[![npm][npm-version]](npm)
[![npm][npm-downloads]](npm)
[![npm][npm-license]](npm)
[![github][github-issues]](github)

Simple FontAwesome 5.0+ component in Vue.js.

## Install

```
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
  import faFlag from '@fortawesome/fontawesome-free-solid/faFlag'

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
  :rotation="90"
  size="2x"/>
```

* `fw` fixed width
* `flip` values `horizontal` `vertical` `both`
* `pull` values `left` `right`
* `rotation` values `90` `180` `270`
* `size` values `xs` `sm` `lg` or `2x` `3x` `4x` ...

[npm]: https://www.npmjs.com/package/vue-fa
[npm-version]: https://img.shields.io/npm/v/vue-fa.svg
[npm-downloads]: https://img.shields.io/npm/dt/vue-fa.svg
[npm-license]: https://img.shields.io/npm/l/vue-fa.svg

[github]: https://github.com/Cweili/vue-fa
[github-issues]: https://img.shields.io/github/issues/Cweili/vue-fa.svg
