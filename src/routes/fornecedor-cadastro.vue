<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" id="email" class="form-control">
      </div>
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password" class="form-control">
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="re-password">Confirmar senha</label>
            <input type="text" id="re-password" class="form-control">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="cpf_cnpj">CPF/CNPJ</label>
        <input type="text" id="cpf_cnpj" class="form-control">
      </div>
      <div class="form-group">
        <label for="rg_ie">RG/IE</label>
        <input type="text" id="rg_ie" class="form-control">
      </div>

      <p>
        Areas de atuação
      </p>
      <div class="card">
        <div class="card-body">
          <p>
            <span class="btn btn-primary btn-item" v-for="i of items" :key="i">
              {{i}} &nbsp;
              <button type="button" class="close" aria-label="Close" @click="removeItem(i)">
                <span aria-hidden="true">&times;</span>
              </button>
            </span>
          </p>
        </div>
        <div class="card-footer">
          <textarea id="atuacao" rows="5" class="form-control" v-model="new_item" @keyup.13="addItem()"></textarea>
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col-4">
          <div class="card">
            <img src="https://via.placeholder.com/350x169?text=Nova Imagem" class="card-img-top" alt="">
            <div class="card-footer">
              <button class="btn btn-primary" type="button">Nova imagem</button>
            </div>
          </div>
        </div>
      </div>
      <br>
      <p class="text-right">
        <button class="btn btn-primary">Cadastrar</button>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name:"FornecedorCadastro",
  data:()=>{
    return{
      items:[],
      new_item:""
    }
  },
  methods:{
    addItem:function(){
      this.items.push(this.new_item.toLowerCase())
      this.new_item = ""
    },
    removeItem: function(el){
      this.items = this.items.filter((val)=>val != el)
    }
  }
}
</script>

<style lang="scss">
.btn-item{
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>

