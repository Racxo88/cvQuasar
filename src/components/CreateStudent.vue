<template>
  <div class='layout-content column justify-center text-light items-center scroll' id="flat">
    <div class="height-1of4">
    <img  src="../assets/Avatars/M-001.png">
    </div>
    <div class='mainColumn column height-3of4'>
      <input class='text-light' v-model="student.name" placeholder="Name">
      <input class='text-light' v-model="student.lastName" placeholder="Last name">
      <input class='text-light' v-model="student.country" placeholder="Country">
      <q-datetime
        class='text-light'
        v-model="student.birthday"
        type="date"
        placeholder="Birthday"
      >
      </q-datetime>
      <div class=" radiusPanel row justify-between">  
        <label>
          <q-radio class='blue' v-model="student.genre" val="Male"></q-radio>
        Male
        </label>
        <label>
          <q-radio class='pink' v-model="student.genre" val="Female"></q-radio>
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
</style>
