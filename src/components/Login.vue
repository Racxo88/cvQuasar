<template>
  <div class=" flex background">
    <div class="layout-padding column width-1of3">
    <div  id="TitleHeading">
    <h1 class="text-light text-center fixed-top">GetMoneyApp()</h1>
    </div>
      <div class="card column justify-center absolute ">
          <div class="entry">
            <input v-model="loginInfo.email" placeholder="Email">
          </div>
          <div class="entry">
            <input v-model="loginInfo.password" type="password"placeholder="Password">
          </div>
          <div class="button row ">
              <button v-on:click="doLogIn" id="LogInButton" class="strong text-dark bg-primary push glossy">
                Log in
              <i class="logIcon big text-light">forward</i>
              </button>
    
              <button v-on:click="doSignIn" id="SignInButton" class="strong text-dark bg-secondary push glossy ">
                Sign in
              <i class="logIcon big text-light">add</i>
              </button>
          </div>
            <div class="question text-center">
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
          email: '',
          password: ''
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
          Toast.create.positive({
            html: 'Log in successfully',
            timeout: 2500,
            button: {
              color: '#000'
            }
          })
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
  font-size:13vw
  @media (min-width: 670px){
    font-size:90px

  }
  
}

.background{
  height:100%
  width:100%
  display: flex
  align-items center
  justify-content center
  background: url(../assets/loginBackground.jpg) no-repeat center fixed 
  background-size:cover
  overflow:hidden
}
.layout-padding{

    background: url(../assets/loginCard.png) no-repeat center center;
    background-size: contain;
    height:100%
    width:auto

    
   
}
.card{
  height:100%
  width:100%
  box-shadow:none
}

.card .entry
{
display:flex
justify-content: center
margin-bottom:1em
}
.button{
  margin-top:1em
  padding-left:1.9em
  padding-right:1.7em
  display: flex;
  flex-direction:row;
  align-items: flex-end
  justify-content: center
  
}
.question
{
margin-top:2em
font-size:1.2em
}

#LogInButton{

  margin-right:0.5em
  display:flex
  justify-content: center
  align-items: center
  height:3.5em
  width:auto

}
#SignInButton{
  display:flex
  justify-content: center
  align-items: center
  height:3.5em
  width:auto

}
</style>
