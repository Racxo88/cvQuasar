<template>
  <q-layout id="flat">
    <div slot="header" class="toolbar bg-primary text-center">
      <q-toolbar-title >
        My profile
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
          <div class="item-content text-negative">Logout
          </div>
        </div>
      </div>
    </q-drawer>
  </div>
  <div class="layout-content justify-center scroll">
    <div class="layout row items-center justify-center width-2of5">
      <div class="card">
        <img class="profile" src="../assets/Avatars/M-001.png">
        <div class="card-content row full-height">
          <div class="width-1of5 column align-center">
            <div class="list item-inset-delimiter">
              <div class="item">
                <i class="item-primary"> person</i>
                <div class="item-content text-primary capitalize" >{{fullName}}</div>
              </div>
              <div class="item">
                <i class="item-primary">today</i>
                <div class="item-content text-primary">{{shortDate}}</div>
              </div>
              <div class="item">
                <i class="item-primary">wc</i>
                <div class="item-content text-primary capitalize">{{student.genre}} </div>
              </div>
            </div>
          </div>
          <div class="width-4of5  column  justify-around">
            <span class="chip label bg-white justify-start">
              <img src='../assets/Icons/monedas.png'>
                  {{student.money}}
            </span>
             <span class="chip label bg-white full-width justify-start">
              <img src='../assets/Icons/monedas.png'>
                  {{student.academicPoints}}
            </span>
             <span class="chip label bg-white full-width justify-start multiline">
              <img src='../assets/Icons/monedas.png'>
                  {{student.socialPoints}}0000000000000
            </span>
             <span class="chip label bg-white full-width justify-start">
              <img src='../assets/Icons/monedas.png'>
                  {{student.workPoints}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  </q-layout>
</div>
</template>

<script>
import api from '../../services/api'
import auth from '../../services/auth'
import moment from 'moment'

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
  computed: {
    fullName () {
      return this.student.name + ' ' + this.student.lastName
    },
    shortDate () {
      return moment(String(this.student.birthday)).format('DD/MM/YYYY')
    }
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

<style lang="styl" scoped>
.card{
  max-width:800px
  
}
.card-content{
  max-width:800px
  padding-left:2vw
  padding-right:2vw
}
.card .profile{
  padding:5vw
}
.chip{
  padding-left:10vw
}
</style>
