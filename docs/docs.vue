<template>
  <div>
    <DocsTitle title="Installation" />
    <DocsCode :code="codes.installation[0]" />
    <DocsCode
      :code="codes.installation[1]"
      lang="js"
    />
    <DocsTitle title="Basic Use" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <Fa :icon="faFlag" /> Flag
    </div>
    <DocsCode :code="codes.basicUse[0]" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <div style="font-size: 3em; color: tomato">
        <Fa :icon="faFlag" />
      </div>
    </div>
    <DocsCode :code="codes.basicUse[1]" />
    <DocsTitle title="Additional Styling" />
    <DocsTitle
      :level="5"
      title="Icon Sizes"
    />
    <div class="shadow-sm p-3 mb-3 rounded">
      <Fa
        :icon="faFlag"
        size="xs"
      />
      <Fa
        :icon="faFlag"
        size="sm"
      />
      <Fa
        :icon="faFlag"
        size="lg"
      />
      <Fa
        :icon="faFlag"
        size="2x"
      />
      <Fa
        :icon="faFlag"
        size="2.5x"
      />
      <Fa
        :icon="faFlag"
        size="5x"
      />
      <Fa
        :icon="faFlag"
        size="7x"
      />
      <Fa
        :icon="faFlag"
        size="10x"
      />
    </div>
    <DocsCode :code="codes.additionalStyling[0]" />
    <DocsTitle
      :level="5"
      title="Fixed Width Icons"
    />
    <div class="shadow-sm p-3 mb-3 rounded">
      <div>
        <Fa
          :icon="faHome"
          fw
          style="background: mistyrose"
        /> Home
      </div>
      <div>
        <Fa
          :icon="faInfo"
          fw
          style="background: mistyrose"
        /> Info
      </div>
      <div>
        <Fa
          :icon="faBook"
          fw
          style="background: mistyrose"
        /> Library
      </div>
      <div>
        <Fa
          :icon="faPencilAlt"
          fw
          style="background: mistyrose"
        /> Applications
      </div>
      <div>
        <Fa
          :icon="faCog"
          fw
          style="background: mistyrose"
        /> Settins
      </div>
    </div>
    <DocsCode :code="codes.additionalStyling[1]" />
    <DocsTitle
      :level="5"
      title="Pulled Icons"
    />
    <div class="shadow-sm p-3 mb-3 rounded clearfix">
      <Fa
        :icon="faQuoteLeft"
        pull="left"
        size="2x"
      />
      <Fa
        :icon="faQuoteRight"
        pull="right"
        size="2x"
      />
      Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
    </div>
    <DocsCode :code="codes.additionalStyling[2]" />
    <DocsTitle title="Power Transforms" />
    <DocsTitle
      :level="5"
      title="Rotating &amp; Flipping"
    />
    <div class="shadow-sm p-3 mb-3 rounded">
      <Fa
        :icon="faMagic"
        :rotate="90"
        size="4x"
        style="background: mistyrose"
      />
      <Fa
        :icon="faMagic"
        :rotate="180"
        size="4x"
        style="background: mistyrose"
      />
      <Fa
        :icon="faMagic"
        size="4x"
        rotate="270"
        style="background: mistyrose"
      />
      <Fa
        :icon="faMagic"
        size="4x"
        rotate="30"
        style="background: mistyrose"
      />
      <Fa
        :icon="faMagic"
        size="4x"
        rotate="-30"
        style="background: mistyrose"
      />
      <Fa
        :icon="faMagic"
        size="4x"
        flip="vertical"
        style="background: mistyrose"
      />
      <Fa
        :icon="faMagic"
        size="4x"
        flip="horizontal"
        style="background: mistyrose"
      />
      <Fa
        :icon="faMagic"
        size="4x"
        flip="both"
        style="background: mistyrose"
      />
      <Fa
        :icon="faMagic"
        size="4x"
        flip="both"
        rotate="30"
        style="background: mistyrose"
      />
    </div>
    <DocsCode :code="codes.powerTransforms[0]" />
    <DocsTitle title="Duotone Icons" />
    <DocsTitle
      :level="5"
      title="Basic Use"
    />
    <DocsImg
      src="assets/duotone-0.png"
      alt="duotone icons basic use"
    />
    <DocsCode
      :code="codes.duotoneIcons[0]"
      lang="js"
    />
    <DocsCode :code="codes.duotoneIcons[1]" />
    <DocsTitle
      :level="5"
      title="Swapping Layer Opacity"
    />
    <DocsImg
      src="assets/duotone-1.png"
      alt="swapping duotone icons layer opacity"
    />
    <DocsCode :code="codes.duotoneIcons[2]" />
    <DocsTitle
      :level="5"
      title="Changing Opacity"
    />
    <DocsImg
      src="assets/duotone-2.png"
      alt="changing duotone icons opacity"
    />
    <DocsCode :code="codes.duotoneIcons[3]" />
    <DocsImg
      src="assets/duotone-3.png"
      alt="changing duotone icons opacity"
    />
    <DocsCode :code="codes.duotoneIcons[4]" />
    <DocsTitle
      :level="5"
      title="Coloring Duotone Icons"
    />
    <DocsImg
      src="assets/duotone-4.png"
      alt="coloring duotone icons"
    />
    <DocsCode :code="codes.duotoneIcons[5]" />
    <DocsTitle
      :level="5"
      title="Advanced Use"
    />
    <DocsImg
      src="assets/duotone-5.png"
      alt="duotone icons advanced use"
    />
    <DocsCode :code="codes.duotoneIcons[6]" />
    <DocsImg
      src="assets/duotone-6.png"
      alt="duotone icons advanced use"
    />
    <DocsCode :code="codes.duotoneIcons[7]" />
    <DocsImg
      src="assets/duotone-7.png"
      alt="duotone icons advanced use"
    />
    <DocsCode
      :code="codes.duotoneIcons[8]"
      lang="js"
    />
    <DocsCode :code="codes.duotoneIcons[9]" />
  </div>
</template>

<script>
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
import Fa from '../dist/vue-fa.esm';

import DocsCode from './docs-code.vue';
import DocsImg from './docs-img.vue';
import DocsTitle from './docs-title.vue';

export default {
  components: {
    Fa,
    DocsCode,
    DocsImg,
    DocsTitle,
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
          '<Fa :icon="faFlag" /> Flag',
          `<div style="font-size: 3em; color: tomato">
  <Fa :icon="faFlag" />
</div>`,
        ],
        additionalStyling: [
          `<Fa :icon="faFlag" size="xs" />
<Fa :icon="faFlag" size="sm" />
<Fa :icon="faFlag" size="lg" />
<Fa :icon="faFlag" size="2x" />
<Fa :icon="faFlag" size="2.5x" />
<Fa :icon="faFlag" size="5x" />
<Fa :icon="faFlag" size="7x" />
<Fa :icon="faFlag" size="10x" />`,
          `<div>
  <Fa :icon="faHome" fw style="background: mistyrose" /> Home
</div>
<div>
  <Fa :icon="faInfo" fw style="background: mistyrose" /> Info
</div>
<div>
  <Fa :icon="faBook" fw style="background: mistyrose" /> Library
</div>
<div>
  <Fa :icon="faPencilAlt" fw style="background: mistyrose" /> Applications
</div>
<div>
  <Fa :icon="faCog" fw style="background: mistyrose" /> Settins
</div>`,
          `<Fa :icon="faQuoteLeft" pull="left" size="2x" />
<Fa :icon="faQuoteRight" pull="right" size="2x" />
Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.`,
        ],
        powerTransforms: [
          `<Fa :icon="faMagic" size="4x" :rotate="90" style="background: mistyrose"/>
<Fa :icon="faMagic" size="4x" :rotate="180" style="background: mistyrose"/>
<Fa :icon="faMagic" size="4x" rotate="270" style="background: mistyrose"/>
<Fa :icon="faMagic" size="4x" rotate="30" style="background: mistyrose"/>
<Fa :icon="faMagic" size="4x" rotate="-30" style="background: mistyrose"/>
<Fa :icon="faMagic" size="4x" flip="vertical" style="background: mistyrose"/>
<Fa :icon="faMagic" size="4x" flip="horizontal" style="background: mistyrose"/>
<Fa :icon="faMagic" size="4x" flip="both" style="background: mistyrose"/>
<Fa :icon="faMagic" size="4x" flip="both" style="background: mistyrose"/>`,
        ],
        duotoneIcons: [
          `import {
  faCamera,
  faFireAlt,
  faBusAlt,
  faFillDrip,
} from '@fortawesome/pro-duotone-svg-icons'`,
          `<Fa :icon="faCamera" size="3x" />
<Fa :icon="faFireAlt" size="3x" />
<Fa :icon="faBusAlt" size="3x" />
<Fa :icon="faFillDrip" size="3x" />`,
          `<Fa :icon="faCamera" size="3x" />
<Fa :icon="faCamera" size="3x" swap-opacity />
<Fa :icon="faFireAlt" size="3x" />
<Fa :icon="faFireAlt" size="3x" swap-opacity />
<Fa :icon="faBusAlt" size="3x" />
<Fa :icon="faBusAlt" size="3x" swap-opacity />
<Fa :icon="faFillDrip" size="3x" />
<Fa :icon="faFillDrip" size="3x" swap-opacity />`,
          `<Fa :icon="faBusAlt" size="3x" :secondary-opacity=".2" />
<Fa :icon="faBusAlt" size="3x" :secondary-opacity=".4" />
<Fa :icon="faBusAlt" size="3x" :secondary-opacity=".6" />
<Fa :icon="faBusAlt" size="3x" :secondary-opacity=".8" />
<Fa :icon="faBusAlt" size="3x" :secondary-opacity="1" />`,
          `<Fa :icon="faBusAlt" size="3x" :primary-opacity=".2" />
<Fa :icon="faBusAlt" size="3x" :primary-opacity=".4" />
<Fa :icon="faBusAlt" size="3x" :primary-opacity=".6" />
<Fa :icon="faBusAlt" size="3x" :primary-opacity=".8" />
<Fa :icon="faBusAlt" size="3x" :primary-opacity="1" />`,
          `<Fa :icon="faBusAlt" size="3x" primary-color="gold" />
<Fa :icon="faBusAlt" size="3x" primary-color="orangered" />
<Fa :icon="faFillDrip" size="3x" secondary-color="limegreen" />
<Fa :icon="faFillDrip" size="3x" secondary-color="rebeccapurple" />
<Fa :icon="faBatteryFull" size="3x" primary-color="limegreen" secondary-color="dimgray" />
<Fa :icon="faBatteryQuarter" size="3x" primary-color="orange" secondary-color="dimgray" />`,
          `<Fa :icon="faBook" size="3x" :secondary-opacity="1" primary-color="lightseagreen" secondary-color="linen" />
<Fa :icon="faBookSpells" size="3x" :secondary-opacity="1" primary-color="mediumpurple" secondary-color="linen" />
<Fa :icon="faBookMedical" size="3x" :secondary-opacity="1" primary-color="crimson" secondary-color="linen" />
<Fa :icon="faBookUser" size="3x" :secondary-opacity="1" primary-color="peru" secondary-color="linen" />
<Fa :icon="faToggleOff" size="3x" :secondary-opacity="1" primary-color="white" secondary-color="gray" />
<Fa :icon="faToggleOn" size="3x" :secondary-opacity="1" primary-color="dodgerblue" secondary-color="white" />
<Fa :icon="faFilePlus" size="3x" :secondary-opacity="1" primary-color="white" secondary-color="limegreen" />
<Fa :icon="faFileExclamation" size="3x" :secondary-opacity="1" primary-color="white" secondary-color="gold" />
<Fa :icon="faFileTimes" size="3x" :secondary-opacity="1" primary-color="white" secondary-color="tomato" />`,
          `<Fa :icon="faCrow" size="3x" :secondary-opacity="1" primary-color="dodgerblue" secondary-color="gold" />
<Fa :icon="faCampfire" size="3x" :secondary-opacity="1" primary-color="sienna" secondary-color="red" />
<Fa :icon="faBirthdayCake" size="3x" :secondary-opacity="1" primary-color="pink" secondary-color="palevioletred" />
<Fa :icon="faEar" size="3x" :secondary-opacity="1" primary-color="sandybrown" secondary-color="bisque" />
<Fa :icon="faCorn" size="3x" :secondary-opacity="1" primary-color="mediumseagreen" secondary-color="gold" />
<Fa :icon="faCookieBite" size="3x" :secondary-opacity="1" primary-color="saddlebrown" secondary-color="burlywood" />`,
          `const themeRavenclaw = {
  secondaryOpacity: 1,
  primary-color: '#0438a1',
  secondary-color: '#6c6c6c',
}`,
          `<Fa :icon="faHatWizard" size="3x" v-bind="themeRavenclaw" />
<Fa :icon="faFlaskPotion" size="3x" v-bind="themeRavenclaw" />
<Fa :icon="faWandMagic" size="3x" v-bind="themeRavenclaw" />
<Fa :icon="faScarf" size="3x" v-bind="themeRavenclaw" />
<Fa :icon="faBookSpells" size="3x" v-bind="themeRavenclaw" />`,
        ],
      },
    };
  },
};
</script>
