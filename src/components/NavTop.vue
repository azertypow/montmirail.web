<template>
  <nav class="v-nav-top">
    <div
        class="v-nav-top__list"
    >
      <a href="#presentation" >Présentation</a>
      <a href="#fruit"        >Fruits du verger</a>
      <a href="#produit"      >Produits fruitiers</a>
      <a href="#natura"       >Natura-Beef</a>
      <a href="#miel"         >Miel</a>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({



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
}
</style>
