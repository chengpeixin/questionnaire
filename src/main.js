// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import reset from '@/assets/style/reset.css'
import touch from 'vue-directive-touch';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from './store'

Vue.config.productionTip = false
Vue
 .use(reset)
 .use(touch)
 .use(Mint);


let ind = 1;
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate:function(){
    console.log(`${ind++ }：beforeate` )
  },
  created:function(){
    console.log(`${ind++ }：created：` )
  },
  beforeMount:function(){
    console.log(`${ind++ }：beforeMount`)
  },
  mounted:function(){
    console.log(`${ind++}：Mounted`)
  },
  beforeDestroy:function(){
    // 卸载组件之前
    console.log(`${ind++}：neforeDestroy`)
  },
  destroyed:function(){
    // 卸载组件之后
    console.log(`${ind++}：destroy`)
  },
  beforeUpdate:function(){
    console.log(`beforeUpdate`)
  },
  updated:function(){
    console.log(`updated`)
  }
})
