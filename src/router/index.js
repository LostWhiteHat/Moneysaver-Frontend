import { createRouter, createWebHistory } from 'vue-router'

const isLoggedIn = () => {
  return sessionStorage.getItem('accessToken')
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/secure',
      name: 'secure',
      component: () => import('../views/SecureView.vue')
    }
  ]
})

export default router
