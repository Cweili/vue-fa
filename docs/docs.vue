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
    <h4>Duotone Icons</h4>
    <h5>Basic Use</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="fadCamera"
        size="3x"
      />
      <fa
        :icon="fadFireAlt"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        size="3x"
      />
      <fa
        :icon="fadFillDrip"
        size="3x"
      />
    </div>
    <DocsCode
      :code="codes.duotoneIcons[0]"
      lang="js"
    />
    <DocsCode :code="codes.duotoneIcons[1]" />
    <h5>Swapping Layer Opacity</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="fadCamera"
        size="3x"
      />
      <fa
        :icon="fadCamera"
        size="3x"
        swap-opacity
      />
      <fa
        :icon="fadFireAlt"
        size="3x"
      />
      <fa
        :icon="fadFireAlt"
        size="3x"
        swap-opacity
      />
      <fa
        :icon="fadBusAlt"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        size="3x"
        swap-opacity
      />
      <fa
        :icon="fadFillDrip"
        size="3x"
      />
      <fa
        :icon="fadFillDrip"
        size="3x"
        swap-opacity
      />
    </div>
    <DocsCode :code="codes.duotoneIcons[2]" />
    <h5>Changing Opacity</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="fadBusAlt"
        :secondary-opacity=".2"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        :secondary-opacity=".4"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        :secondary-opacity=".6"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        :secondary-opacity=".8"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        :secondary-opacity="1"
        size="3x"
      />
    </div>
    <DocsCode :code="codes.duotoneIcons[3]" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="fadBusAlt"
        :primary-opacity=".2"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        :primary-opacity=".4"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        :primary-opacity=".6"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        :primary-opacity=".8"
        size="3x"
      />
      <fa
        :icon="fadBusAlt"
        :primary-opacity="1"
        size="3x"
      />
    </div>
    <DocsCode :code="codes.duotoneIcons[4]" />
    <h5>Coloring Duotone Icons</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="fadBusAlt"
        size="3x"
        primary-color="gold"
      />
      <fa
        :icon="fadBusAlt"
        size="3x"
        primary-color="orangered"
      />
      <fa
        :icon="fadFillDrip"
        size="3x"
        secondary-color="limegreen"
      />
      <fa
        :icon="fadFillDrip"
        size="3x"
        secondary-color="rebeccapurple"
      />
      <fa
        :icon="fadBatteryFull"
        size="3x"
        primary-color="limegreen"
        secondary-color="dimgray"
      />
      <fa
        :icon="fadBatteryQuarter"
        size="3x"
        primary-color="orange"
        secondary-color="dimgray"
      />
    </div>
    <DocsCode :code="codes.duotoneIcons[5]" />
    <h5>Advanced Use</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="fadBook"
        :secondary-opacity="1"
        size="3x"
        primary-color="lightseagreen"
        secondary-color="linen"
      />
      <fa
        :icon="fadBookSpells"
        :secondary-opacity="1"
        size="3x"
        primary-color="mediumpurple"
        secondary-color="linen"
      />
      <fa
        :icon="fadBookMedical"
        :secondary-opacity="1"
        size="3x"
        primary-color="crimson"
        secondary-color="linen"
      />
      <fa
        :icon="fadBookUser"
        :secondary-opacity="1"
        size="3x"
        primary-color="peru"
        secondary-color="linen"
      />
      <fa
        :icon="fadToggleOff"
        :secondary-opacity="1"
        size="3x"
        primary-color="white"
        secondary-color="gray"
      />
      <fa
        :icon="fadToggleOn"
        :secondary-opacity="1"
        size="3x"
        primary-color="dodgerblue"
        secondary-color="white"
      />
      <fa
        :icon="fadFilePlus"
        :secondary-opacity="1"
        size="3x"
        primary-color="white"
        secondary-color="limegreen"
      />
      <fa
        :icon="fadFileExclamation"
        :secondary-opacity="1"
        size="3x"
        primary-color="white"
        secondary-color="gold"
      />
      <fa
        :icon="fadFileTimes"
        :secondary-opacity="1"
        size="3x"
        primary-color="white"
        secondary-color="tomato"
      />
    </div>
    <DocsCode :code="codes.duotoneIcons[6]" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="fadCrow"
        :secondary-opacity="1"
        size="3x"
        primary-color="dodgerblue"
        secondary-color="gold"
      />
      <fa
        :icon="fadCampfire"
        :secondary-opacity="1"
        size="3x"
        primary-color="sienna"
        secondary-color="red"
      />
      <fa
        :icon="fadBirthdayCake"
        :secondary-opacity="1"
        size="3x"
        primary-color="pink"
        secondary-color="palevioletred"
      />
      <fa
        :icon="fadEar"
        :secondary-opacity="1"
        size="3x"
        primary-color="sandybrown"
        secondary-color="bisque"
      />
      <fa
        :icon="fadCorn"
        :secondary-opacity="1"
        size="3x"
        primary-color="mediumseagreen"
        secondary-color="gold"
      />
      <fa
        :icon="fadCookieBite"
        :secondary-opacity="1"
        size="3x"
        primary-color="saddlebrown"
        secondary-color="burlywood"
      />
    </div>
    <DocsCode :code="codes.duotoneIcons[7]" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa
        :icon="fadHatWizard"
        v-bind="themeRavenclaw"
        size="3x"
      />
      <fa
        :icon="fadFlaskPotion"
        v-bind="themeRavenclaw"
        size="3x"
      />
      <fa
        :icon="fadWandMagic"
        v-bind="themeRavenclaw"
        size="3x"
      />
      <fa
        :icon="fadScarf"
        v-bind="themeRavenclaw"
        size="3x"
      />
      <fa
        :icon="fadBookSpells"
        v-bind="themeRavenclaw"
        size="3x"
      />
    </div>
    <DocsCode
      :code="codes.duotoneIcons[8]"
      lang="js"
    />
    <DocsCode :code="codes.duotoneIcons[9]" />
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

import {
  faCamera as fadCamera,
  faFireAlt as fadFireAlt,
  faBusAlt as fadBusAlt,
  faFillDrip as fadFillDrip,
  faBatteryFull as fadBatteryFull,
  faBatteryQuarter as fadBatteryQuarter,
  faBook as fadBook,
  faBookSpells as fadBookSpells,
  faBookMedical as fadBookMedical,
  faBookUser as fadBookUser,
  faToggleOff as fadToggleOff,
  faToggleOn as fadToggleOn,
  faFilePlus as fadFilePlus,
  faFileExclamation as fadFileExclamation,
  faFileTimes as fadFileTimes,
  faCrow as fadCrow,
  faCampfire as fadCampfire,
  faBirthdayCake as fadBirthdayCake,
  faEar as fadEar,
  faCorn as fadCorn,
  faCookieBite as fadCookieBite,
  faHatWizard as fadHatWizard,
  faFlaskPotion as fadFlaskPotion,
  faWandMagic as fadWandMagic,
  faScarf as fadScarf,
} from '@fortawesome/pro-duotone-svg-icons';

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

      fadCamera,
      fadFireAlt,
      fadBusAlt,
      fadFillDrip,
      fadBatteryFull,
      fadBatteryQuarter,
      fadBook,
      fadBookSpells,
      fadBookMedical,
      fadBookUser,
      fadToggleOff,
      fadToggleOn,
      fadFilePlus,
      fadFileExclamation,
      fadFileTimes,
      fadCrow,
      fadCampfire,
      fadBirthdayCake,
      fadEar,
      fadCorn,
      fadCookieBite,
      fadHatWizard,
      fadFlaskPotion,
      fadWandMagic,
      fadScarf,

      themeRavenclaw: {
        secondaryOpacity: 1,
        primaryColor: '#0438a1',
        secondaryColor: '#6c6c6c',
      },

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
        duotoneIcons: [
          `import {
  faCamera,
  faFireAlt,
  faBusAlt,
  faFillDrip,
} from '@fortawesome/pro-duotone-svg-icons'`,
          `<fa :icon="faCamera" size="3x" />
<fa :icon="faFireAlt" size="3x" />
<fa :icon="faBusAlt" size="3x" />
<fa :icon="faFillDrip" size="3x" />`,
          `<fa :icon="faCamera" size="3x" />
<fa :icon="faCamera" size="3x" swap-opacity />
<fa :icon="faFireAlt" size="3x" />
<fa :icon="faFireAlt" size="3x" swap-opacity />
<fa :icon="faBusAlt" size="3x" />
<fa :icon="faBusAlt" size="3x" swap-opacity />
<fa :icon="faFillDrip" size="3x" />
<fa :icon="faFillDrip" size="3x" swap-opacity />`,
          `<fa :icon="faBusAlt" size="3x" :secondary-opacity=".2" />
<fa :icon="faBusAlt" size="3x" :secondary-opacity=".4" />
<fa :icon="faBusAlt" size="3x" :secondary-opacity=".6" />
<fa :icon="faBusAlt" size="3x" :secondary-opacity=".8" />
<fa :icon="faBusAlt" size="3x" :secondary-opacity="1" />`,
          `<fa :icon="faBusAlt" size="3x" :primary-opacity=".2" />
<fa :icon="faBusAlt" size="3x" :primary-opacity=".4" />
<fa :icon="faBusAlt" size="3x" :primary-opacity=".6" />
<fa :icon="faBusAlt" size="3x" :primary-opacity=".8" />
<fa :icon="faBusAlt" size="3x" :primary-opacity="1" />`,
          `<fa :icon="faBusAlt" size="3x" primary-color="gold" />
<fa :icon="faBusAlt" size="3x" primary-color="orangered" />
<fa :icon="faFillDrip" size="3x" secondary-color="limegreen" />
<fa :icon="faFillDrip" size="3x" secondary-color="rebeccapurple" />
<fa :icon="faBatteryFull" size="3x" primary-color="limegreen" secondary-color="dimgray" />
<fa :icon="faBatteryQuarter" size="3x" primary-color="orange" secondary-color="dimgray" />`,
          `<fa :icon="faBook" size="3x" :secondary-opacity="1" primary-color="lightseagreen" secondary-color="linen" />
<fa :icon="faBookSpells" size="3x" :secondary-opacity="1" primary-color="mediumpurple" secondary-color="linen" />
<fa :icon="faBookMedical" size="3x" :secondary-opacity="1" primary-color="crimson" secondary-color="linen" />
<fa :icon="faBookUser" size="3x" :secondary-opacity="1" primary-color="peru" secondary-color="linen" />
<fa :icon="faToggleOff" size="3x" :secondary-opacity="1" primary-color="white" secondary-color="gray" />
<fa :icon="faToggleOn" size="3x" :secondary-opacity="1" primary-color="dodgerblue" secondary-color="white" />
<fa :icon="faFilePlus" size="3x" :secondary-opacity="1" primary-color="white" secondary-color="limegreen" />
<fa :icon="faFileExclamation" size="3x" :secondary-opacity="1" primary-color="white" secondary-color="gold" />
<fa :icon="faFileTimes" size="3x" :secondary-opacity="1" primary-color="white" secondary-color="tomato" />`,
          `<fa :icon="faCrow" size="3x" :secondary-opacity="1" primary-color="dodgerblue" secondary-color="gold" />
<fa :icon="faCampfire" size="3x" :secondary-opacity="1" primary-color="sienna" secondary-color="red" />
<fa :icon="faBirthdayCake" size="3x" :secondary-opacity="1" primary-color="pink" secondary-color="palevioletred" />
<fa :icon="faEar" size="3x" :secondary-opacity="1" primary-color="sandybrown" secondary-color="bisque" />
<fa :icon="faCorn" size="3x" :secondary-opacity="1" primary-color="mediumseagreen" secondary-color="gold" />
<fa :icon="faCookieBite" size="3x" :secondary-opacity="1" primary-color="saddlebrown" secondary-color="burlywood" />`,
          `const themeRavenclaw = {
  secondaryOpacity: 1,
  primary-color: '#0438a1',
  secondary-color: '#6c6c6c',
}`,
          `<fa :icon="faHatWizard" size="3x" v-bind="themeRavenclaw" />
<fa :icon="faFlaskPotion" size="3x" v-bind="themeRavenclaw" />
<fa :icon="faWandMagic" size="3x" v-bind="themeRavenclaw" />
<fa :icon="faScarf" size="3x" v-bind="themeRavenclaw" />
<fa :icon="faBookSpells" size="3x" v-bind="themeRavenclaw" />`,
        ],
      },
    };
  },
};
</script>
