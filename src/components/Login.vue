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
              <button id="LogInButton" class="strong text-dark bg-primary push glossy">
                Log in
              <i class="logIcon big text-light">forward</i>
              </button>
    
              <button id="SignInButton" class="strong text-dark bg-secondary push glossy ">
                Sign in
              <i class="logIcon big text-light">add</i>
              </button>
          </div>
            <div class="question text-center">
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
font-size:1.2em
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
