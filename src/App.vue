<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import login from './login.vue'

export default {
  components:{
    'login':login
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
