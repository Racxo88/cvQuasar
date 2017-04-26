<template>
  <div class="background">
    <div class="layout-padding">
      <div class="card">
          <div class="entry">
            <input v-model="username" placeholder="Username">
          </div>
          <div class="entry">
            <input v-model="password" type="password"placeholder="Password">
          </div>
          <div class="button">
              <button id="LogInButton" class="text-dark bg-primary push">
                Log in
              <i class="logIcon big">forward</i>
              </button>
    
              <button id="SignInButton" class="text-dark bg-secondary push">
                Sign in
              <i class="logIcon big">add</i>
              </button>
          </div>
            <div class="question strong text-center">
              <p <a class="text-warning" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forget your password?</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  
</script>

<style lang="styl" scoped>
.layout-padding{
      background: url(../assets/loginCard.png) no-repeat center center;
    background-size: contain;
}
.background{
  height:100%
  display: flex
  justify-content center
  align-items center
  background: url(../assets/loginBackground.jpg) no-repeat center center fixed
  background-size:cover
}
.card{
  padding-left: 3em;
  padding-right: 3em;
  padding-top: 6em;
  padding-bottom: 3.5em;
  display:  flex
  flex-direction:column
  justify-content: space-around
  align-items: strecht
  box-shadow:none
}

.entry
{
display:flex
justify-content: strecht
}
.button{
  display: flex;
  flex-direction:column;
  align-items: flex-end
  
}
.question
{

}

#LogInButton{
  display:flex
  justify-content: center
  align-items: center
  margin-bottom:2em
  width:100%
  height:6em
}
#SignInButton{
  display:flex
  justify-content: center
  align-items: center
  width:100%
  height:6em
}
</style>
