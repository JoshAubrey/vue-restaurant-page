import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (menu.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menu" */ '../views/Menu.vue')
  },
  {
    path: '/location',
    name: 'Location',
    // route level code-splitting
    // this generates a separate chunk (location.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "location" */ '../views/Location.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
