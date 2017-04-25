<template>
  <div class="background">
        <div class="column gutter items-center justify-center">
          <div>
            <div class="card">
              <div class="card-title">
                <h2> Login </h2>
              </div>
              <div class="card-content">
                <div class="entry">
                  <div class="floating-label">
                    <input v-model="userName" required class="full-width">
                    <label class="text-primary">User Name</label>
                  </div>
                </div>
                <div class="entry">
                  <div class="floating-label">
                    <input v-model="password" type="password" required class="full-width">
                    <label class="text-primary">Password</label>
                 </div>
                </div>
                <div class="entry">
                   <button id="LogInButton" class="text-dark bg-primary push small ">
                      Log in
                    <i class="logIcon big">forward</i>
                    </button>
                </div>
                <div class="entry">
                   <button id="SignInButton" class="text-dark bg-secondary push">
                      Sign in
                    <i class="logIcon big">add</i>
                    </button>
                </div>
                 <div class="question strong text-center">
                   <p <a class="text-warning" href="https://www.google.es/#q=noob">Forget your password?</a>
                    </button>
                </div>
              </div>
            </div> 
          </div>
        </div>
  </div>
</template>

<script>
  
</script>

<style lang="styl" scoped>
.h2{
  justify-content:center

}
.background{
  height:100%
  display: flex
  justify-content center
  align-items center
  background-image: url(../assets/loginBackground.jpg)
}
.card{
  height:35em
  width:20em
  background-image: url(../assets/loginCard.png)
  background-size:20em 35em;
  backgrount-repeat:no-repeat
  border:0px
  box-shadow:none
}
.card-title{
  text-align: center
 }
.entry
{
  padding-right: 35 px
  padding-top:7px
  padding-left: 35 px
  padding-bottom:10px
}
.question
{
  padding-right: 35 px
  padding-top:7px
  padding-left: 35 px
  padding-bottom:10px
  align-content:center
}

#LogInButton{
  margin-top:45px
  width:100%
  height: 50px
  margin-left:-1px

}
#SignInButton{
  width:100%
  height: 50px
  margin-left:-1px
  margin-bottom: -5px
}

</style>
