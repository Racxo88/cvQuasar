<template>
  <div class=" flex background">
    <div class="layout-padding row width-1of3">
      <div class="card column justify-center absolute ">
          <div class="entry">
            <input v-model="username" placeholder="Username">
          </div>
          <div class="entry">
            <input v-model="password" type="password"placeholder="Password">
          </div>
          <div class="button row ">
              <button id="LogInButton" class="text-dark bg-primary push">
                Log in
              <i class="logIcon big">forward</i>
              </button>
    
              <button id="SignInButton" class="text-dark bg-secondary push ">
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
}

#LogInButton{

  margin-right:0.5em
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
