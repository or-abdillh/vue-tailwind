import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home.vue')
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
