<template>
  <div class="articulos_list">
    <article
      class="article-item"
      v-for="badge in badges"
      :key="badge"
    >
      <div class="image-wrap">
        <img
          :src="{badge}"
        />
      </div>

    </article>
  </div>
</template>

<script>

//importar la ruta global
import Global from "../Global";

export default {
  name: "BadgesImg",
  props: ["badges"],
  data(){
      return{
          url:Global.url
      }
  }
};
</script>