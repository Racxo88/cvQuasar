<template>
  <div class='layout-content column justify-start text-light items-center scroll' id="flat">
    <h1>Welcome!</h1>
    <div class='mainColumn column height-3of4'>
      <input class='text-light entry' v-model="user.userName" placeholder="User name">
      <input class='text-light entry' type="password" v-model="user.password" placeholder="Password">
      <input class='text-light entry' type="password" v-model="user.password2" placeholder="Repeat Password">
      <input class='text-light entry' v-model="user.email" placeholder="Email">
      <input class='text-light entry' v-model="user.email2" placeholder="Repeat email">
      
      <button v-on:click="doCreateUser" id="SignInButton" class=" strong text-dark bg-light push ">
                Create user
      </button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'quasar'
import api from '../../services/api'
export default {
  data () {
    return {
      user: {
        userName: undefined,
        password: undefined,
        password2: undefined,
        email: undefined,
        email2: undefined
      }
    }
  },
  methods: {
    doCreateUser () {
      if ((this.user.password === this.user.password2) && (this.user.email === this.user.email2)) {
        api.createUser(this.user)
        .then((response) => {
          console.log(response)
          Toast.create.positive({
            html: 'User created!',
            timeout: 2500,
            button: {
              color: '#000'
            }
          })
          this.$router.push('Login')
        })
        .catch(() => {
          Toast.create.negative({
            html: 'Error creating user. Invalid data.',
            timeout: 2500,
            button: {
              color: '#000'
            }
          })
        })
      }
      else {
        Toast.create.negative({
          html: 'Passwords or emails do not match',
          timeout: 2500,
          button: {
            color: '#000'
          }
        })
      }
    }
  }
}
</script>

<style>
.mainColumn{
  width:80%
}
.radiusPanel{
  padding-top:2em;
  padding-bottom:2em
}
.birthday{
  min-height:35px
}
.entry:focus{
  color:black!important
}
#SignInButton{
  margin-top:1em
}
</style>
