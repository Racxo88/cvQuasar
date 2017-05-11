<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout id="flat">
      <div slot="header" v-if="isLogged" class="toolbar bg-primary text-center">
        <button
          v-on:click="goHome()">
          <i>home</i>
        </button>
        <q-toolbar-title class="title" >
          My profile
        </q-toolbar-title>
        <button
          @click="$refs.rightDrawer.open()">
          <i>menu</i>
        </button>
      <q-drawer right-side swipe-only ref="rightDrawer" id="rightDrawer">
        <div class="toolbar bg-faded">
          <q-toolbar-title>
            Preferences
        </q-toolbar-title>
      </div>
        <div class="list platform-delimiter text-primary">
          <div class="list-header">
          </div>
          <q-drawer-link icon="mail" to="/account">Account</q-drawer-link>
          <div class="item" v-on:click="doLogout()">
            <i class="item-primary text-negative">power_settings_new</i>
            <div class="item-content text-negative">Logout
            </div>
          </div>
      </div>
      </q-drawer>
    </div>
    <router-view></router-view>
    </q-layout>
    
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
    doLogout () {
      auth.logout()
      this.$router.push('Login')
    },
    goHome () {
      this.$router.push('Home')
    }
  }
}
</script>

<style lang="styl">
  html, body, #q-app {
    height: 100%  }
  i{
  font-size:4vh!important

}
  i.big {
    font-size: 2.5em !important;
  }
  #ExitButton{
     
  }
  .card{
  box-shadow:none
  }
  .title div{
    font-size: 130% !important
  }
</style>
