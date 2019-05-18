<template>
  <div>
    <h4>Installation</h4>
    <docs-code :code="codes.installation[0]" />
    <docs-code
      :code="codes.installation[1]"
      lang="js"
    />
    <h4>Basic Use</h4>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa :icon="faFlag" /> Flag
    </div>
    <docs-code :code="codes.basicUse[0]" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <div style="font-size: 3em; color: tomato">
        <fa :icon="faFlag" />
      </div>
    </div>
    <docs-code :code="codes.basicUse[1]" />
    <h4>Additional Styling</h4>
    <h5>Icon Sizes</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="faFlag"
        size="xs"
      />
      <fa
        :icon="faFlag"
        size="sm"
      />
      <fa
        :icon="faFlag"
        size="lg"
      />
      <fa
        :icon="faFlag"
        size="2x"
      />
      <fa
        :icon="faFlag"
        size="2.5x"
      />
      <fa
        :icon="faFlag"
        size="5x"
      />
      <fa
        :icon="faFlag"
        size="7x"
      />
      <fa
        :icon="faFlag"
        size="10x"
      />
    </div>
    <docs-code :code="codes.additionalStyling[0]" />
    <h5>Fixed Width Icons</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <div>
        <fa
          :icon="faHome"
          fw
          style="background: mistyrose"
        /> Home
      </div>
      <div>
        <fa
          :icon="faInfo"
          fw
          style="background: mistyrose"
        /> Info
      </div>
      <div>
        <fa
          :icon="faBook"
          fw
          style="background: mistyrose"
        /> Library
      </div>
      <div>
        <fa
          :icon="faPencilAlt"
          fw
          style="background: mistyrose"
        /> Applications
      </div>
      <div>
        <fa
          :icon="faCog"
          fw
          style="background: mistyrose"
        /> Settins
      </div>
    </div>
    <docs-code :code="codes.additionalStyling[1]" />
    <h5>Pulled Icons</h5>
    <div class="shadow-sm p-3 mb-3 rounded clearfix">
      <fa
        :icon="faQuoteLeft"
        pull="left"
        size="2x"
      />
      <fa
        :icon="faQuoteRight"
        pull="right"
        size="2x"
      />
      Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
    </div>
    <docs-code :code="codes.additionalStyling[2]" />
    <h4>Power Transforms</h4>
    <h5>Rotating &amp; Flipping</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="faMagic"
        :rotate="90"
        size="4x"
        style="background: mistyrose"
      />
      <fa
        :icon="faMagic"
        :rotate="180"
        size="4x"
        style="background: mistyrose"
      />
      <fa
        :icon="faMagic"
        size="4x"
        rotate="270"
        style="background: mistyrose"
      />
      <fa
        :icon="faMagic"
        size="4x"
        rotate="30"
        style="background: mistyrose"
      />
      <fa
        :icon="faMagic"
        size="4x"
        rotate="-30"
        style="background: mistyrose"
      />
      <fa
        :icon="faMagic"
        size="4x"
        flip="vertical"
        style="background: mistyrose"
      />
      <fa
        :icon="faMagic"
        size="4x"
        flip="horizontal"
        style="background: mistyrose"
      />
      <fa
        :icon="faMagic"
        size="4x"
        flip="both"
        style="background: mistyrose"
      />
      <fa
        :icon="faMagic"
        size="4x"
        flip="both"
        rotate="30"
        style="background: mistyrose"
      />
    </div>
    <docs-code :code="codes.powerTransforms[0]" />
  </div>
</template>

<script>
import Fa from 'vue-fa';
import {
  faFlag,
  faHome,
  faInfo,
  faBook,
  faPencilAlt,
  faCog,
  faQuoteLeft,
  faQuoteRight,
  faMagic,
} from '@fortawesome/free-solid-svg-icons';

import DocsCode from './docs-code.vue';

export default {
  components: {
    Fa,
    DocsCode,
  },

  data() {
    return {
      faFlag,
      faHome,
      faInfo,
      faBook,
      faPencilAlt,
      faCog,
      faQuoteLeft,
      faQuoteRight,
      faMagic,

      codes: {
        installation: [
          'npm install vue-fa --save',
          `import Fa from 'vue-fa'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

`
+ 'export '
+ `default {
  components: {
    Fa
  },

  data() {
    return {
      faFlag
    }
  }
}`,
        ],
        basicUse: [
          '<fa :icon="faFlag" /> Flag',
          `<div style="font-size: 3em; color: tomato">
  <fa :icon="faFlag" />
</div>`,
        ],
        additionalStyling: [
          `<fa :icon="faFlag" size="xs" />
<fa :icon="faFlag" size="sm" />
<fa :icon="faFlag" size="lg" />
<fa :icon="faFlag" size="2x" />
<fa :icon="faFlag" size="2.5x" />
<fa :icon="faFlag" size="5x" />
<fa :icon="faFlag" size="7x" />
<fa :icon="faFlag" size="10x" />`,
          `<div>
  <fa :icon="faHome" fw style="background: mistyrose" /> Home
</div>
<div>
  <fa :icon="faInfo" fw style="background: mistyrose" /> Info
</div>
<div>
  <fa :icon="faBook" fw style="background: mistyrose" /> Library
</div>
<div>
  <fa :icon="faPencilAlt" fw style="background: mistyrose" /> Applications
</div>
<div>
  <fa :icon="faCog" fw style="background: mistyrose" /> Settins
</div>`,
          `<fa :icon="faQuoteLeft" pull="left" size="2x" />
<fa :icon="faQuoteRight" pull="right" size="2x" />
Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.`,
        ],
        powerTransforms: [
          `<fa :icon="faMagic" size="4x" :rotate="90" style="background: mistyrose"/>
<fa :icon="faMagic" size="4x" :rotate="180" style="background: mistyrose"/>
<fa :icon="faMagic" size="4x" rotate="270" style="background: mistyrose"/>
<fa :icon="faMagic" size="4x" rotate="30" style="background: mistyrose"/>
<fa :icon="faMagic" size="4x" rotate="-30" style="background: mistyrose"/>
<fa :icon="faMagic" size="4x" flip="vertical" style="background: mistyrose"/>
<fa :icon="faMagic" size="4x" flip="horizontal" style="background: mistyrose"/>
<fa :icon="faMagic" size="4x" flip="both" style="background: mistyrose"/>
<fa :icon="faMagic" size="4x" flip="both" style="background: mistyrose"/>`,
        ],
      },
    };
  },
};
</script>
