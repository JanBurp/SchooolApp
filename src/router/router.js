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
    meta: {
      title :'Home',
      icon: 'home',
      order: 0,
    },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/actueel',
    name: 'actueel',
    meta: {
      title :'Actueel',
      icon: 'actueel',
      order: 1,
    },
    component: () => import('@/views/Actueel.vue'),
  },
  {
     path: '/blogs',
     name: 'blogs',
     meta: {
       title :'Groepsblogs',
       icon: 'blog',
       order: 2,
     },
     component: () => import('@/views/Blogs.vue'),
  },
  {
     path: '/kalender',
     name: 'kalender',
     meta: {
       title :'Kalender',
       icon: 'kalender',
       order: 3,
     },
     component: () => import('@/views/Kalender.vue'),
  },
  {
     path: '/fotos',
     name: 'fotos',
     meta: {
       title :'Fotos',
       icon: 'fotos',
       order: 4,
     },
     component: () => import('@/views/Fotos.vue'),
  },
  {
     path: '/profiel',
     name: 'profiel',
     meta: {
       title :'Profiel',
       icon: 'profiel',
       order: 5,
     },
     component: () => import('@/views/Profiel.vue'),
  },
    // {
    //    path: '/profiel/nieuwsbrief',
    //    name: 'nieuwsbrief',
    //    meta: {
    //      title :'Nieuwsbrief',
    //      icon: 'nieuwsbrief',
    //      order: 6,
    //    },
    //    component: () => import('@/views/Nieuwsbrief.vue'),
    // },
    // {
    //    path: '/profiel/privacy',
    //    name: 'privacy',
    //    meta: {
    //      title :'Privacy',
    //      icon: 'privacy',
    //      order: 7,
    //    },
    //    component: () => import('@/views/Privacy.vue'),
    // },
    // {
    //    path: '/profiel/adres',
    //    name: 'adres',
    //    meta: {
    //      title :'Adres',
    //      icon: 'adres',
    //      order: 8,
    //    },
    //    component: () => import('@/views/Adres.vue'),
    // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
