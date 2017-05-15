<template>
    <div class="layout-content column scroll justify-between">
      <div class="card column  items-center justify-around scroll">
        <img v-if="isLandscape" class="profile-lands" src="../assets/Avatars/M-001.png">
        <img v-else class="profile" src="../assets/Avatars/M-001.png">
        <div class="card-content items-center column full-width"> 
          <div class="items-center" :class="orientationCard">
            <div class="leftList" :class="orientation">
              <div class="item  nonLastItemLeft ">
                <i class="item-primary"> person</i>
                <div class="item-content labelitem text-primary capitalize" >{{fullName}}</div>
              </div>
              <div class="item  nonLastItemLeft ">
                <i class="item-primary"> flag</i>
                <div class="item-content labelitem text-primary capitalize" >{{student.country}}</div>
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
                    {{student.academicPoints}}
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
            <button v-on:click="doDeleteStudent" id="DeleteButton" class=" text-dark bg-negative glossy push self-end circular">
              <i>delete</i>
            </button>
        </div>
      </div>

    </div>
    
  </div>

  </q-layout>
</div>
</template>

<script>
import { Dialog, Toast } from 'quasar'
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
    },
    doDeleteStudent () {
      var vm = this
      Dialog.create({
        title: 'Confirm',
        message: 'If you delete your student, all progress will be deleted. Do you want to continue?',
        buttons: [
          {
            label: 'Yes',
            classes: 'positive',
            handler () {
              api.deleteStudent()
              .then((response) => {
                Toast.create.positive({
                  html: 'Student removed succesfully!',
                  timeout: 2500,
                  button: {
                    color: '#000'
                  }
                })
                vm.$router.push('CreateStudent')
              })
            }
          },
          {
            label: 'No',
            classes: 'negative',
            handler () {
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="styl" scoped>
.card{
  margin-bottom: 0px;
  padding-top:0.5em
}

.card .profile{
  padding-left:5vw
  padding-right:5vw
  max-width:50vh
  margin-bottom:1em
}
.card .profile-lands{
  max-height:50vh
  max-width:50%
}
.leftList{
}
.label{
  font-size:3vh
}
.labelitem{
  font-size:3vh
  margin-left:4em!important
}
i{
  font-size:4vh!important
}

.nonLastItemLeft{
 height: 8vh
}
.item-content{
  margin-left: 4em;
}
span{
  margin-top:0.5em
}
span img{
  height:5vh
  margin-right:2vw
}
#DeleteButton i{
font-size:1.5rem !important
}

</style>
