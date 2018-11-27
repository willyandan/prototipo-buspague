<template>
  <div class="container">
    <div class="card w-50 center-block ml-auto mr-auto">
      <div class="card-body">
        <h3>Entrar como fornecedor</h3>
        <form >
          <div class="form-group">
            <label for="login">Login</label>
            <input type="text" id="login" class="form-control">
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password" class="form-control">
          </div>
          <p>
            <router-link to="/fornecedor/d" tag="button" class="btn btn-block btn-primary">Entrar</router-link>
          </p>
        </form>
        <hr>
        <p class="text-center">Ou <router-link to="/fornecedor/cadastro">cadastrar-se</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"loginFornecedor",
  data:()=>{
    return{

    }
  }
}
</script>

