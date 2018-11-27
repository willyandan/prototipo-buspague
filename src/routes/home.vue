<template>
  <div class="container">
    <h2>Destques</h2>
    <hr>
    <products v-bind:items="items"></products>
  </div>
</template>

<script>
import Products from "../components/products";
export default {
  
  name:"Home",
  components:{
    Products
  },
  data: ()=>{
    return{
      items:[
        {
          id:1,
          title:"Produto 1",
          price:45.45
        },
        {
          id:2,
          title:"Produto 2",
          price:100
        },
        {
          id:3,
          title:"Produto 3",
          price:200
        }
      ]
    }
  },
}
</script>
