import Vue from 'vue';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import  fonts from "./fonts";
import App from './App.vue';
import 'bootstrap';


library.add(fonts)
Vue.component('fw-i', FontAwesomeIcon)

new Vue({
  el: '#app',
  components:{
    App
  },
  render: h=> h(App)
});

