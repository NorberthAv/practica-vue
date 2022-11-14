import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import router2 from './rutasExample.js'

let routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
  
]

routes = routes.concat(router2)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
