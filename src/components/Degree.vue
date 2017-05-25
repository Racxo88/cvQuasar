<template>
  <div class="column full-width  " id="flat">
    <div class="card MyDegrees row width-1of2 full-width ">
      <div class="card-content column full-width ">
        <div class="Headers row bg-primary">
          <label class="text-light width-2of5">Name</label>
          <label class="text-light width-2of5">Status</label>
          <label class="text-light width-1of5"></label>
        </div>
        <div class="Degrees column align-start full-height scroll ">
          <div v-for="degree of this.myDegrees" class="oneDegree row justify-around items-center items-center">
            <label class="text-light width-2of5">{{degree.name}}</label>
            <label class="text-light width-2of5">{{degree.Students[0].StudentDegree.CurrentStatusId}}</label>
            <i class="text-light width-1of5">info</i>
          </div>
        </div>  
      </div>
    </div>
    <div class="card OtherDegrees width-1of2 row full-width ">
      <div class="card-content column full-width full-height justify-center">
        <q-slider infinite class="text-white full-width full-height">
          <div v-for="otherdegree of this.otherDegrees" slot="slide" class="centered row full-width text-black slides justify-between" :style='{backgroundImage: "url(" +require("../assets/Degrees/" + otherdegree.image)  + ")",}'>
            <div class="slide-content column full-height justify-center">
              <div class=nameDegree>
                {{otherdegree.name}}
              </div>
              
            </div>
            <div class="row full-width justify-between text-light">
                <button v-on:click="buyDegree(otherdegree.id, otherdegree.money)" id="BuyButton" class="text-light push glossy row items-center ">
                <img src='../assets/Icons/monedas.png'></img>
              {{otherdegree.money}}
              
              </button>
                <div class='label'>
    
                  
              </div>
              
              <i slot="action" @click="someMethod()">
                info
              </i>
            </div>
          </div>
        </q-slider>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../services/api'
import { Dialog, Toast } from 'quasar'
export default {
  data () {
    return {
      myDegrees: undefined,
      otherDegrees: undefined
    }
  },
  created () {
    api.getDegreesByStudent().then((data) => {
      this.myDegrees = data
    })
    api.getDegreesByNoStudent().then((data) => {
      this.otherDegrees = data
      console.log(data)
    })
  },
  methods: {
    buyDegree (id, money) {
      api.isMoneyEnough(id, money)
      .then((response) => {
        if (!response) {
          Toast.create.negative({
            html: 'Sorry, you don\'t have enough money',
            timeout: 2500,
            button: {
              color: '#000'
            }
          })// Message not enough money
        }
        else {
          var vm = this
          Dialog.create({
            title: 'Confirm',
            message: 'Are you sure that you want to buy this degree?',
            buttons: [
              {
                label: 'Yes',
                classes: 'positive',
                handler () {
                  api.getDegreesByStudent().then((data) => {
                    vm.myDegrees = data
                  })
                  api.getDegreesByNoStudent().then((data) => {
                    vm.otherDegrees = data
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
      })
    }
  }
}
</script>

<style lang="styl" scoped>
.Headers{
    border: 2px solid whitesmoke;
    border-bottom:0px
}
.Degrees{
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid whitesmoke;
  border-top:0px
}
.oneDegree{
  min-height: 2em;
}
label{
  font-size:1em
}

.nameDegree{
  margin-bottom:-3vh;
  padding:0.5vh;
  color:black
}
#BuyButton{
  margin-left:0.1em;
  margin-bottom:0.1em
  color:white;
  background-color:#ffd949A0;
  font-size:3vh
}
#BuyButton img{
  margin-right:0.4em
}
.slides{
    background-repeat:repeat;
    background-size: cover;
    background-position: center;
    font-size:6vw;
    font-weight: bold;
    border: 2px solid whitesmoke;
    padding:0px
}

.card-content{
  padding-top:0.3em;
  padding-bottom:0px
}
</style>
