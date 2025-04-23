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
                  ref="textContainer"
                  class="v-content__content__text-container__section__content"
              >
                <p>
                  Installés à Montmirail près de Neuchâtel depuis 2011, nous tenons une exploitation spécialisée dans
                  les grandes cultures (maïs, soja, tournesol, blé d’automne). Attentifs à la qualité des produits ainsi
                  qu’à l’environnement, notre production est labellisée Bourgeon de Bio Suisse. Pour entretenir la
                  biodiversité de la région, nous avons aussi des vergers, des ruches et un élevage bovin Natura-Beef.
                  Pour ces produits, nous privilégions la vente directe et les circuits courts, vous pourrez donc
                  trouver chez nous des <em>fruits de saison</em>, du <em>miel</em> ainsi que de la <em>viande</em>.
                  Cette année, nous proposons en plus différentes
                  variétés de <em>courges</em> ainsi que des <em>noix</em>.
                </p>
                <p>
                  Pour plus d’informations ou pour passer commande directement, vous pouvez nous joindre au 079 692 15
                  18 ou nous écrire à <i>farm@doncamillo.ch</i>. Nous serons ravis de vous renseigner plus en
                  détail et de vous accueillir à la ferme.
                </p>
              </div>
            </section>

            <section
                id="fruit"
                class="v-content__content__text-container__section"
            >
              <div
                  ref="textContainer"
                  class="v-content__content__text-container__section__content"
              >
                <p>
                  Nos vergers produisent une grande variété de fruits : les pommes Rubinette, Idared, Boskoop et Gala
                  ainsi que les poires Beurré Bosc et Conférence. Pour prendre le relais de l’ancien verger, nous en
                  avons crée depuis quelques années un nouveau avec les variétés de pommes qui ont fait leurs preuves,
                  complété par la variété Topaz.
                </p>
                <p>
                  En plus du verger classique, nous avons sur notre domaine un verger haute-tige composé
                  essentiellement de variétés anciennes et robustes qui enrichissent le paysage et complètent la
                  diversité végétale de la ferme. Outre les pommiers et les poiriers, on y trouve des pruniers et des
                  mirabelliers, par exemple.
                </p>
              </div>
            </section>

            <section
                id="produit"
                class="v-content__content__text-container__section"
            >
              <div
                  ref="textContainer"
                  class="v-content__content__text-container__section__content"
              >
                <p>
                  En plus des fruits frais, nous proposons du <em>jus de pomme</em> et <em>des fruits séchés</em> qui
                  permettent de déguster tout au long de l’année notre production estivale et automnale. Afin d’utiliser les fruits
                  mûrs invendus, nous nous sommes aussi mis à produire de <em>l’eau-de-vie</em> en petite quantité,
                  disponible actuellement en trois sortes différentes : Pomme Rubinette, Pruneau Fellenberg et Poire.
                </p>
              </div>
            </section>

            <section
                id="natura"
                class="v-content__content__text-container__section"
            >
              <div
                  ref="textContainer"
                  class="v-content__content__text-container__section__content"
              >
                <p>
                  Parce que nous aimons la viande et qu’il est important pour nous d’en connaître la provenance ainsi
                  que de prodiguer un élevage respectueux des animaux, nos vaches sont élevées d’après les normes du
                  label Natura-Beef (voir <a href="https://www.mutterkuh.ch/fr/natura-beef" target="_blank">mutterkuh.ch</a>).
                  La viande provient de jeunes bêtes qui grandissent dans des élevages de vaches mères. Les veaux sont
                  allaités et restent près de leurs mères jusqu’à l’âge de 10 mois. Leur nutrition se compose essentiellement
                  de lait maternel et de fourrages grossiers. Le&nbsp;troupeau pâture sur nos propres prés et passe l’hiver en stabulation libre.
                  Les vaches et les veaux sont en compagnie de leur taureau.
                </p>
                <div style="margin-top: 1rem" ><a href="/ferme_montmirail_naturabeef_2025.pdf" target="_blank" class="m-link-with-img"><span>La liste des prix est par ici </span><img src="../assets/fleche.svg" alt="fleche"></a></div>
              </div>
            </section>

            <section
                id="miel"
                class="v-content__content__text-container__section"
            >
              <div
                  ref="textContainer"
                  class="v-content__content__text-container__section__content"
              >
                <p>
                  Depuis 2018, Angela s’occupe également de quelques colonies d’abeilles qui contribuent à la pollinisation des arbres fruitiers et d’autres cultures en fleurs aux alentours de notre ferme. Nous récoltons le miel de printemps de fin mai à début juin et le miel d’été vers la mi-juillet. À travers ses saveurs, le miel reflète l’offre florale du moment (et la météo) dans toute sa diversité.
                </p>
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
                  transform: `translate3D(0, ${globalState.$state.galleryScrollPosition}px, 0)`,
                }"
            >
              <img src="/_1.jpg" alt="image">
              <img src="/_2.jpg" alt="image">
              <img src="/_3.jpg" alt="image">

              <img src="/02.jpg" alt="image">
              <img src="/01.jpg" alt="image">
              <img src="/00.jpg" alt="image">

              <img src="/05.jpg" alt="image">
              <img src="/04.jpg" alt="image">
              <img src="/03.jpg" alt="image">

              <img src="/08.jpg" alt="image">
              <img src="/07.jpg" alt="image">
              <img src="/06.jpg" alt="image">

              <img src="/09.jpg" alt="image">
              <img src="/10.jpg" alt="image">
              <img src="/11.jpg" alt="image">
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

  mounted() {
    this.$nextTick(() => {

      const runSetFontSize = async () => {

        requestAnimationFrame(() => {
          if (!(this.$el instanceof HTMLElement)) return

          let textContentIsBiggerThanParent = false
          const textViewHeight = this.$el.querySelector('.v-content__content__text-container')?.getBoundingClientRect().height || null

          if (textViewHeight == null) return

          this.$el.querySelectorAll('.v-content__content__text-container__section').forEach((element: any) => {
            if (!(element instanceof HTMLElement)) return
            if (element.getBoundingClientRect().height > textViewHeight) textContentIsBiggerThanParent = true
          })

          if (!textContentIsBiggerThanParent) return

          const pElement = this.$el.querySelectorAll('.v-content__content__text-container__section__content *')

          if (textContentIsBiggerThanParent) for (const p of pElement) {
            if (!(p instanceof HTMLElement)) return
            p.style.lineHeight = '1.3em'
            p.style.fontSize = parseFloat(window.getComputedStyle(p).fontSize) - .01 + 'px'
            runSetFontSize()
          } else {}
          debugger
        })
      }
      runSetFontSize().then(() => {
        console.log('ended')
      })
    })
  },

  methods: {
    scrollUpdate(e: Event): void {
      if(!(e.target instanceof HTMLElement) ) return

      const elementsWithID = e.target.querySelectorAll("[id]")

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
  background-image: url("/web_frame.jpeg");
  background-size: auto 100%;
  background-position: center;
  position: fixed;
  padding: var(--m-gutter);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
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
    justify-content: flex-start;
    padding-left:   var(--m-gutter-xl);
    padding-right:  var(--m-gutter-xl);
    scroll-snap-align: start;
    padding-top: 10rem;
    padding-bottom: 6rem;

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

  &.transition-intro-enter-active,
  &.transition-intro-leave-active {
    //transition: opacity .5s .5s ease-in-out;
  }

  &.transition-intro-enter-from,
  &.transition-intro-leave-to {
    //opacity: 0;
  }
}
</style>
