<template>
  <div class="container">
    <h2>Tabela de produtos</h2>
    <p class="text-right">
      <router-link to="/fornecedor/produto" class="btn btn-primary"><fw-i icon="plus"></fw-i></router-link> &nbsp;
    </p>
    <hr>
    <table class="table">
      <thead class="bg-primary">
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Avaliações</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Produto 1</td>
          <td>R$ 20,00</td>
          <td>500</td>
          <td>
            <fw-i icon="star" v-for="i in [1,1,1,1,1]" :key="i"></fw-i>
          </td>
          <td>
            <router-link to="/fornecedor/produto" class="btn btn-warning"><fw-i icon="pencil-alt"></fw-i> Editar</router-link> &nbsp;
            <a href="#" class="btn btn-danger"><fw-i icon="trash"></fw-i> Excluir</a>
          </td>
        </tr>
        
        <tr>
          <td>Produto 2</td>
          <td>R$ 50,00</td>
          <td>20</td>
          <td>
            <fw-i icon="star" v-for="i in [1,1,1,1]" :key="i"></fw-i>
          </td>
          <td>
            <router-link to="/fornecedor/produto" class="btn btn-warning"><fw-i icon="pencil-alt"></fw-i> Editar</router-link> &nbsp;
            <a href="#" class="btn btn-danger"><fw-i icon="trash"></fw-i> Excluir</a>
          </td>
        </tr>

        <tr>
          <td>Produto 3</td>
          <td>R$ 100,00</td>
          <td>2</td>
          <td>
            <fw-i :icon="i>=1?`star`:`star-half`" v-for="i in [1,1,1,1,0.5]" :key="i"></fw-i>
          </td>
          <td>
            <router-link to="/fornecedor/produto" class="btn btn-warning"><fw-i icon="pencil-alt"></fw-i> Editar</router-link> &nbsp;
            <a href="#" class="btn btn-danger"><fw-i icon="trash"></fw-i> Excluir</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name:"FornecedorDashboard",
  data:()=>{
    return{
      
    }
  }
}
</script>
<style lang="scss">
  thead th{
    color:white;
  }
</style>

