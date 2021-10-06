import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Home from './pages/Home/Home.vue';
import Login from './pages/Login/Login.vue';
import Advertise from './pages/Advertise/Advertise.vue';
import CarDetail from './pages/VehicleDetail/CarDetail.vue';
import MotorcycleDetail from './pages/VehicleDetail/MotorcycleDetail.vue';
import './assets/css/reset.css';
import './assets/css/overwrite.css';

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(VueResource)
Vue.http.headers.common.Authorization = `${localStorage.getItem('token')}`

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/login', name: 'login',component: Login },
  { path: '/anunciar', component: Advertise },
  { path: '/carros/:id', name: 'showCar', component: CarDetail },
  { path: '/veiculos/:id', name: 'showMotorcycle', component: MotorcycleDetail }
]

const router = new VueRouter({
  routes
})
var isAuthenticated = false

router.beforeEach((to, from, next) => {
  if(localStorage.getItem('token') != null) isAuthenticated = true
  else isAuthenticated = false

  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  else next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
