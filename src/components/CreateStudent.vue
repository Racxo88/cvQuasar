<template>
  <div class='layout-content column justify-center text-light items-center scroll' id="flat">
    <div class="height-1of4">
    <img  src="../assets/Avatars/M-001.png">
    </div>
    <div class='mainColumn column height-3of4'>
      <input class='text-light entry' v-model="student.name" placeholder="Name">
      <input class='text-light entry' v-model="student.lastName" placeholder="Last name">
      <input class='text-light entry' v-model="student.country" placeholder="Country">
      <q-datetime
        class='text-light birthday entry'
        v-model="student.birthday"
        type="date"
        placeholder="Birthday"
      >
      </q-datetime>
      <div class=" radiusPanel row justify-between">  
        <label>
          <q-radio class='blue' v-model="student.genre" val="male"></q-radio>
        Male
        </label>
        <label>
          <q-radio class='pink' v-model="student.genre" val="female"></q-radio>
          Female
        </label>
        
        <label>
          <q-radio class='purple' v-model="student.genre" val="Trans"></q-radio>
          Transexual
        </label>
      </div>
      <button v-on:click="doCreateStudent" id="SignInButton" class=" strong text-dark bg-light push ">
                Create student
      </button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'quasar'
import api from '../../services/api'
export default {
  data () {
    return {
      student: {
        name: undefined,
        lastName: undefined,
        country: undefined,
        birthday: undefined,
        genre: undefined
      }
    }
  },
  methods: {
    doCreateStudent () {
      api.createStudent(this.student)
      .then((response) => {
        console.log(response)
        Toast.create.positive({
          html: 'Student created!',
          timeout: 2500,
          button: {
            color: '#000'
          }
        })
      })
      .catch(() => {
        Toast.create.negative({
          html: 'Error creating student. Try again later.',
          timeout: 2500,
          button: {
            color: '#000'
          }
        })
      })
    }
  }
}
</script>

<style>
.mainColumn{
  width:80%
}
.radiusPanel{
  padding-top:2em;
  padding-bottom:2em
}
.birthday{
  min-height:35px
}
.entry:focus{
  color:black!important
}
</style>
