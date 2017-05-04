<template>
<div>
    <q-layout id="cork">
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
      <div class="layout-margin column width-1of2 items-center"> 
        <div class="card layout-margin column text-center justify-center" id="rojo">
          <a class="text-light"href='http://www.google.es'> Daily actions </a>
        </div>
        <div class="card layout-margin column text-center justify-center" id="verde">
          <a class="text-light" href='http://www.google.es'> Subjects </a>
        </div>
         <div class="card layout-margin column text-center justify-center" id="azul">
                 <a class="text-light"href='http://www.google.es'> University </a>
        </div>
      </div>
      <div class="column width-1of2 items-center"> 
      
        <div class=" card layout-margin column text-center justify-center" id="amarillo">
                 <a class="text-dark"href='http://www.google.es'> History actions </a>
        </div>
         <div class="card layout-margin column text-center justify-center" id="blanco">
                 <a class="text-red"href='http://www.google.es'> Academic record  </a>
         
        </div>
         <div class="card layout-margin column text-center justify-center" id="morado">
                 <a class="text-light"href='http://www.google.es'> My profile  </a>
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
  .card{
    height:100%
    max-width:45vh
    box-shadow:none
  }
  #rojo{
    background: url(../assets/postItRojo.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
  #amarillo{
    background: url(../assets/postItAmarillo.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
  #blanco{
    background: url(../assets/postItBlanco.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
  #blanco a{
    padding-top:0.8em
  }
  #azul{
    background: url(../assets/postItAzul.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
  #morado{
    background: url(../assets/postItMorado.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
  }
   #verde{
    background: url(../assets/postItVerde.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    background-position:center;
    margin-top:-1em
  }
</style>
