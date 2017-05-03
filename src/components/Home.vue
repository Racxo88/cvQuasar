<template>
<div>
    <q-layout>
    <div slot="header" class="toolbar">
      <button
        class="hide-on-drawer-visible"
        @click="$refs.drawer.open()"
      >
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="2">
        Title
      </q-toolbar-title>
      
    </div>
    <div class="layout-margin row full-width" id="cork">
      <div class="layout-margin column width-1of2 items-center"> 
        <div class="card">
        
        </div>
        <div class="card">
        
        </div>
        <div class="card">
      
        </div>
      </div>
      <div class="column width-1of2 items-center"> 
      
        <div class="card">
       
        </div>
         <div class="card">
    
        </div>
        <div class="card">
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
  #cork{
    background: url(../assets/cork.png) repeat center center;
    background-size: contain;
    height: auto
  }
  .card{
    padding-top:2vw
    background: url(../assets/loginCard.png);
    background-repeat:no-repeat;
    background-size:90% 100%;
    background-position:center;
    height:100%
    max-width:500px
  }
</style>
