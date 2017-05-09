<template>
  <q-layout id="flat">
    <div slot="header" class="toolbar bg-primary text-center">
      <q-toolbar-title >
        Welcome {{this.$store.state.studentId}}
      </q-toolbar-title>
       <button
        @click="$refs.rightDrawer.open()">
        <i>menu</i>
      </button>
    <q-drawer right-side swipe-only ref="rightDrawer" id="rightDrawer">
      <div class="toolbar bg-faded">
        <q-toolbar-title :padding="0">
          Preferences
       </q-toolbar-title>
     </div>
    <div class="list platform-delimiter text-primary">
      <div class="list-header">
      </div>
      <q-drawer-link icon="mail" to="/account">Account</q-drawer-link>
        <div class="item" v-on:click="showStudent()">
         <i class="item-primary text-negative">power_settings_new</i>
          <div class="item-content text-negative">Logout</div>
          </div>
        </div>
  </q-drawer>
  </div>
  </div>
  </q-layout>
</div>
</template>

<script>
import api from '../../services/api'
import auth from '../../services/auth'
export default {
  data () {
    return {
      student: {}
    }
  },
  created () {
    api.getLoggedStudent().then((response) => {
      console.log(response)
      this.student = response
    })
  },
  methods: {
    logout () {
      auth.logout()
      this.$router.push('Login')
    },
    showStudent () {
      console.log('UserId' + this.$store.state.userId)
      console.log(this.student)
    }
  }
}
</script>

<style>
</style>
