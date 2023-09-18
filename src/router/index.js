import { createRouter, createWebHistory } from 'vue-router'
import { setSessionToken } from '../auth'

const isAuthenticated = () => {
  return sessionStorage.getItem('accessToken')
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: { guest: true }
    },
    {
      path: '/secure',
      name: 'secure',
      component: () => import('../views/SecureView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const auth = isAuthenticated()
  if (!auth) {
    await fetch('http://localhost:3000/login/refresh', {
      method: 'POST',
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((data) => {
        setSessionToken(data)
      })
      .catch(() => {})
  }
  if (isAuthenticated() && to.name === 'login') {
    next('/')
    return
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthenticated()) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
