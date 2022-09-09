<template>
  <div class="v-intro">

    <div
        class="v-intro__bg"
    ></div>

    <div
        class="v-intro__card"
        @click="globalState.isOpen = true"
    >
      <div
          class="v-intro__card__content"
      >
        <div
            class="v-intro__card__content__title m-remove-child-margin"
        >
          <h1>
            Martin+Angela Ott
            <br>Montmirail 2
            <br>CH-2075 Thielle
          </h1>
        </div>
        <div
            class="v-intro__card__content__text m-remove-child-margin"
        >
          <p>
            PRODUITS DE LA FERME DE MONTMIRAIL
            <br>VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useGlobalState} from "../stores/globalState"

export default defineComponent({
  // props: {
  //   name: String,
  //   msg: {type: String, required: true}
  // },

  data() {
    return {
      globalState: useGlobalState()
    }
  },

})</script>

<style lang="scss">
.v-intro {
  position: relative;
  width: 100%;
  height: 100%;

  .v-intro__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('01.JPG');
    background-size: cover;
    background-position: center;
  }

  .v-intro__card {
    background-image: url("web_frame.jpg");
    background-size: cover;
    background-position: center;
    position: absolute;
    padding: var(--m-gutter);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    cursor: pointer;
  }

  .v-intro__card__content {
    padding: var(--m-gutter);
    text-align: center;
    background: var(--m-color-light);
  }

  .v-intro__card__content__text {
    margin-top: 4rem;

    p {
      font-weight: 600;
      white-space: nowrap;
    }
  }
}
</style>
