<template>
  <div>
    <div class="checkb">
      <div :class="login">
        <span class="number">1</span>
        <span class="label">Login</span>
      </div>
      <div :class="dados">
        <span class="number">2</span>
        <span class="label">Detalhes</span>
      </div>
      <div :class="final">
        <span class="number">3</span>
        <span class="label">Fechamento da compra</span>
      </div>
	  </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInRight"
    >
      <div class="container" v-if="login.current">
        <h3>Entre ou cadastre-se</h3>
        <hr>
        <form>
          <div class="form-group">
            <label for="login">Login</label>
            <input type="text" id="login" class="form-control">
          </div>
          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" id="password" class="form-control">
          </div>
          <p class="text-right">
            <button class="btn btn-primary" @click.prevent="toDados()">
              Entrar
            </button>
          </p>
        </form>
        <hr>
        <p class="text-center">
          ou <router-link to="/cadastro">cadastre-se</router-link>
        </p>
      </div>
    </transition>

    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInRight"
    >
      <div class="container" v-if="dados.current">
        <form>
          <h3>Endereço</h3>
          <hr>
          <div class="form-group">
            <label for="cep">CEP</label>
            <input type="text" class="form-control">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <label for="">Rua</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label for="">Número</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="">Bairro</label>
            <input type="text" class="form-control">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <label for="">Cidade</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label for="">UF</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>

          <h3>Informações de compra</h3>
          <hr>
          <div class="form-group">
            <label for="">Banco</label>
            <input type="text" class="form-control">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="form-group">
                <label for="">Cartão</label>
                <input type="text" class="form-control">
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label for="">CVV</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <p class="text-right">
            <button class="btn btn-primary" @click.prevent="toFinal()">
              Comprar
            </button>
          </p>
        </form>
      </div>
    </transition>

    <transition
      name="custom-classes-transition"
      enter-active-class="animated slideInRight"
    >
      <div class="container" v-if="final.current">
        <h3>Parabéns</h3>
        <hr>
        <p>
          Sua compra foi efetuada com sucesso.
        </p>
        <p>
          Verifique seu e-mail para maiores informações.
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:"Checkout",
  data:()=>{
    return{
      login:{
        current:true,
        "checkb-item":true
      },
      dados:{
        current:false,
        "checkb-item":true
      },
      final:{
        current:false,
        "checkb-item":true
      }
    }
  },
  methods:{
    toDados: function(){
      this.login.current = false
      this.dados.current = true
    },
    toFinal: function(){
      this.dados.current = false
      this.final.current = true
    }
  }
  
}
</script>

<style lang="scss">
@import '../style/theme.scss';
@import "../../node_modules/animate.css/animate.min.css";
.checkb {
	background-color: $secondary;
	color: #FFF;
	display: flex;
	font-size: 14px;
	position: relative;
  margin-top: -15px;
  margin-bottom: 15px;
}

.checkb-item {  
	padding-left: 30px;
  height: 55px;
}

.checkb-item:first-child {
	padding-left: 10px;
}

.checkb-item .number {
	display: block;
	background-color: $primary;
	border-radius: 50%;
	padding: 6px 10px;
	float: left;
	margin: 13px 0 0 10px;
}

.checkb-item .label {
	display: block;
	padding: 20px 0 20px 10px;
	float: left;
}

.checkb-item::after {
	content: '';
	display: block;
	width: 35px;
	height: 35px;
	transform: rotate(130deg) skew(-10deg);
	float: right;
	position: relative;
	top: 10px;
	left: 17px;
	border-top: 1px solid $primary;
	border-left: 1px solid $primary;
	background-color: $secondary;
}

.checkb-item.current,
.checkb-item.current::after{
	background-color: $primary;
}

.checkb-item.current .number {
	background-color: $secondary;
}
</style>