import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './vuex/store'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

var router = new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  routes: [
    { path: '/', component: load('Index'), name: '/' }, // Default
    { path: '/login', component: load('Login'), name: 'Login' }, // Login
    { path: '/home', component: load('Home'), name: 'Home' }, // Home
    { path: '*', component: load('Error404'), name: 'Error404' } // Not found
  ]
})
var privateRoutes = [
  '/',
  'Home'
]
router.beforeEach((to, from, next) => {
  if (!store.state.isLogged && (privateRoutes.indexOf(to.name) > -1)) {
    next('/login')
  }
  else if (store.state.isLogged && to.name === 'Login') {
    next('/home')
  }
  else {
    next()
  }
})
export default router
