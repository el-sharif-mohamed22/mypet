import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: () => import('@/views/SignUpView.vue'),
      props: true
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: () => import('@/views/SignInView.vue'),
      props: true
    },
    {
      path: '/AdopterHome',
      name: 'AdopterHome',
      component: () => import('@/views/AdopterHomeView.vue'),
      props: true
    },
    {
      path: '/AdminHome',
      name: 'AdminHome',
      component: () => import('@/views/AdminHomeView.vue')
    },
    {
      path: '/StaffHome',
      name: 'StaffHome',
      component: () => import('@/views/StaffHomeView.vue')
    }
  ]
})

export default router
