<template>
  <div :id="nome" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(i,index) of images" 
        v-bind:key="index" 
        :data-target="`#${nome}`" 
        :data-slide-to="index" 
        :class="i==0?'active':' '"></li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(i,index) of images" v-bind:key="index" :class="classSlide(index)">
        <img class="d-block w-100" :src="i">
      </div>
    </div>
    <a class="carousel-control-prev" :href="`#${nome}`" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
    <a class="carousel-control-next" :href="`#${nome}`" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </a>
  </div>
</template>

<script>
export default {
  name:"Carrousel",
  props:[
    "nome",
    "images"
  ],
  methods:{
    classSlide: function(id){
      return{
        "carousel-item":true,
        active: id==0
      }
    }
  }
}
</script>

