<template>
  <main class="v-content">
    <div
        class="v-content__content"
    >
      <div
          class="m-g-container"
      >
        <div
            class="m-g-8-12 m-remove-child-margin"
        >
          <div
              class="v-content__content__text-container"
              @scroll="scrollUpdate"
          >
            <section
                id="presentation"
                class="v-content__content__text-container__section"
            >
              <div
                  class="v-content__content__text-container__section__content"
              >
                <p>Installés à Montmirail près de Neuchâtel depuis 2011, notre exploitation est spécialisée dans la grande culture (maïs, soja, betteraves à sucre, millet, etc.). Soucieux de la qualité de nos produits, ainsi que de notre environnement notre production est labellisée Bourgeon. Pour entretenir la biodiversité de notre région, nous avons aussi des vergers, des ruches et un élevage bovin Natura-Beef. Pour ces produits nous privilégions la vente directe et les circuits courts, vous pourrez donc trouver chez nous des fruits de saison, du miel ainsi que de la viande.</p>
                <p>Pour plus d’informations ou pour passer commande directement, vous pouvez nous joindre par téléphone au 079 692 15 18, par mail farm@doncamillo.ch, nous serons ravis de vous renseigner plus en détail. Nous nous réjouissons de vous accueillir dans notre ferme.</p>
              </div>
            </section>

            <section
                id="fruit"
                class="v-content__content__text-container__section"
            >
              <div
                  class="v-content__content__text-container__section__content"
              >
                <p>Nos vergers produisent une grande variété de fruits. On y trouve des pommes (Golden Delicious, Topas, Rubinette, Idarette, Boskop, Gala), des poires (Kaiser Alexander, Conférence), des prunes (Felsina, Fellenberger) ainsi que des cerises. Pour prendre le relais de l’ancien verger, depuis 3 ans nous sommes en train d’en créer un nouveau avec des variétés de pommes complémentaires telles que X et Y. En plus du verger classique, nous avons tout autour de notre domaine des arbres fruitiers hautes-tiges composés d’espèces plus rares et rustiques qui viennent enrichir le paysage et compléter la diversité végétale de la ferme.</p>
              </div>
            </section>

            <section
                id="produit"
                class="v-content__content__text-container__section"
            >
              <div
                  class="v-content__content__text-container__section__content"
              >
                <p>En plus de nos fruits frais, nous proposons du jus de pommes et des fruits séchés (pommes, poires, prunes) qui permettent de déguster tout au long de l’année notre production estivale et automnale. Afin d’utiliser nos fruits murs invendus, nous nous sommes aussi mis à produire de l’eau-de-vie en petite quantité. Vous en trouverez cinq variétés différentes, Pomme Gala, Pomme Rubinette, Prune Berutge, Pruneau Fellenberg et Coing.</p>
              </div>
            </section>

            <section
                id="natura"
                class="v-content__content__text-container__section"
            >
              <div
                  class="v-content__content__text-container__section__content"
              >
                <p>Parce que nous aimons la viande et qu’il est important pour nous d’en connaître la provenance ainsi que de prodiguer un élevage respectueux des animaux, nos vaches sont élevées d’après les normes du label Natura-Beef. Natura-Beef est un label protégé et clairement définit (voir www.mutterkuh.ch). La viande provient de jeunes bêtes qui grandissent dans des élevages de vaches mères. Les veaux sont allaités et restent près de leurs mères jusqu’à l’âge de 8 à 10 mois. Leur nutrition se compose essentiellement de lait maternel et de fourrage grossier. Le troupeau pâture sur nos propres prés et passe l’hiver dans une stabulation libre. Les vaches et les veaux sont en compagnie de leur propre taureau.</p>
              </div>
            </section>

            <section
                id="miel"
                class="v-content__content__text-container__section"
            >
              <div
                  class="v-content__content__text-container__section__content"
              >
                <p>Les ruches récemment implantées dans notre ferme permettent la pollinisation de notre verger et contribuent à la sauvegarde des abeilles. De mai à septembre, nous récoltons le miel qui au travers de ses saveurs reflète les cycles et la diversité végétale de notre région.</p>
              </div>
            </section>
          </div>
        </div>
        <div
            class="m-g-4-12"
        >
          <div
              class="v-content__content__img-container"
          >
            <div
                :style="{
                  transform: `translate3D(0, ${this.globalState.$state.galleryScrollPosition}px, 0)`,
                }"
            >
              <img src="01.JPG" alt="image">
              <img src="02.JPG" alt="image">
              <img src="03.JPG" alt="image">
              <img src="04.JPG" alt="image">
              <img src="05.JPG" alt="image">
              <img src="06.JPG" alt="image">
              <img src="07.JPG" alt="image">
              <img src="08.JPG" alt="image">
              <img src="09.JPG" alt="image">
              <img src="10.JPG" alt="image">
              <img src="11.JPG" alt="image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import NavTop from "@/components/NavTop.vue"
import {useGlobalState} from "@/stores/globalState"

export default defineComponent({
  components: {NavTop},

  data() {
    return {
      globalState: useGlobalState()
    }
  },

  methods: {
    scrollUpdate(e: Event): void {
      if(!(e.target instanceof HTMLElement) ) return

      const elementsWithID = e.target.querySelectorAll("[id]")

      this.globalState.$state.viewIDActive = ""

      for(const element of elementsWithID) {
        if(
            element.getBoundingClientRect().top > 0
            && element.getBoundingClientRect().top < window.innerHeight / 2
        ) this.globalState.$state.viewIDActive = element.id
      }

      const contentImageContainer = document.querySelector('.v-content__content__img-container > div')

      if( contentImageContainer === null ) return

      const heightTotal = e.target.scrollHeight - e.target.getBoundingClientRect().height
      const scrollTop   = e.target.scrollTop
      const contentScrollPercent = Math.round( 100 / heightTotal * scrollTop )
      const totalScrollHeight =
          contentImageContainer.getBoundingClientRect().height
          - window.innerHeight
          + 40

      this.globalState.$state.galleryScrollPosition = totalScrollHeight / 100 * contentScrollPercent
    }
  }

})</script>

<style lang="scss">
.v-content {
  background-image: url("web_frame.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  padding: var(--m-gutter);
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .v-content__content {
    width: 100%;
    height: 100%;
    background: var(--m-color-light);

    > * {
      width: 100%;
      height: 100%;

      > * {
        height: 100%;
      }
    }
  }

  .v-content__content__img-container {
    overflow: hidden;
    height: 100%;
    position: relative;

    > div {
      padding-bottom: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
    }

    img {
      display: block;
      width: 100%;
      height: calc( (100vh - var(--m-gutter) * 2) / 3);
      object-fit: cover;
    }
  }

  .v-content__content__text-container {
    height: 100%;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */

    &::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }

    overflow: auto;
    -webkit-overflow-scrolling: touch;

    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }

  .v-content__content__text-container__section {
    box-sizing: border-box;
    min-height: calc( 100vh - var(--m-gutter) * 2 );
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left:   var(--m-gutter-xl);
    padding-right:  var(--m-gutter-xl);
    scroll-snap-align: start;

    &.is-active {
      border-bottom: solid 2px ;
    }
  }

  .v-content__content__text-container__section__content {
    p {
      margin: 0;
    }

    p + p {
      text-indent: 4rem;
    }
  }
}
</style>
