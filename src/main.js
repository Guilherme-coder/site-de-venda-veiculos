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

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/anunciar', component: Advertise },
  { path: '/carros/:id', name: 'showCar', component: CarDetail },
  { path: '/veiculos/:id', name: 'showMotorcycle', component: MotorcycleDetail }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
