<template>
  <div class="articulos_list">
    <article class="article-item">
      <div style="display: flex; justify-content: space-between">
        <div>
          <h2 style="color:#13962E height:2rem">NIVEL {{nivelactual}} | {{textonivelactual}}</h2>
          <h2 style="font-weight:lighter">Gracias por comprar con nosotros, hasta la fecha haz hecho {{comprashechas}} compras de calzado deportivo. Realiza {{necesario}} compras más para subir de nivel.</h2>
        </div>
      </div>

      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>

//importar la ruta global
import Global from "../Global";
import SweetAlert from "sweetalert";
import axios from "axios";
export default {
  name: "Insignias",
  props: ["insignias", "necesario", "comprashechas", "nivelactual", "textonivelactual"],
  
  data() {
    return {
      url: Global.url,
      
    };
  },
  
  methods: {
    
  },
};
</script>