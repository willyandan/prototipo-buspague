<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr class="bg-primary">
          <td>Produto</td>
          <td>Quantidade</td>
          <td>Preço</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i of items" :key="i">
          <td>{{i.nome}}</td>
          <td>{{i.qtd}}</td>
          <td class="text-right">{{i.preco_unit * i.qtd}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-right">
            Total: {{total}}
          </td>
        </tr>
      </tfoot>
    </table>
    <p class="text-right">
      <router-link tag="button" to="/checkout" class="btn btn-primary btn-lg">Finalizar compra</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name:"Carrinho",
  data:()=>{
    return{
      items:[
        {
          nome:"Produto X",
          qtd:1,
          preco_unit: 10.55
        },
        {
          nome:"Produto Y",
          qtd:1,
          preco_unit: 150
        },{
          nome:"Produto Z",
          qtd:1,
          preco_unit: 45
        }
      ]
    }
  },
  computed:{
    total:function(){
      return this.items.reduce((val, i)=>{
        val += i.preco_unit * i.qtd
        return val
      },0)
    }
  }
}
</script>

<style lang="scss">
  thead td{
    color:white;
  }
</style>

