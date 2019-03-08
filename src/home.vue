<template>
  <div>
    <h1>WELCOME HOME</h1>
    <p>Welcome {{username}}!</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:'home page',
      username: ''
    }
  },
  mounted: function (){
      // `this` points to the vm instance
      this.$http.get('http://127.0.0.1:3000/home', {withCredentials: true}).then((res)=>{
        this.username = res.data
      })
  }
}
</script>
