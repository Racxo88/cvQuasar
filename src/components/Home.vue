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
    <div class="flex " id="cork">
      <div class="column width-1of2"> 
        <div class="card">
        
        </div>
        <div class="card">
        
        </div>
        <div class="card">
      
        </div>
      </div>
      <div class="column width-1of2"> 
      
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
    width: 100vw;
  }
  .card{
    height:100%
    width:100%
    background: url(../assets/loginCard.png) no-repeat center center
    background-size:contain
    box-shadow:none
  }
</style>
