<template>
  <div class="container">
    <h2>Cadastre-se</h2>
    <hr>
    <form >
      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" id="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" id="password" class="form-control">
      </div>
      <div class="form-group">
        <label for="re_senha">Confirmar Senha</label>
        <input type="password" id="re_senha" class="form-control">
      </div>
      <p class="text-right">
        <button class="btn btn-primary">
          Cadastrar-se
        </button>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name:"cadastro",
  data:()=>{
    return {

    }
  }
}
</script>
