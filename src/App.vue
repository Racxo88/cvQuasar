<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
     <q-fab v-if="isLogged"
        class="absolute-bottom-left"
        icon="settings"
        direction="right"
        id="ExitButton"
      >
        <q-small-fab class="negative" @click.native="logout()" icon="power_settings_new"></q-small-fab>
        
      </q-fab>
  </div>
</template>

<script>
/*
 * Root component
 */
import auth from '../services/auth'
export default {
  computed: {
    isLogged () {
      return this.$store.state.isLogged
    }
  },
  methods: {
    logout () {
      auth.logout()
      this.$router.push('Login')
    }
  }
}
</script>

<style lang="styl">
  html, body, #q-app {
    height: 100%  }
  i {
    font-size: 1.5em !important;
  }
  i.big {
    font-size: 2.5em !important;
  }
  #ExitButton{
        bottom: -3em;
        
  }
</style>
