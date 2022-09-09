<template>
  <div class="v-view-home">

    <div
        class="v-view-home__tagline-top font-strong"
        v-if="globalState.isOpen"
        @click="globalState.isOpen = false"
    >PRODUITS DE LA FERME DE MONTMIRAIL</div>

    <nav-top
        v-if="globalState.isOpen"
    ></nav-top>

    <content
        v-if="globalState.isOpen"
    ></content>
    <intro
        v-else
    ></intro>

    <div
        class="v-view-home__tagline-bottom font-small font-strong"
        v-if="globalState.isOpen"
        @click="globalState.isOpen = false"
    >VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useGlobalState} from "@/stores/globalState"
import Intro from "@/components/Intro.vue"
import Content from "@/components/content.vue"
import NavTop from "@/components/NavTop.vue"

export default defineComponent({
  components: {NavTop, Content, Intro},
  data() {
    return {
      globalState: useGlobalState()
    }
  },

  computed: {
  },

})</script>

<style lang="scss">
.v-view-home {
  position: relative;
  width: 100%;
  height: 100%;

  .v-view-home__tagline-top,
  .v-view-home__tagline-bottom {
    position: fixed;
    margin: 0;
    white-space: nowrap;
    left: calc( (((100% -  var(--m-gutter) * 2) / 12 * 8) + var(--m-gutter)) / 2);
    z-index: 1000;
    cursor: pointer;
    transform: translate(-50%, 0);

    font-size: 1.4rem;
    line-height: 1.5rem;
  }

  .v-view-home__tagline-top {
    top: calc( var(--m-gutter) * 2);
    transform-origin: center center;
  }

  .v-view-home__tagline-bottom {
    bottom: var(--m-gutter);
    width: calc((100% - var(--m-gutter) * 4) / 12 * 8);
    background: var(--m-color-light);
    text-align: center;
    padding-top: var(--m-gutter);
    padding-bottom: var(--m-gutter);
  }

  .v-nav-top {
    position: fixed;
    z-index: 100;
    top: var(--m-gutter);
    left: var(--m-gutter);
    width: calc( (100% - var(--m-gutter) * 2) / 12 * 8);
  }
}
</style>
