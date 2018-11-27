import Router from "vue-router";
import Vue from 'vue';
import  Home from "./home";
import Produtos from "./produtos"
import ProductDesc from "./produto-desc";
import Carrinho from "./carrinho";
import Checkout from "./checkout";
import Cadastro from "./cadastro"
import LoginFornecedor from "./login-fornecedor"; 
import FornecedorDashboard from "./fornecedor-dashboard";
import FornecedorCadastro from "./fornecedor-cadastro";
import ProdutoForm from "./produto-form"
import Login from "./login"
Vue.use(Router)
const router = new Router({
  base: '/prototipo-buspague',
  mode:'history',
  routes:[
    {
      path: '',
      component: Home
    },
    {
      path:'/login',
      component: Login
    },
    {
      path: "/produto",
      component: Produtos
    },
    {
      path:"/produto/:id",
      component:ProductDesc
    },
    {
      path:"/carrinho",
      component:Carrinho
    },
    {
      path:'/cadastro',
      component:Cadastro
    },
    {
      path:"/checkout",
      component:Checkout
    },
    {
      path:"/fornecedor",
      component:LoginFornecedor
    },
    {
      path:"/fornecedor/d",
      component:FornecedorDashboard
    },
    {
      path:"/fornecedor/cadastro",
      component:FornecedorCadastro
    },
    {
      path:"/fornecedor/produto",
      component:ProdutoForm
    }

  ]
})
export default router