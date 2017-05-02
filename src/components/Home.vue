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
    <div class="layout-padding " id="cork"> 
   
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
    height: 100vh;
    width: 100%;
  }
</style>
