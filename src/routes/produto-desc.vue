<template>
  
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-8 border-right">
              <carrousel nome="ola" :images="slides"></carrousel>
          </div>
          <div class="col-md-4">
            <h4 class="font-weight-bold">Nome do produto</h4>
            <p>Categoria</p>
            <p>
              <fw-i v-for="i of [0,1,2,3,4]" v-bind:key="i.id" icon="star"></fw-i>
            </p>
            <h2 class="font-weight-light">R$ 100,00</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis sapiente, eveniet dolore aliquam sit reprehenderit, odit quae vitae repudiandae illum quam quas! Magnam illo id culpa at quae repellat!
            </p>
            <p>
              <router-link to="/carrinho" class="btn btn-primary">
                Adicionar ao carrinho
                <fw-i icon="shopping-basket"></fw-i>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <h1>Sugestões</h1>
    <hr>
    <products :items="items"></products>
  </div>
</template>

<script>
import Carrousel from "../components/Carrousel";
import Products from "../components/products";
export default {
  name:"ProductDesc",
  data:()=>{
    return{
      slides:[
        "https://via.placeholder.com/800x400.png?text=Imagem%201",
        "https://via.placeholder.com/800x400.png?text=Imagem%202",
        "https://via.placeholder.com/800x400.png?text=Imagem%203"
      ],
      items:[
        {
          id:1,
          title:"Sugestão 1",
          price:450.00
        },
        {
          id:2,
          title:"Sugestão 2",
          price:900
        },
        {
          id:3,
          title:"Sugestão 3",
          price:45.90
        }

      ]
    }
  },
  components:{
    Carrousel,
    Products
  }
}
</script>

