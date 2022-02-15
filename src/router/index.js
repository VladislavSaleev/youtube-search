import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/views/Auth'
import Main from '@/views/Main'
import Favorite from '@/views/Favorite'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Auth
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/favorite',
    component: Favorite
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
