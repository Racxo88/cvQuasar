<template>
    <div class="layout-content scroll" id="flat">
      <div class="column width-1of2 items-center izqPanel"> 
        <div class="card column text-center justify-center items-center" id="today" >
          <div class="flex justify-center items-center clickPanel" v-on:click="goToday()">
            <div class="textCard">
              Today
            </div>
          </div>
        </div>
        <div class="card  column text-center justify-center items-center" id="subjects" >
          <div class=" flex justify-center items-center clickPanel" v-on:click="goToday()">
            <div class="textCard">
              Subjects
            </div>
          </div>
        </div>
        <div class="card column text-center justify-center items-center" id="university" >
          <div class=" flex justify-center items-center clickPanel" v-on:click="goToday()">
            <div class="textCard">
              University
            </div>
          </div>
        </div>
      </div>
      <div class="column width-1of2 items-center derPanel"> 
      
        <div class="card  column text-center justify-center items-center" id="history" >
          <div class=" flex justify-center items-center clickPanel" v-on:click="goToday()">
            <div class="textCard">
              History
            </div>
          </div>
        </div>
     
         <div class="card  column text-center justify-center items-center" id="courses" >
          <div class=" flex justify-center items-center clickPanel" v-on:click="goToday()">
            <div class="textCard">
              Courses
            </div>
          </div>
        </div>
         <div class="card  column text-center justify-center items-center" id="profile" >
          <div class=" flex justify-center items-center clickPanel" v-on:click="goProfile()">
            <div class="textCard">
              My profile
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import auth from '../../services/auth'
export default {
  data () {
    return {
    }
  },
  methods: {
    logout () {
      auth.logout()
      this.$router.push('Login')
    },
    goToday () {
      this.$router.push('Today')
    },
    goProfile () {
      this.$router.push('Profile')
    }
  }
}
</script>


<style lang="styl" scoped>
.layout-header{
     border-bottom-width: 0px ! important
}
.textCard{
  font-family: 'Roboto Condensed', sans-serif;
  font-size:4vh
  text-shadow: 1px 1px 3px black, -1px 1px 3px black, 0px -1px 3px black;
  font-variant: small-caps;
  color:#66AA66
  display:flex
  justify-content:center
  align-content:center
  }
  #cork{
    background: url(../assets/cork.png) repeat center center;
    background-size: contain;
    height: auto
  }
   
  .card{
    height:100%
    max-width:40vh
    box-shadow:none
  }
  #today{
    background: url(../assets/postItToday2.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
  #history{
    background: url(../assets/postItHistory.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
  #university{
    background: url(../assets/postItUniversity.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
  #courses{
    background: url(../assets/postItCourses.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
  #profile{
    background: url(../assets/postItProfile.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
   #subjects{
    background: url(../assets/postItSubjects.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
  .izqPanel{
    margin-top:1em
    margin-right:1vw
    margin-left:1vw

  }
  .derPanel{
    margin-left:1vw
    margin-right:1vw
    margin-top:1em
  }
  .clickPanel{
    width:100%
    height:60%
  }

</style>
