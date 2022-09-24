<template>
  <div class="v-view-home">

    <transition name="transition-intro">
      <div
          class="v-view-home__tagline-top font-strong"
          v-if="globalState.isOpen"
          @click="goToIntro()"
      >PRODUITS DE LA FERME DE MONTMIRAIL</div>
    </transition>

    <transition name="transition-intro">
      <nav-top
          v-if="globalState.isOpen"
      ></nav-top>
    </transition>

    <transition name="transition-intro">
      <content
          v-if="globalState.isOpen"
      ></content>
    </transition>

    <transition name="transition-intro">
      <intro
          v-if="! globalState.isOpen"
      ></intro>
    </transition>

    <transition name="transition-intro">
      <div
          class="v-view-home__tagline-bottom font-small font-strong"
          v-if="globalState.isOpen"
          @click="goToIntro"
      >
        <img src="./../assets/logo_bio_suisse.svg" class="v-view-home__tagline-bottom__logo" alt="logo">
        <div>VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18</div>
      </div>
    </transition>
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

  methods: {
    goToIntro() {
      globalState.isOpen = false
      window.history.pushState({}, '', '/')
    }
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

    .v-view-home__tagline-bottom__logo {
      display: block;
      height: 5rem;
      width: auto;
      position: absolute;
      right: 0;
      bottom: var(--m-gutter);
    }
  }

  .v-nav-top {
    position: fixed;
    z-index: 100;
    top: var(--m-gutter);
    left: var(--m-gutter);
    width: calc( (100% - var(--m-gutter) * 2) / 12 * 8);
  }
}

.transition-intro-enter-active {
  &.v-view-home__tagline-top,
  &.v-view-home__tagline-bottom {
    transition: opacity .5s .75s ease-in-out, transform .5s .75s ease-in-out;
  }
}

.transition-intro-leave-active {
  &.v-view-home__tagline-top,
  &.v-view-home__tagline-bottom {
    transition: opacity .5s 0s ease-in-out, transform .5s 0s ease-in-out;
  }
}

.transition-intro-enter-from,
.transition-intro-leave-to {
  &.v-view-home__tagline-top {
    opacity: 0;
    transform: translate3d(-50%, 20px, 0);
  }

  &.v-view-home__tagline-bottom {
    opacity: 0;
    transform: translate3d(-50%, -20px, 0);
  }
}
</style>
