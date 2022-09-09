<template>
  <RouterView />
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  props: {
    name: String,
    msg: {type: String, required: true}
  },

})</script>

<style lang="scss">
</style>
