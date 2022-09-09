<template>
  <nav class="v-nav-top">
    <div
        class="v-nav-top__list"
    >
      <a href="#presentation" :class="{'is-active': isIDActive('presentation')}">Présentation</a>
      <a href="#fruit"        :class="{'is-active': isIDActive('fruit')}"       >Fruits du verger</a>
      <a href="#produit"      :class="{'is-active': isIDActive('produit')}"     >Produits fruitiers</a>
      <a href="#natura"       :class="{'is-active': isIDActive('natura')}"      >Natura-Beef</a>
      <a href="#miel"         :class="{'is-active': isIDActive('miel')}"        >Miel</a>
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
  font-size: 1.5rem;
  background: var(--m-color-light);

  a {
    color: inherit;
    text-decoration: none;
  }
}

.v-nav-top__list {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  a.is-active {
    text-decoration: underline;
  }
}
</style>
