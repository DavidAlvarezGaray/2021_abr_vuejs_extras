<template>
  <div class="blog">
    <Header />
    <Slider texto="Sección de Insignias" />
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="insignias >= 1">Insignias obtenidas</h1>

        <div
          id="compras"
          v-if="insignias >= 1"
          style="
            widht: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-box-shadow: 5px 5px 24px 3px rgba(0, 0, 0, 0.34);
            box-shadow: 5px 5px 24px 3px rgba(0, 0, 0, 0.34);
            border-radius: 1rem;
            padding: 1rem;
          "
        >
          <div style="display: flex; justify-content:center; align-items: center; position:relative;">
             <img style="position:absolute; height: 50%; width:50%" src="../assets/images/shopping-bag.svg" alt="">
            <vue-ellipse-progress
              :progress="progreso"
              color="#13962E"
              line="square"
              :legendValue="comprasEnNivel"
              :legend="false"
            >
          
            </vue-ellipse-progress>
          </div>
          <div style="margin: 2rem">
            <Insignia
              :insignias="insignias"
              :necesario="necesario"
              :comprashechas="comprashechas"
              :nivelactual="nivelactual"
              :textonivelactual="textonivelactual"
            />
          </div>
        </div>

        <div
          id="compras"
          v-if="insignias >= 1"
          style="
            margin-top: 4rem;
            widht: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            -webkit-box-shadow: 5px 5px 24px 3px rgba(0, 0, 0, 0.34);
            box-shadow: 5px 5px 24px 3px rgba(0, 0, 0, 0.34);
            border-radius: 1rem;
            padding: 1rem;">
             
          <div style="display: block"></div>
          <div style="margin: 2rem">
            <div class="articulos_list">
              <article class="article-item">
                <div style="display: flex; justify-content: space-between">
                  <div>
                    <h2 style="color:#13962E height:2rem">
                      ¡Sigue comprando y sube de nivel!
                    </h2>
                    <h2 style="font-weight: lighter">
                      Compra en la tienda de Tenis Deportivos de Vue JS para
                      seguir subiendo de nivel y obtener beneficios geniales.
                    </h2>
                  </div>
                  <div>
                    <Trofeo/>
                  </div>
                </div>

                <div class="clearfix"></div>
              </article>
            </div>
          </div>
        </div>

<div>
  <Badge :badges="badges"/>
</div>

      </section>
      <div class="clearfix"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Sidebar2 from "../components/Sidebar2.vue";

import Slider from "../components/Slider.vue";
import Footer from "../components/Footer.vue";

import Compra2 from "../components/Compras.vue";
import Insignia from "../components/Insignias.vue";
import Trofeo from "../components/trofeo_svg.vue";
import axios from "axios";
import Badge from "../components/badges.vue";
//importar la ruta global
import Global from "../Global";

export default {
  name: "InsigniaView",
  components: {
    Header,
    Footer,
    Slider,
    Insignia,
    Trofeo,
    Badge
  },
  mounted() {
    this.getInsignias();
    
  },
  data() {
    return {
      insignias: [],
      necesario: [],
      comprashechas: [],
      nivelactual: [],
      textonivelactual: [],
      comprasEnNivel: [],
      url: Global.url,
      badges: [],
    };
  },
  methods: {
    getInsignias() {
      axios.get(this.url + "insignias").then((res) => {
        if (res.data.status == "exitosa") {
          this.insignias = res.data.numeroInsignia;
          // console.log("INSIGNIAS");
          // console.log(this.insignias);
          this.necesarioParaNivel = 4;
          this.niveles = this.insignias % this.necesarioParaNivel;
          this.numeroDeNivelesAlcanzados = Math.trunc(
            this.insignias / this.necesarioParaNivel
          );
          // console.log(this.niveles);
          this.comprasRestantes = this.necesarioParaNivel - this.niveles;
          // console.log("Compras necesarias para subir de nivel: " + this.comprasRestantes);
          // console.log("Niveles alcanzados: " + this.numeroDeNivelesAlcanzados);
          this.progreso = (this.niveles * 100) / this.necesarioParaNivel;

          // Asignación de parámetros
          this.comprashechas = this.insignias;
          this.necesario = this.comprasRestantes;
          this.nivelactual = this.numeroDeNivelesAlcanzados;
          this.comprasEnNivel = this.niveles;
          //  this.comprasEnNivel = 4;
          console.log(this.nivelactual);
          this.nombreDeNivel(this.nivelactual);
        }
      });
      //this.nombreDeNivel(3);
    },

    nombreDeNivel(nivel){
      switch(nivel){
        case 0:
            console.log("Iniciando en la moda");
            return this.textonivelactual = "Compra por primera vez"
            break;
          case 1:
            console.log("Iniciando en la moda");
            return this.textonivelactual = "Iniciando en la moda"
            break;
              case 2:
            console.log("Comprador apasionado");
         return this.textonivelactual = "Comprador apasionado"
            break;
              case 3:
            console.log("Comprador experimentado");
         return this.textonivelactual = "Comprador experimentado"
            break;
              case 4:
            console.log("Comprador compulsivo");
           return this.textonivelactual = "Comprador compulsivo"
            break;
              case 5:
            console.log("Comprador experto");
             return this.textonivelactual = "Comprador experto"
            break;
              case 6:
            console.log("Cliente de honor");
             return this.textonivelactual = "Comprador de honor"
            break;
              case 7:
            console.log("Miembro destacado");
             return this.textonivelactual = "Miembro destacado"
            break;
            default:
              console.log("Realiza tu primera compra");
              return this.textonivelactual = "Todas las insignias desbloqueadas"
              break;
      }
    },

 

  },
};
</script>
