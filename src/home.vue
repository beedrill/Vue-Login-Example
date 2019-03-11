<template>
  <div>
    <h1>WELCOME HOME</h1>
    <p>Welcome {{username}}!</p>
    <b-button  v-on:click="logout">logout</b-button>
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
      }).catch((err) => {
        alert('something is wrong with your user status: '+err)
        this.$router.push('/login')
      })
  },
  methods:{
    logout: function(evt){
      evt.preventDefault();
      console.log('logging out...')
      this.$http.get('http://127.0.0.1:3000/logout',  {withCredentials: true}).then((res)=>{
        console.log(res)
        if(res.data.status === 'success') this.$router.push("/login")
      })
    }

  }
}
</script>
