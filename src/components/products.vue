<template>
  <div class="row">
    <div class="col-md-6 col-lg-4 mb-3" v-for="item of items" v-bind:key="item.id">
      <div class="card mx-auto" style="width: 18rem;">
        <img class="card-img-top" src="https://via.placeholder.com/300x169" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum, quia repudiandae quam doloremque ducimus.
          </p>
          <p class="card-text">R$: {{item.price}}</p>
          <router-link :to="`/produto/${item.id}`" class="btn btn-primary">Comprar <fw-i icon="plus"></fw-i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Products",
  data:()=>{
    return {
      
    }
  },
  props:[
    "items"
  ]
}
</script>

<style lang="scss">
  .products{
    padding-top: 15px;
  }
</style>




