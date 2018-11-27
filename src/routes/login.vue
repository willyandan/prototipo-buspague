<template>
  <div class="container">
    <div class="card w-50 center-block ml-auto mr-auto">
      <div class="card-body">
        <h3>Entrar</h3>
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
            <button class="btn btn-block btn-primary">Entrar</button>
          </p>
        </form>
        <hr>
        <p class="text-center">Ou <router-link to="/cadastro">cadastrar-se</router-link></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Login"
}
</script>
