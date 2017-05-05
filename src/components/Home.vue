<template>
<div>
    <q-layout id="flat">
    <div slot="header" class="toolbar bg-primary">
      <button
        class="hide-on-drawer-visible"
        @click="$refs.drawer.open()"
      >
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="0">
        Title
      </q-toolbar-title>
      
    </div>
    <div class="layout-margin row full-width" >
      <div class="layout-margin column width-1of2 items-center izqPanel"> 
        <div class="card layout-margin column text-center justify-center" id="today">
        </div>
        <div class="card layout-margin column text-center justify-center" id="subjects">
        </div>
         <div class="card layout-margin column text-center justify-center" id="university">
        </div>
      </div>
      <div class="column width-1of2 items-center derPanel"> 
      
        <div class=" card layout-margin column text-center justify-center" id="history">
        </div>
         <div class="card layout-margin column text-center justify-center" id="courses">
         
        </div>
         <div class="card layout-margin column text-center justify-center" id="profile">
        </div>
    </div>
  </div>
  </q-layout>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>


<style lang="styl" scoped>
.layout-header{
     border-bottom-width: 0px ! important
}
  #cork{
    background: url(../assets/cork.png) repeat center center;
    background-size: contain;
    height: auto
  }
   #flat{
    background: url(../assets/blackboardBackground.jpg) repeat center fixed;
    background-size: cover;
    height: 100%
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
</style>
