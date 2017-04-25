<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style lang="styl">
  html, body, #q-app {
    height: 100%
  }
  i {
    font-size: 1.5em !important;
  }
  i.big {
    font-size: 2.5em !important;
  }
</style>
