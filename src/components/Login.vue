<template>
  <div class="layout column background items-center">
    <div  id="TitleHeading" class="text-center width-1of5">
      <h1 class="text-light">GetMoneyApp()</h1>
    </div>
    <div id="cardBack" class="layout-margin row width-4of5 full-width">
      <div class="card layout-margin column items-center justify-center ">
          <div class="entry">
            <input v-model="loginInfo.email" placeholder="Email">
          </div>
          <div class="entry">
            <input v-model="loginInfo.password" type="password"placeholder="Password">
          </div>
          <div class="button layout-margin inline-row">
              <button v-on:click="doLogIn" id="LogInButton" class="strong text-dark bg-primary push glossy width-1of2">
                Log in
              <i class="logIcon big text-light">forward</i>
              </button>
    
              <button v-on:click="doSignIn" id="SignInButton" class=" strong text-dark bg-secondary push glossy width-1of2">
                Sign in
              <i class="logIcon big text-light">add</i>
              </button>
          </div>
            <div class="question height-1of1">
              <p <a class="text-warning" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot your password?</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { Dialog, Toast } from 'quasar'
  import auth from '../../services/auth'
  export default {
    data () {
      return {
        loginInfo: {
          email: 'test@test.com',
          password: 'test'
        }
      }
    },
    computed: {
      isLogged () {
        return this.$store.state.isLogged
      }
    },
    methods: {
      doSignIn () {
        Dialog.create({
          title: 'Info',
          message: 'This website is just for cool people.',
          buttons: [
            'Accept',
            {
              label: 'Cancel',
              handler () {
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              }
            }
          ]
        })
      },
      doLogIn () {
        auth.logIn(this.loginInfo)
        .then(() => {
          console.log('Logged')
          this.$router.push('Home')
        })
        .catch(() => {
          this.$store.commit('logged', false)
          Toast.create.negative({
            html: 'Incorrect user or password',
            timeout: 2500,
            button: {
              color: '#000'
            }
          })
        })
      }
    }
  }
  </script>

<style lang="styl" scoped>
h1{
  background-color: rgba(100, 100,100, 0.3);
  font-family: Verdana
  font-variant: small-caps
  font-size:8vw
}

.background{
background: url(../assets/backGroundHome.png) repeat center center;
    background-size: contain;
    height: auto

}
#cardBack{
    padding-top:2vw
    max-width:750px
    max-height:900px
    background: url(../assets/loginCard.png);
    background-repeat:no-repeat;
    background-size:90% 100%;
    background-position:center;
    margin-bottom:2em
}
.card{
  box-shadow:none
  max-width:750px
  max-height:9000px
}
input{
  font-size:3vh
}
.card .entry
{
margin-bottom:1em
}
.button{
  margin-top:1vh
  margin-bottom:1vh

}
.question
{
margin-top:1vh
font-size:3vh
}

#LogInButton{

  margin-right:0.5em
  font-size:1.5vh

}
#SignInButton{
font-size:1.5vh
}
</style>
