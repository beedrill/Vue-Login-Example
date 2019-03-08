//https://blog.usejournal.com/sessionless-authentication-withe-jwts-with-node-express-passport-js-69b059e4b22c
//https://medium.com/front-end-weekly/learn-using-jwt-with-passport-authentication-9761539c4314
import Vue from 'vue'
import VueCookies from 'vue-cookies'

import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Axios from 'axios';
import Router from 'vue-router'
import login from './login.vue'
import home from './home.vue'

Vue.prototype.$http = Axios; //configure http
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueCookies)

const router = new Router(
  {
      routes:
      [
        {path: '/login',
        component: login},
        {path: '/home',
        component: home}
      ]
  }
)
router.beforeEach((to, from, next) => {
  if(to.path === '/')
  {
    next('/login')
  }
  else
  {
    next()
  }

})
Vue.$router = router

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
