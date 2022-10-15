import{d as D,a as E,_ as x,o as n,c as r,b as t,e as a,n as d,f as T,g as $,r as h,h as m,w as p,T as v,i as g,j as b}from"./index.7341f6e5.js";const f=D("globalState",{state(){return{isOpen:!1,galleryScrollPosition:0,viewIDActive:"presentation"}}}),j=E({data(){return{globalState:f()}},methods:{cardClicked(){this.globalState.isOpen=!0,this.globalState.galleryScrollPosition=0,this.globalState.viewIDActive="presentation",window.history.pushState({},"","/")}}});const C={class:"v-intro"},q=t("div",{class:"v-intro__bg"},null,-1),A=t("div",{class:"v-intro__card__content"},[t("div",{class:"v-intro__card__content__title m-remove-child-margin"},[t("h1",null,[a(" Martin+Angela Ott "),t("br"),a("Montmirail 2 "),t("br"),a("CH-2075 Thielle ")])]),t("div",{class:"v-intro__card__content__text m-remove-child-margin"},[t("p",{class:"font-strong font-small"},[a(" PRODUITS BIO DE LA FERME DE MONTMIRAIL "),t("br"),a("FRUITS DE SAISON, VIANDE, MIEL ET + "),t("br"),a("VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18 ")])])],-1),N=[A];function w(e,s,i,l,c,u){return n(),r("div",C,[q,t("div",{class:"v-intro__card",onClick:s[0]||(s[0]=(...o)=>e.cardClicked&&e.cardClicked(...o))},N)])}const R=x(j,[["render",w]]),k=E({data(){return{globalState:f()}},methods:{isIDActive(e){return e===this.globalState.$state.viewIDActive}}});const B={class:"v-nav-top font-small"},O={class:"v-nav-top__list"};function P(e,s,i,l,c,u){return n(),r("nav",B,[t("div",O,[t("a",{href:"#presentation",class:d({"is-active":e.isIDActive("presentation")})},"Pr\xE9sentation",2),t("a",{href:"#fruit",class:d({"is-active":e.isIDActive("fruit")})},"Fruits du verger",2),t("a",{href:"#produit",class:d({"is-active":e.isIDActive("produit")})},"Produits fruitiers",2),t("a",{href:"#natura",class:d({"is-active":e.isIDActive("natura")})},"Natura-Beef",2),t("a",{href:"#miel",class:d({"is-active":e.isIDActive("miel")})},"Miel",2)])])}const I=x(k,[["render",P]]),M=E({components:{NavTop:I},data(){return{globalState:f()}},methods:{scrollUpdate(e){if(!(e.target instanceof HTMLElement))return;const s=e.target.querySelectorAll("[id]");for(const _ of s)_.getBoundingClientRect().top>0&&_.getBoundingClientRect().top<window.innerHeight/2&&(this.globalState.$state.viewIDActive=_.id);const i=document.querySelector(".v-content__content__img-container > div");if(i===null)return;const l=e.target.scrollHeight-e.target.getBoundingClientRect().height,c=e.target.scrollTop,u=Math.round(100/l*c),o=i.getBoundingClientRect().height-window.innerHeight+40;this.globalState.$state.galleryScrollPosition=o/100*u}}}),L="/assets/fleche.49a73bc8.svg",V="/_3.jpg",U="/_2.jpg",H="/_1.jpg",F="/00.jpg",z="/01.jpg",G="/02.jpg",Z="/03.jpg",W="/04.jpg",J="/05.jpg",K="/06.jpg",Q="/07.jpg",X="/08.jpg",Y="/09.jpg",ee="/10.jpg",te="/11.jpg";const se={class:"v-content"},ne={class:"v-content__content"},oe={class:"m-g-container"},ie={class:"m-g-8-12 m-remove-child-margin"},ae=$('<section id="presentation" class="v-content__content__text-container__section"><div class="v-content__content__text-container__section__content"><p> Install\xE9s \xE0 Montmirail pr\xE8s de Neuch\xE2tel depuis 2011, nous tenons une exploitation sp\xE9cialis\xE9e dans les grandes cultures (ma\xEFs, soja, tournesol, bl\xE9 d\u2019automne). Attentifs \xE0 la qualit\xE9 des produits ainsi qu\u2019\xE0 l\u2019environnement, notre production est labellis\xE9e Bourgeon de Bio Suisse. Pour entretenir la biodiversit\xE9 de la r\xE9gion, nous avons aussi des vergers, des ruches et un \xE9levage bovin Natura-Beef. Pour ces produits, nous privil\xE9gions la vente directe et les circuits courts, vous pourrez donc trouver chez nous des <em>fruits de saison</em>, du <em>miel</em> ainsi que de la <em>viande</em>. Cette ann\xE9e, nous proposons en plus diff\xE9rentes vari\xE9t\xE9s de <em>courges</em> ainsi que des <em>noix</em>. </p><p> Pour plus d\u2019informations ou pour passer commande directement, vous pouvez nous joindre au 079 692 15 18 ou nous \xE9crire \xE0 <i>farm@doncamillo.ch</i>. Nous serons ravis de vous renseigner plus en d\xE9tail et de vous accueillir \xE0 la ferme. </p></div></section><section id="fruit" class="v-content__content__text-container__section"><div class="v-content__content__text-container__section__content"><p> Nos vergers produisent une grande vari\xE9t\xE9 de fruits : les pommes Rubinette, Idared, Boskoop et Gala ainsi que les poires Beurr\xE9 Bosc et Conf\xE9rence. Pour prendre le relais de l\u2019ancien verger, nous en avons cr\xE9e depuis quelques ann\xE9es un nouveau avec les vari\xE9t\xE9s de pommes qui ont fait leurs preuves, compl\xE9t\xE9 par la vari\xE9t\xE9 Topaz. </p><p> En plus du verger classique, nous avons sur notre domaine un verger haute-tige compos\xE9 essentiellement de vari\xE9t\xE9s anciennes et robustes qui enrichissent le paysage et compl\xE8tent la diversit\xE9 v\xE9g\xE9tale de la ferme. Outre les pommiers et les poiriers, on y trouve des pruniers et des mirabelliers, par exemple. </p></div></section><section id="produit" class="v-content__content__text-container__section"><div class="v-content__content__text-container__section__content"><p> En plus des fruits frais, nous proposons du <em>jus de pomme</em> et <em>des fruits s\xE9ch\xE9s</em> qui permettent de d\xE9guster tout au long de l\u2019ann\xE9e notre production estivale et automnale. Afin d\u2019utiliser les fruits m\xFBrs invendus, nous nous sommes aussi mis \xE0 produire de <em>l\u2019eau-de-vie</em> en petite quantit\xE9, disponible actuellement en trois sortes diff\xE9rentes : Pomme Rubinette, Pruneau Fellenberg et Poire. </p></div></section><section id="natura" class="v-content__content__text-container__section"><div class="v-content__content__text-container__section__content"><p> Parce que nous aimons la viande et qu\u2019il est important pour nous d\u2019en conna\xEEtre la provenance ainsi que de prodiguer un \xE9levage respectueux des animaux, nos vaches sont \xE9lev\xE9es d\u2019apr\xE8s les normes du label Natura-Beef (voir mutterkuh.ch ((hyperlien))). La viande provient de jeunes b\xEAtes qui grandissent dans des \xE9levages de vaches m\xE8res. Les veaux sont allait\xE9s et restent pr\xE8s de leurs m\xE8res jusqu\u2019\xE0 l\u2019\xE2ge de 10 mois. Leur nutrition se compose essentiellement de lait maternel et de fourrages grossiers. Le troupeau p\xE2ture sur nos propres pr\xE9s et passe l\u2019hiver en stabulation libre. Les vaches et les veaux sont en compagnie de leur taureau. </p><div style="margin-top:1rem;"><a href="./ferme_montmirail_naturabeef.pdf" target="_blank" class="m-link-with-img"><span>La liste des prix est par ici </span><img src="'+L+'" alt="fleche"></a></div></div></section><section id="miel" class="v-content__content__text-container__section"><div class="v-content__content__text-container__section__content"><p> Depuis 2018, Angela s\u2019occupe \xE9galement de quelques colonies d\u2019abeilles qui contribuent \xE0 la pollinisation des arbres fruitiers et d\u2019autres cultures en fleurs aux alentours de notre ferme. Nous r\xE9coltons le miel de printemps de fin mai \xE0 d\xE9but juin et le miel d\u2019\xE9t\xE9 vers la mi-juillet. \xC0 travers ses saveurs, le miel refl\xE8te l\u2019offre florale du moment (et la m\xE9t\xE9o) dans toute sa diversit\xE9. </p></div></section>',5),re=[ae],le={class:"m-g-4-12"},ce={class:"v-content__content__img-container"},ue=$('<img src="'+V+'" alt="image"><img src="'+U+'" alt="image"><img src="'+H+'" alt="image"><img src="'+F+'" alt="image"><img src="'+z+'" alt="image"><img src="'+G+'" alt="image"><img src="'+Z+'" alt="image"><img src="'+W+'" alt="image"><img src="'+J+'" alt="image"><img src="'+K+'" alt="image"><img src="'+Q+'" alt="image"><img src="'+X+'" alt="image"><img src="'+Y+'" alt="image"><img src="'+ee+'" alt="image"><img src="'+te+'" alt="image">',15),_e=[ue];function de(e,s,i,l,c,u){return n(),r("main",se,[t("div",ne,[t("div",oe,[t("div",ie,[t("div",{class:"v-content__content__text-container",onScroll:s[0]||(s[0]=(...o)=>e.scrollUpdate&&e.scrollUpdate(...o))},re,32)]),t("div",le,[t("div",ce,[t("div",{style:T({transform:`translate3D(0, ${e.globalState.$state.galleryScrollPosition}px, 0)`})},_e,4)])])])])])}const me=x(M,[["render",de]]),pe=E({components:{NavTop:I,Content:me,Intro:R},data(){return{globalState:f()}},methods:{goToIntro(){this.globalState.$state.isOpen=!1,window.history.pushState({},"","/")}}}),ve="/assets/logo_bio_suisse.ed7f69d1.svg";const ge={class:"v-view-home"},Ee=t("img",{src:ve,class:"v-view-home__tagline-bottom__logo",alt:"logo"},null,-1),xe=t("div",null,"VENTE DIRECTE SUR RENDEZ-VOUS 079 692 15 18",-1),fe=[Ee,xe];function he(e,s,i,l,c,u){const o=h("nav-top"),_=h("content"),y=h("intro");return n(),r("div",ge,[m(v,{name:"transition-intro"},{default:p(()=>[e.globalState.isOpen?(n(),r("div",{key:0,class:"v-view-home__tagline-top font-strong",onClick:s[0]||(s[0]=S=>e.goToIntro())},"PRODUITS DE LA FERME DE MONTMIRAIL")):g("",!0)]),_:1}),m(v,{name:"transition-intro"},{default:p(()=>[e.globalState.isOpen?(n(),b(o,{key:0})):g("",!0)]),_:1}),m(v,{name:"transition-intro"},{default:p(()=>[e.globalState.isOpen?(n(),b(_,{key:0})):g("",!0)]),_:1}),m(v,{name:"transition-intro"},{default:p(()=>[e.globalState.isOpen?g("",!0):(n(),b(y,{key:0}))]),_:1}),m(v,{name:"transition-intro"},{default:p(()=>[e.globalState.isOpen?(n(),r("div",{key:0,class:"v-view-home__tagline-bottom font-small font-strong",onClick:s[1]||(s[1]=(...S)=>e.goToIntro&&e.goToIntro(...S))},fe)):g("",!0)]),_:1})])}const Se=x(pe,[["render",he]]);export{Se as default};
