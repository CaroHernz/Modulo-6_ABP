import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ABP1View from '../views/ABP1View.vue'
import ABP2View from '../views/ABP2View.vue'
import ABP3View from '../views/ABP3View.vue'
import ABP4View from '../views/ABP4View.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/abp1',
    name: 'abp1',
    component: ABP1View
  },
  {
    path: '/abp2',
    name: 'abp2',
    component: ABP2View
  },
  {
    path: '/abp3',
    name: 'abp3',
    component: ABP3View
  },
  {
    path: '/abp4',
    name: 'abp4',
    component: ABP4View
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router