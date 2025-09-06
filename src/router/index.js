import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ABP1 from '@/views/ABP1.vue'
import ABP2 from '@/views/ABP2.vue'
import ABP3 from '@/views/ABP3.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/abp1',
    name: 'abp1',
    component: ABP1
  },
  {
    path: '/abp2',
    name: 'abp2',
    component: ABP2
  },
  {
    path: '/abp3',
    name: 'abp3',
    component: ABP3
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router