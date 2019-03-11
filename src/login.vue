<template>
  <div>
    <b-container fluid>
      <div class = "row">
        <div class = "col-sm-6">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="emailformgroup"
                    label="Email address:"
                    label-for="Email"
                    description="Your personal information will only be used for logging in">
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Please input email address">
        </b-form-input>

      </b-form-group>
      <b-form-feedback>
        please enter a valide email address
      </b-form-feedback>

      <b-form-group id="passwdformgroup"
                    label="Password"
                    label-for="password"
                    >
        <b-form-input id="password"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="Please input password">
        </b-form-input>

      </b-form-group>


      <b-button type="submit" variant="primary">Log in</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button  class = "float-right">Register</b-button>
    </b-form>
  </div>
    </div>
  </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true
    }
  },
  methods: {

    onSubmit (evt) {
      evt.preventDefault();
      console.log(this.form)
      //alert(JSON.stringify(this.form));
      this.$http.post('http://127.0.0.1:3000/auth/login', this.form, {withCredentials: true}).then((res)=>{
        console.log(res)
        if(res.data.status=='success'){
          //alert(JSON.stringify(this.form));
          this.$router.push('/home')
        }
      }).catch((err)=>{
        alert(err)
      })
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.password = '';

      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>
