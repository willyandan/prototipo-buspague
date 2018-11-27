<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Buspague</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">
              <fw-i icon="home"></fw-i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/produto" class="nav-link">
              <fw-i icon="shopping-basket"></fw-i> Produtos 
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carrinho">
              <fw-i icon="cart-arrow-down"></fw-i> 
              Carrinho de compras <span class="badge badge-primary">3</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login"><fw-i icon="user"></fw-i> Entrar</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="contailer-fluid logo">
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
  .logo{
    height: 200px;
    background-image: url(https://via.placeholder.com/1440x500);
    background-repeat: no-repeat;
    background-position: center
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    .logo{
      height: 500px;
    }    
  }

</style>


