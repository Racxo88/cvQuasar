<template>
  <div class="column full-width " id="flat">
    <div class="card MyDegrees row width-1of2 full-width">
      <div class="card-content column full-width">
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
    <div class="card OtherDegrees width-1of2 row full-width">
      <div class="card-content column full-width full-height justify-center">
        <q-slider infinite  actions class="text-white full-width full-height">
          <div v-for="otherdegree of this.otherDegrees" slot="slide" class="centered full-width text-black slides" :style='{backgroundImage: "url(" +require("../assets/Degrees/" + otherdegree.image)  + ")",}'>
            {{otherdegree.name}}
          </div>
          <div class="q-slider-toolbar row justify-end ">
          
          <div  slot="action" class="moneyDegree row items-center">
            <img src='../assets/Icons/monedas.png'>1000</img>
            </div>
            <i slot="action" @click="someMethod()">
              add_shopping_cart
            </i>
            <i slot="action" @click="someMethod()">
              info
            </i>
          </div>
        </q-slider>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../services/api'
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
.moneyDegree{
  margin-right:1em
}
.slides{
    background-repeat:repeat;
    background-size: cover;
    background-position: center;
    font-size:6vw;
    font-weight: bold;
    border: 2px solid whitesmoke;
}

div .q-slider-toolbar{
opacity: 1;
padding:0
}
.card-content{
  padding-top:0.3em;
  padding-bottom:0px
}
</style>
