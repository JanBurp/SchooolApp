import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/actueel',
    name: 'actueel',
    component: () => import('@/views/Actueel.vue'),
  },
  {
     path: '/blogs',
     name: 'blogs',
     component: () => import('@/views/Blogs.vue'),
  },
  {
     path: '/kalender',
     name: 'kalender',
     component: () => import('@/views/Kalender.vue'),
  },
  {
     path: '/fotos',
     name: 'fotos',
     component: () => import('@/views/Fotos.vue'),
  },
  {
     path: '/profiel',
     name: 'profiel',
     component: () => import('@/views/Profiel.vue'),
  },
  {
     path: '/profiel/nieuwsbrief',
     name: 'nieuwsbrief',
     component: () => import('@/views/Nieuwsbrief.vue'),
  },
  {
     path: '/profiel/privacy',
     name: 'privacy',
     component: () => import('@/views/Privacy.vue'),
  },
  {
     path: '/profiel/adres',
     name: 'adres',
     component: () => import('@/views/Adres.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
