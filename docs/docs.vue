<template>
  <div>
    <DocsTitle title="Installation" />
    <DocsCode :code="codes.installation[0]" />
    <DocsCode :code="codes.installation[1]" lang="js" />
    <div class="p-2 mb-3">
      <Fa :icon="faInfo" fw />
      for Vue.js v2.x, uses vue-fa@2:
      <span class="shadow-sm p-1 rounded">npm install vue-fa@2</span>
      [<a href="https://cweili.github.io/vue-fa/v2/" target="_blank"
        >vue-fa v2 documents</a
      >]
    </div>
    <DocsTitle title="Basic Use" />
    <div class="shadow-sm p-3 mb-3 rounded"><Fa :icon="faFlag" /> Flag</div>
    <DocsCode :code="codes.basicUse[0]" />

    <div class="shadow-sm p-3 mb-3 rounded">
      <div style="font-size: 3em; color: tomato">
        <Fa :icon="faFlag" />
      </div>
    </div>
    <DocsCode :code="codes.basicUse[1]" />

    <DocsTitle title="Additional Styling" />
    <DocsTitle :level="3" title="Icon Sizes" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <Fa :icon="faFlag" size="xs" />
      &nbsp;
      <Fa :icon="faFlag" size="sm" />
      &nbsp;
      <Fa :icon="faFlag" size="lg" />
      &nbsp;
      <Fa :icon="faFlag" size="2x" />
      &nbsp;
      <Fa :icon="faFlag" size="2.5x" />
      &nbsp;
      <Fa :icon="faFlag" size="5x" />
      &nbsp;
      <Fa :icon="faFlag" size="7x" />
      &nbsp;
      <Fa :icon="faFlag" size="10x" />
    </div>
    <DocsCode :code="codes.additionalStyling[0]" />

    <DocsTitle :level="3" title="Fixed Width Icons" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <div><Fa :icon="faHome" fw style="background: mistyrose" /> Home</div>
      <div><Fa :icon="faInfo" fw style="background: mistyrose" /> Info</div>
      <div><Fa :icon="faBook" fw style="background: mistyrose" /> Library</div>
      <div>
        <Fa :icon="faPencilAlt" fw style="background: mistyrose" /> Applications
      </div>
      <div><Fa :icon="faCog" fw style="background: mistyrose" /> Settins</div>
    </div>
    <DocsCode :code="codes.additionalStyling[1]" />

    <DocsTitle :level="3" title="Pulled Icons" />
    <div class="shadow-sm p-3 mb-3 rounded clearfix">
      <Fa :icon="faQuoteLeft" pull="left" size="2x" />
      <Fa :icon="faQuoteRight" pull="right" size="2x" />
      Gatsby believed in the green light, the orgastic future that year by year
      recedes before us. It eluded us then, but that’s no matter — tomorrow we
      will run faster, stretch our arms further... And one fine morning — So we
      beat on, boats against the current, borne back ceaselessly into the past.
    </div>
    <DocsCode :code="codes.additionalStyling[2]" />

    <DocsTitle title="Animating Icons" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <Fa :icon="faSpinner" size="3x" spin />
      &nbsp;
      <Fa :icon="faCircleNotch" size="3x" spin />
      &nbsp;
      <Fa :icon="faSync" size="3x" spin />
      &nbsp;
      <Fa :icon="faCog" size="3x" spin />
      &nbsp;
      <Fa :icon="faSpinner" size="3x" pulse />
      &nbsp;
      <Fa :icon="faStroopwafel" size="3x" spin />
    </div>
    <DocsCode :code="codes.animatingIcons[0]" />

    <DocsTitle title="Power Transforms" />
    <DocsTitle title="Scaling" level="{3}" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <Fa :icon="faSeedling" size="4x" style="background: mistyrose" />
      &nbsp;
      <Fa
        :icon="faSeedling"
        :scale="0.5"
        size="4x"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        :scale="1.2"
        size="4x"
        style="background: mistyrose"
      />
    </div>
    <DocsCode :code="codes.powerTransforms[0]" />

    <DocsTitle title="Positioning" level="{3}" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <Fa
        :icon="faSeedling"
        :scale="0.5"
        size="4x"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        :scale="0.5"
        :translateX="0.2"
        size="4x"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        :scale="0.5"
        :translateX="-0.2"
        size="4x"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        :scale="0.5"
        :translateY="0.2"
        size="4x"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        :scale="0.5"
        :translateY="-0.2"
        size="4x"
        style="background: mistyrose"
      />
    </div>
    <DocsCode :code="codes.powerTransforms[1]" />

    <DocsTitle :level="3" title="Rotating &amp; Flipping" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <Fa
        :icon="faSeedling"
        :rotate="90"
        size="4x"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        :rotate="180"
        size="4x"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        size="4x"
        rotate="270"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        size="4x"
        rotate="30"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        size="4x"
        rotate="-30"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        size="4x"
        flip="vertical"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        size="4x"
        flip="horizontal"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        size="4x"
        flip="both"
        style="background: mistyrose"
      />
      &nbsp;
      <Fa
        :icon="faSeedling"
        size="4x"
        flip="both"
        rotate="30"
        style="background: mistyrose"
      />
    </div>
    <DocsCode :code="codes.powerTransforms[2]" />

    <DocsTitle title="Layering &amp; Text" />
    <div class="shadow-sm p-3 mb-3 rounded">
      <FaLayers size="4x" style="background: mistyrose">
        <Fa :icon="faCircle" color="tomato" />
        <Fa :icon="faTimes" :scale="0.5" color="white" />
      </FaLayers>
      &nbsp;
      <FaLayers size="4x" style="background: mistyrose">
        <Fa :icon="faBookmark" />
        <Fa :icon="faHeart" :scale="0.4" :translateY="-0.1" color="tomato" />
      </FaLayers>
      &nbsp;
      <FaLayers size="4x" style="background: mistyrose">
        <Fa :icon="faPlay" :scale="1.2" :rotate="-90" />
        <Fa :icon="faSun" :scale="0.35" :translateY="-0.2" color="white" />
        <Fa :icon="faMoon" :scale="0.3" :translateX="-0.25" :translateY="0.25" color="white" />
        <Fa :icon="faStar" :scale="0.3" :translateX="0.25" :translateY="0.25" color="white" />
      </FaLayers>
      &nbsp;
      <FaLayers size="4x" style="background: mistyrose">
        <Fa :icon="faCalendar" />
        <FaLayersText :scale="0.45" :translateY="0.15" color="white" style="font-weight: 900">
          27
        </FaLayersText>
      </FaLayers>
      &nbsp;
      <FaLayers size="4x" style="background: mistyrose">
        <Fa :icon="faCertificate" />
        <FaLayersText :scale="0.25" :translateY="0.07" :rotate="-30" color="white" style="font-weight: 900">
          NEW
        </FaLayersText>
      </FaLayers>
      &nbsp;
      <FaLayers size="4x" style="background: mistyrose">
        <Fa :icon="faEnvelope" />
        <FaLayersText :scale="0.2" :translateX="0.4" :translateY="-0.3" color="white">
          <span style="padding: 0 .2em; background: tomato; border-radius: 1em">
            1,419
          </span>
        </FaLayersText>
      </FaLayers>
    </div>
    <DocsCode :code="codes.layering[0]" lang="js" />
    <DocsCode :code="codes.layering[1]" />

    <DocsTitle title="Duotone Icons" />
    <DocsTitle :level="3" title="Basic Use" />
    <DocsImg src="assets/duotone-0.png" alt="duotone icons basic use" />
    <DocsCode :code="codes.duotoneIcons[0]" lang="js" />
    <DocsCode :code="codes.duotoneIcons[1]" />
    <DocsTitle :level="3" title="Swapping Layer Opacity" />
    <DocsImg
      src="assets/duotone-1.png"
      alt="swapping duotone icons layer opacity"
    />
    <DocsCode :code="codes.duotoneIcons[2]" />
    <DocsTitle :level="3" title="Changing Opacity" />
    <DocsImg src="assets/duotone-2.png" alt="changing duotone icons opacity" />
    <DocsCode :code="codes.duotoneIcons[3]" />
    <DocsImg src="assets/duotone-3.png" alt="changing duotone icons opacity" />
    <DocsCode :code="codes.duotoneIcons[4]" />
    <DocsTitle :level="3" title="Coloring Duotone Icons" />
    <DocsImg src="assets/duotone-4.png" alt="coloring duotone icons" />
    <DocsCode :code="codes.duotoneIcons[5]" />
    <DocsTitle :level="3" title="Advanced Use" />
    <DocsImg src="assets/duotone-5.png" alt="duotone icons advanced use" />
    <DocsCode :code="codes.duotoneIcons[6]" />
    <DocsImg src="assets/duotone-6.png" alt="duotone icons advanced use" />
    <DocsCode :code="codes.duotoneIcons[7]" />
    <DocsImg src="assets/duotone-7.png" alt="duotone icons advanced use" />
    <DocsCode :code="codes.duotoneIcons[8]" lang="js" />
    <DocsCode :code="codes.duotoneIcons[9]" />
  </div>
</template>

<script>
import Fa, {
  FaLayers,
  FaLayersText,
} from 'vue-fa';
import {
  faFlag,
  faHome,
  faInfo,
  faBook,
  faBookmark,
  faPencilAlt,
  faCog,
  faCircle,
  faCircleNotch,
  faQuoteLeft,
  faQuoteRight,
  faSpinner,
  faStroopwafel,
  faSync,
  faSeedling,
  faTimes,
  faHeart,
  faPlay,
  faSun,
  faMoon,
  faStar,
  faCalendar,
  faCertificate,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import DocsCode from './docs-code.vue';
import DocsImg from './docs-img.vue';
import DocsTitle from './docs-title.vue';

export default {
  components: {
    Fa,
    FaLayers,
    FaLayersText,
    DocsCode,
    DocsImg,
    DocsTitle,
  },

  setup() {
    return {
      faFlag,
      faHome,
      faInfo,
      faBook,
      faBookmark,
      faPencilAlt,
      faCog,
      faCircle,
      faCircleNotch,
      faQuoteLeft,
      faQuoteRight,
      faSpinner,
      faStroopwafel,
      faSync,
      faSeedling,
      faTimes,
      faHeart,
      faPlay,
      faSun,
      faMoon,
      faStar,
      faCalendar,
      faCertificate,
      faEnvelope,

      codes: {
        installation: [
          'npm install vue-fa',
          `import Fa from 'vue-fa'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

`
            + 'export '
            + `default {
  components: {
    Fa
  },

  setup() {
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
        animatingIcons: [
          `<Fa :icon="faSpinner" size="3x" spin />
<Fa :icon="faCircleNotch" size="3x" spin />
<Fa :icon="faSync" size="3x" spin />
<Fa :icon="faCog" size="3x" spin />
<Fa :icon="faSpinner" size="3x" pulse />
<Fa :icon="faStroopwafel" size="3x" spin />`,
        ],
        powerTransforms: [
          `<Fa :icon="faSeedling" size="4x" style="background: mistyrose" />
<Fa :icon="faSeedling" :scale="0.5" size="4x" style="background: mistyrose" />
<Fa :icon="faSeedling" :scale="1.2" size="4x" style="background: mistyrose" />`,
          `<Fa :icon="faSeedling" :scale="0.5" size="4x" style="background: mistyrose" />
<Fa :icon="faSeedling" :scale="0.5" :translateX="0.2" size="4x" style="background: mistyrose" />
<Fa :icon="faSeedling" :scale="0.5" :translateX="-0.2" size="4x" style="background: mistyrose" />
<Fa :icon="faSeedling" :scale="0.5" :translateY="0.2" size="4x" style="background: mistyrose" />
<Fa :icon="faSeedling" :scale="0.5" :translateY="-0.2" size="4x" style="background: mistyrose" />`,
          `<Fa :icon="faSeedling" size="4x" :rotate="90" style="background: mistyrose"/>
<Fa :icon="faSeedling" size="4x" :rotate="180" style="background: mistyrose"/>
<Fa :icon="faSeedling" size="4x" rotate="270" style="background: mistyrose"/>
<Fa :icon="faSeedling" size="4x" rotate="30" style="background: mistyrose"/>
<Fa :icon="faSeedling" size="4x" rotate="-30" style="background: mistyrose"/>
<Fa :icon="faSeedling" size="4x" flip="vertical" style="background: mistyrose"/>
<Fa :icon="faSeedling" size="4x" flip="horizontal" style="background: mistyrose"/>
<Fa :icon="faSeedling" size="4x" flip="both" style="background: mistyrose"/>
<Fa :icon="faSeedling" size="4x" flip="both" style="background: mistyrose"/>`,
        ],
        layering: [
          `import Fa, {
  FaLayers,
  FaLayersText,
} from 'vue-fa';`,
          `<FaLayers size="4x" style="background: mistyrose">
  <Fa :icon="faCircle" color="tomato" />
  <Fa :icon="faTimes" :scale="0.5" color="white" />
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa :icon="faBookmark" />
  <Fa :icon="faHeart" :scale="0.4" :translateY="-0.1" color="tomato" />
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa :icon="faPlay" :scale="1.2" :rotate="-90" />
  <Fa :icon="faSun" :scale="0.35" :translateY="-0.2" color="white" />
  <Fa :icon="faMoon" :scale="0.3" :translateX="-0.25" :translateY="0.25" color="white" />
  <Fa :icon="faStar" :scale="0.3" :translateX="0.25" :translateY="0.25" color="white" />
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa :icon="faCalendar" />
  <FaLayersText :scale="0.45" :translateY="0.15" color="white" style="font-weight: 900">
    27
  </FaLayersText>
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa :icon="faCertificate" />
  <FaLayersText :scale="0.25" :translateY="0.07" :rotate="-30" color="white" style="font-weight: 900">
    NEW
  </FaLayersText>
</FaLayers>
<FaLayers size="4x" style="background: mistyrose">
  <Fa :icon="faEnvelope" />
  <FaLayersText :scale="0.2" :translateX="0.4" :translateY="-0.3" color="white">
    <span style="padding: 0 .2em; background: tomato; border-radius: 1em">
      1,419
    </span>
  </FaLayersText>
</FaLayers>`,
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
