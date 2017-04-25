<template>

 <q-layout>
  <!-- Header -->
  <div slot="header" class="toolbar">
    <!-- opens left-side drawer using its ref -->
    <button class="hide-on-drawer-visible" @click="$refs.leftDrawer.open()">
      <i>menu</i>
    </button>
    <q-toolbar-title :padding="3">
      Title
    </q-toolbar-title>
    <!-- opens right-side drawer using its ref -->
    <button class="hide-on-drawer-visible" @click="$refs.rightDrawer.open()">
        <i>menu</i>
      </button>
  </div>
  <!-- Navigation Tabs -->
  <q-tabs slot="navigation">
    <q-tab icon="mail" route="/layout" exact replace>Mails</q-tab>
    <q-tab icon="alarm" route="/layout/alarm" exact replace>Alarms</q-tab>
    <q-tab icon="help" route="/layout/help" exact replace>Help</q-tab>
  </q-tabs>
  <!-- Left-side Drawer -->
  <q-drawer ref="leftDrawer">
    <div class="list no-border platform-delimiter">
      <q-drawer-link  icon="mail" :to="{path: 'Error404', exact: true}">
      Sent mail
      </q-drawer-link>
    </div>
  </q-drawer>
  <!-- IF USING subRoutes only: -->
  <router-view class="layout-view"></router-view>
  <!-- OR ELSE, IF NOT USING subRoutes: -->
  <div class="layout-view"></div>
  <!-- Right-side Drawer -->
  <q-drawer ref="rightDrawer" :right-side="true">
  <div class="list platform-delimiter">
    <div class="item">
      <div class="item-content">
        List Item
      </div>
    </div>
    
  </div>
  </q-drawer>
  <!-- Footer -->
  <div slot="footer" class="toolbar">
  </div>
</q-layout>
</template>
<script>
export default {
  methods: {
  }
}
</script>


<<style lang="styl" scoped>
  
</style>
