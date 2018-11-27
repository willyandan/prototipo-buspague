<template>
  <div class="container">
    <h2>Produtos</h2>
    <hr>
    <input type="text" v-model="search" @keyup="getProducts()" class="form-control form-control-lg" placeholder="Pesquise por produtos">
    <br>

    <p>Exibindo {{items.length}} {{items.length>1?'produtos':'produto'}}</p>
    <products v-bind:items="items"></products>
  </div>
</template>
<script>
import Products from "../components/products";
const item_all = [
  {
    id:1,
    title:"Camisa",
    price:45.45
  },{
    id:2,
    title:"Calça",
    price:100
  },
  {
    id:3,
    title:"Celular",
    price:2000
  },
  {
    id:4,
    title:"Notebook",
    price:3000
  },
  {
    id:5,
    title:"Videogame",
    price:2500
  }
]
export default {
  name:"Produtos",
  components:{
    Products
  },
  data: ()=>{
    return{
      search:"",
      
      items: item_all
    }
  },
  methods:{
    getProducts: function(){
      this.items =  item_all.filter((val)=>{
        const name = val.title.toLowerCase()
        if(val.title.toLowerCase().includes(this.search)){
          return true
        }
        return false
      })
    }
  }
}
</script>
