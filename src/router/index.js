import Vue from 'vue'
import VueRouter from 'vue-router'
// import Auth from '@/views/Auth'
// import Main from '@/views/Main'
// import Favorite from '@/views/Favorite'
function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: lazyLoad("Auth")
  },
  {
    path: '/main',
    component: lazyLoad("Main")
  },
  {
    path: '/favorite',
    component: lazyLoad("Favorite")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
