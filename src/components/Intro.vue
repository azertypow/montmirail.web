<template>
  <div class="v-intro">

    <div
        class="v-intro__bg"
    ></div>

    <div
        class="v-intro__card"
        @click="cardClicked"
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
          <p class="font-strong font-small">
            PRODUITS DE LA FERME DE MONTMIRAIL
            <br>VENTE DIRECTE
            <br>SUR RENDEZ-VOUS 079 692 15 18
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import {useGlobalState} from "@/stores/globalState"

export default defineComponent({

  data() {
    return {
      globalState: useGlobalState()
    }
  },

  methods: {
    cardClicked() {
      this.globalState.isOpen                 = true
      this.globalState.galleryScrollPosition  = 0
      this.globalState.viewIDActive           = "presentation"
      window.history.pushState({}, '', '/')
    }
  }

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
    background-image: url('/09.jpg');
    background-size: cover;
    background-position: center;
  }

  .v-intro__card {
    background-image: url("/web_frame.jpg");
    background-size: auto 130%;
    background-position: center;
    position: absolute;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: bottom right;
    user-select: none;
    cursor: pointer;
    height: 275px;
    width: 455px;
    box-sizing: border-box;
  }

  .v-intro__card__content {
    padding: 20px 50px;
    text-align: center;
    background: var(--m-color-light);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .v-intro__card__content__text {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;

    p {
      white-space: nowrap;
      font-size: 15px;
      line-height: 16px;
    }
  }

  .v-intro__card__content__title {
    white-space: nowrap;
    position: absolute;
    top: calc( 20px / 2 );
    left: 0;
    width: 100%;

    h1 {
      line-height: 40px;
      font-size: 38px;
    }
  }

  &.transition-intro-enter-active,
  &.transition-intro-leave-active {
    transition: opacity .5s .5s ease-in-out;

    .v-intro__card {
      transition: width .5s ease-in-out, height .5s ease-in-out;
    }

    .v-intro__card__content__text,
    .v-intro__card__content__title {
      transition: transform .25s ease-in-out, opacity .25s ease-in-out;
    }
  }

  &.transition-intro-enter-from ,
  &.transition-intro-leave-to {
    opacity: 0;

    .v-intro__card {
      width: 100%;
      height: 100%;
    }

    .v-intro__card__content__text {
      opacity: 0;
      transform: translate3d(0, -25px, 0);
    }

    .v-intro__card__content__title {
      opacity: 0;
      transform: translate3d(0, 25px, 0);
    }
  }
}
</style>
