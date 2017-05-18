<template>
  <div class="column full-width " id="flat">
    <div class="card MyDegrees row width-1of2  full-width">
      <div class="card-content column full-width">
        <div class="Headers row bg-primary">
          <label class="text-light width-2of5">Name</label>
          <label class="text-light width-2of5">Status</label>
          <label class="text-light width-1of5"></label>
        </div>
        <div class="Degrees column align-start full-height scroll">
          <div class="oneDegree row justify-around items-center items-center ">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>
          <div class="oneDegree row justify-around items-center">
            <label class="text-light width-2of5">Filology</label>
            <label class="text-light width-2of5">On Progess</label>
            <i class="text-light width-1of5">info</i>
          </div>          
        </div>  
      </div>
    </div>
    <div class="card OtherDegrees width-1of2 row full-width">
      <div class="card-content column full-width">
        <q-slider infinite class="text-white">
          <div slot="slide" class="bg-primary centered">
            Slide 1
          </div>
          <div slot="slide" class="bg-secondary centered">
            Slide 2
          </div>
          
        </q-slider>
      </div>
    </div>
  </div>
</template>

<script>
// import api from '../../services/api'
export default {
  data () {
    return {
      myCourses: undefined,
      otherCourses: undefined
    }
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
  background-color: rgba(FF, FF, FF, 55);
  border: 2px solid whitesmoke;
  border-top:0px
}
.oneDegree{
  min-height: 2em;
}
label{
  font-size:1em
}
</style>
