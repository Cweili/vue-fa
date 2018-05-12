<template>
  <div class="m-4">
    <div class="jumbotron">
      <h1>vue-fa</h1>
      <p class="lead">
        Simple <a href="https://fontawesome.com/" target="_blank">FontAwesome 5</a> <a href="https://vuejs.org/" target="_blank">Vue.js 2</a> component.
      </p>
    </div>
    <h4>Basic Use</h4>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa :icon="faFlag"/> Flag
    </div>
    <div class="shadow-sm p-3 mb-3 rounded bg-dark">
      <pre class="mb-0 text-white"><code>&lt;fa :icon="faFlag"/&gt; Flag</code></pre>
    </div>
    <div class="shadow-sm p-3 mb-3 rounded">
      <div style="font-size: 3em; color: tomato">
        <fa :icon="faFlag"/>
      </div>
    </div>
    <div class="shadow-sm p-3 mb-3 rounded bg-dark">
      <pre class="mb-0 text-white"><code>&lt;div style="font-size: 3em; color: tomato"&gt;
&lt;fa :icon="faFlag"/&gt;
&lt;div/&gt;</code></pre>
    </div>
    <h4>Additional Styling</h4>
    <h5>Icon Sizes</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa :icon="faFlag" size="xs"/>
      <fa :icon="faFlag" size="sm"/>
      <fa :icon="faFlag" size="lg"/>
      <fa :icon="faFlag" size="2x"/>
      <fa :icon="faFlag" size="2.5x"/>
      <fa :icon="faFlag" size="5x"/>
      <fa :icon="faFlag" size="7x"/>
      <fa :icon="faFlag" size="10x"/>
    </div>
    <div class="shadow-sm p-3 mb-3 rounded bg-dark">
      <pre class="mb-0 text-white"><code>&lt;fa :icon="faFlag" size="xs"/&gt;
&lt;fa :icon="faFlag" size="xs"/&gt;
&lt;fa :icon="faFlag" size="sm"/&gt;
&lt;fa :icon="faFlag" size="lg"/&gt;
&lt;fa :icon="faFlag" size="2x"/&gt;
&lt;fa :icon="faFlag" size="2.5x"/&gt;
&lt;fa :icon="faFlag" size="5x"/&gt;
&lt;fa :icon="faFlag" size="7x"/&gt;
&lt;fa :icon="faFlag" size="10x"/&gt;</code></pre>
    </div>
    <h5>Fixed Width Icons</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <div><fa :icon="faHome" fw style="background: mistyrose"/> Home</div>
      <div><fa :icon="faInfo" fw style="background: mistyrose"/> Info</div>
      <div><fa :icon="faBook" fw style="background: mistyrose"/> Library</div>
      <div><fa :icon="faPencilAlt" fw style="background: mistyrose"/> Applications</div>
      <div><fa :icon="faCog" fw style="background: mistyrose"/> Settins</div>
    </div>
    <div class="shadow-sm p-3 mb-3 rounded bg-dark">
      <pre class="mb-0 text-white"><code>&lt;div&gt;&lt;fa :icon="faHome" fw style="background: mistyrose"/&gt;&lt;/div&gt;
&lt;div&gt;&lt;fa :icon="faInfo" fw style="background: mistyrose"/&gt;&lt;/div&gt;
&lt;div&gt;&lt;fa :icon="faBook" fw style="background: mistyrose"/&gt;&lt;/div&gt;
&lt;div&gt;&lt;fa :icon="faPencilAlt" fw style="background: mistyrose"/&gt;&lt;/div&gt;
&lt;div&gt;&lt;fa :icon="faCog" fw style="background: mistyrose"/&gt;&lt;/div&gt;</code></pre>
    </div>
    <h5>Pulled Icons</h5>
    <div class="shadow-sm p-3 mb-3 rounded clearfix">
      <fa :icon="faQuoteLeft" pull="left" size="2x"/>
      <fa :icon="faQuoteRight" pull="right" size="2x"/>
      Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
    </div>
    <div class="shadow-sm p-3 mb-3 rounded bg-dark">
      <pre class="mb-0 text-white"><code>&lt;fa :icon="faQuoteLeft" pull="left" size="2x"/&gt;
&lt;fa :icon="faQuoteRight" pull="right" size="2x"/&gt;
Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</code></pre>
    </div>
    <h4>Power Transforms</h4>
    <h5>Rotating &amp; Flipping</h5>
    <div class="shadow-sm p-3 mb-3 rounded">
      <fa :icon="faMagic" size="4x" :rotate="90" style="background: mistyrose"/>
      <fa :icon="faMagic" size="4x" :rotate="180" style="background: mistyrose"/>
      <fa :icon="faMagic" size="4x" rotate="270" style="background: mistyrose"/>
      <fa :icon="faMagic" size="4x" rotate="30" style="background: mistyrose"/>
      <fa :icon="faMagic" size="4x" rotate="-30" style="background: mistyrose"/>
      <fa :icon="faMagic" size="4x" flip="vertical" style="background: mistyrose"/>
      <fa :icon="faMagic" size="4x" flip="horizontal" style="background: mistyrose"/>
      <fa :icon="faMagic" size="4x" flip="both" style="background: mistyrose"/>
      <fa :icon="faMagic" size="4x" flip="both" rotate="30" style="background: mistyrose"/>
    </div>
    <div class="shadow-sm p-3 mb-3 rounded bg-dark">
      <pre class="mb-0 text-white"><code>&lt;fa :icon="faMagic" size="4x" :rotate="90" style="background: mistyrose"/&gt;
&lt;fa :icon="faMagic" size="4x" :rotate="180" style="background: mistyrose"/&gt;
&lt;fa :icon="faMagic" size="4x" rotate="270" style="background: mistyrose"/&gt;
&lt;fa :icon="faMagic" size="4x" rotate="30" style="background: mistyrose"/&gt;
&lt;fa :icon="faMagic" size="4x" rotate="-30" style="background: mistyrose"/&gt;
&lt;fa :icon="faMagic" size="4x" flip="vertical" style="background: mistyrose"/&gt;
&lt;fa :icon="faMagic" size="4x" flip="horizontal" style="background: mistyrose"/&gt;
&lt;fa :icon="faMagic" size="4x" flip="both" style="background: mistyrose"/&gt;
&lt;fa :icon="faMagic" size="4x" flip="both" style="background: mistyrose"/&gt;</code></pre>
    </div>
  </div>
</template>

<script>
import Fa from '../src/fa.vue'
import {
  faFlag,
  faHome,
  faInfo,
  faBook,
  faPencilAlt,
  faCog,
  faQuoteLeft,
  faQuoteRight,
  faMagic
} from '@fortawesome/fontawesome-free-solid'

export default {
  components: {
    Fa
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
      faMagic
    }
  }
}
</script>
