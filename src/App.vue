<template>
  <div>
    <nav-bar></nav-bar>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import  NavBar from "./components/NavBar";
import router from "./routes/index";
export default {
  name: 'app',
  router,
  components:{
    NavBar,
  },
  data: ()=>{
    return{

    }
  },
};
</script>

<style lang="scss">
@import './style/theme.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
.main{
  padding-top:15px;
  padding-bottom:15px;
}
</style>
