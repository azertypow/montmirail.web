<template>
  <nav class="v-nav-top font-small">
    <div
        class="v-nav-top__list"
    >
      <a href="#presentation" :class="{'is-active': isIDActive('presentation')}">Présentation</a>
      <a href="#fruit"        :class="{'is-active': isIDActive('fruit')}"       >Fruits du verger</a>
      <a href="#produit"      :class="{'is-active': isIDActive('produit')}"     >Produits fruitiers</a>
      <a href="#natura"       :class="{'is-active': isIDActive('natura')}"      >Natura-Beef</a>
      <a href="#miel"         :class="{'is-active': isIDActive('miel')}"        >Miel</a>
<!--      <a href="#miel"         :class="{'is-active': isIDActive('kk')}"        >Biodiversité</a>-->
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useGlobalState} from "@/stores/globalState";

export default defineComponent({

  data() {
    return {
      globalState: useGlobalState(),
    }
  },

  methods: {
    isIDActive(idName: string): boolean {
      return idName === this.globalState.$state.viewIDActive
    },
  },


})</script>

<style lang="scss">
.v-nav-top {
  box-sizing: border-box;
  padding: var(--m-gutter-xl) var(--m-gutter-xl) 2rem;
  background: var(--m-color-light);

  a {
    color: inherit;
    text-decoration: none;
  }

  .v-nav-top__list {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    a {
      &.is-active {
        color: var(--m-color-secondary);
      }
    }
  }

  &.transition-intro-enter-active {
    transition: opacity .75s .25s ease-in-out, transform .75s .25s ease-in-out;
  }

  &.transition-intro-leave-active {
    transition: opacity .75s 0s ease-in-out, transform .75s 0s ease-in-out;
  }

  &.transition-intro-enter-from,
  &.transition-intro-leave-to {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
}
</style>
