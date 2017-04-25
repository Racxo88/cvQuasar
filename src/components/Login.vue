<template>
  <div>
      <div class="layout-padding">
        <div class="column gutter items-center justify-center">
          <div>
            <div class="card ">
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
              </div>
            </div> 
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  
</script>

<style lang="styl">
.h2{
  justify-content:center

}
.layout-padding{
  height:100vh
  min-height:100vh
  background-image: url(../assets/loginBackground.jpg)
  background-size:50%
  margin-top:-25px
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
</style>
