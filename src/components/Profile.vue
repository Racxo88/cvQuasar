<template>
    <div class="layout-content column scroll">
      <div class="card column  items-center justify-around scroll">
        <img v-if="isLandscape" class="profile-lands" src="../assets/Avatars/M-001.png">
        <img v-else class="profile" src="../assets/Avatars/M-001.png">
        <div class="card-content items-center" :class="orientationCard">
          <div class="leftList" :class="orientation">
            <div class="item  nonLastItemLeft ">
              <i class="item-primary"> person</i>
              <div class="item-content labelitem text-primary capitalize" >{{fullName}}</div>
            </div>
            <div class="item  nonLastItemLeft ">
              <i class="item-primary"> person</i>
              <div class="item-content labelitem text-primary capitalize" >{{fullName}}</div>
            </div>
            <div class="item nonLastItemLeft">
              <i class="item-primary">today</i>
              <div class="item-content labelitem text-primary">{{shortDate}}</div>
            </div>
            <div class="item nonLastItemLeft">
              <i class="item-primary">wc</i>
              <div class="item-content  labelitem text-primary capitalize">{{student.genre}} </div>
            </div>
          </div>
          <div class="width-4of5 self-strecht" :class="orientation">
            <span class=" label bg-white nonLastItem justify-start ">
              <img src='../assets/Icons/monedas.png'>
                  {{student.money}}
            </span>
             <span class=" label bg-white nonLastItem justify-start ">
              <img src='../assets/Icons/libros1.png'>
                  {{student.academicPoints}}000090
            </span>
             <span class=" label bg-white nonLastItem justify-start " >
              <img src='../assets/Icons/red.png'>
                  {{student.socialPoints}}
            </span>
             <span class="label bg-white nonLastItem justify-start ">
              <img src='../assets/Icons/work.png'>
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
import moment from 'moment'

export default {
  data () {
    return {
      student: {},
      orientation: undefined,
      orientationCard: undefined,
      isLandscape: undefined
    }
  },
  created () {
    api.getLoggedStudent().then((response) => {
      console.log(response)
      this.student = response
    })
    this.$nextTick(function () {
      window.addEventListener('resize', this.getSize)
    })
    this.checkOrientation()
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
    showStudent () {
      console.log('UserId' + this.$store.state.userId)
      console.log(this.student)
    },
    getSize (event) {
      this.checkOrientation()
    },
    checkOrientation () {
      if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
        this.orientation = 'row'
        this.orientationCard = 'column'
        this.isLandscape = true
      }
      else {
        this.orientation = 'column'
        this.orientationCard = 'row'
        this.isLandscape = false
      }
    }
  }
}
</script>

<style lang="styl" scoped>
.card{
  margin-bottom: 0px;
  padding-top:0.5em
}
.card-content{
  padding-left:5vw
  padding-right:5vw
  padding-top:0vw
  padding-bottom:0vw
}
.card .profile{
  padding-left:5vw
  padding-right:5vw
  max-width:60vh
  margin-bottom:1em
}
.card .profile-lands{
  max-width:70vh
}
.leftList{
}
.label{
  font-size:3vh
}
.labelitem{
  font-size:3vh
  margin-left:3em!important
}

.nonLastItemLeft{
 height: 7vh
}
.item-content{
  margin-left: 4em;
}
span img{
  height:6vh
  margin-right:2vw
}
</style>
