import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
	{
		path: '/',
		// redirect: '/home',
		redirect: '/select_school'
	},
	{
		path: '/select_school',
		name: 'select_school',
		component: () => import('@/views/SelectSchool.vue'),
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
			order: 10,
			has_sub : true,
		},
		component: () => import('@/views/Actueel.vue'),
    },
    // Sub actueel_types
    {
		path: '/actueel_item/:id/:id_type?',
		name: 'actueel_item',
		meta: {
			title :'Actueel Item',
			hidden : true,
		},
		component: () => import('@/views/ActueelItem.vue'),
	},


	{
		path: '/blogs',
		name: 'blogs',
		meta: {
			title :'Groepsblogs',
			icon: 'blog',
			order: 20,
			has_sub : true,
		},
		component: () => import('@/views/Blogs.vue'),
	},
	// Sub - groepen
	{
		path: '/blog_item/:id/:id_type?',
		name: 'blog_item',
		meta: {
			title :'Blog Item',
			hidden : true,
		},
		component: () => import('@/views/BlogItem.vue'),
	},


	{
		path: '/kalender',
		name: 'kalender',
		meta: {
			title :'Kalender',
			icon: 'kalender',
			order: 30,
		},
		component: () => import('@/views/Kalender.vue'),
	},
	{
		path: '/fotos',
		name: 'fotos',
		meta: {
			title :'Fotos',
			icon: 'fotos',
			order: 40,
		},
		component: () => import('@/views/Fotos.vue'),
	},
	{
		path: '/profiel',
		name: 'profiel',
		meta: {
			title :'Profiel',
			icon: 'profiel',
			order: 50,
			has_sub : true,
		},
		component: () => import('@/views/Profiel.vue'),
	},

	{
		path: '/profiel/nieuwsbrief',
		name: 'nieuwsbrief',
		meta: {
			title :'Nieuwsbrief instellingen',
			order: 51,
			is_sub : 'profiel',
		},
		component: () => import('@/views/Nieuwsbrief.vue'),
	},
	{
		path: '/profiel/privacy',
		name: 'privacy',
		meta: {
			title :'Privacy instellingen',
			order: 52,
			is_sub : 'profiel',
		},
		component: () => import('@/views/Privacy.vue'),
	},
	{
		path: '/profiel/adres',
		name: 'adres',
		meta: {
			title :'Adresgegevens',
			order: 53,
			is_sub : 'profiel',
		},
		component: () => import('@/views/Adres.vue'),
	},

];


const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
