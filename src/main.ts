// App & Vue
import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';
import App from './App.vue'

import {store} from './store/store.js';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
/* Theme variables */
import './theme/variables.css';
/* App Styling */
import './theme/schoool-icons.css';
import './theme/app.css';


/* Router */
import router from './router/router.js';

const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(store);

/* Add dynamic routes (actueel/blog) */
store.dispatch('school/loadSchoolInfo').then(function(){

    // actueel
    const types:any[] = store.getters['school/getActueelTypes'];
    for (let i = 0; i < types.length; i++) {
        const item = types[i];
        const subRoute = {
            path: '/actueel/'+item['id'],
            name: 'actueel_'+item['uri'],
            meta: {
                title :item['str_title'],
                order: 11 + i,
                is_sub : 'actueel',
            },
            component: () => import('@/views/Actueel.vue'),
        };
        router.addRoute(subRoute);
    }

    // blog
    const groepen:any[] = store.getters['school/getGroepen'];
    for (let i = 0; i < groepen.length; i++) {
        const item = groepen[i];
        const subRoute = {
            path: '/blogs/'+item['id'],
            name: 'blogs_'+item['uri'],
            meta: {
                title :item['str_title'],
                order: 21 + i,
                is_sub : 'blogs',
            },
            component: () => import('@/views/Blogs.vue'),
        };
        router.addRoute(subRoute);
    }

    /* Routes ready -> mount app */
    router.isReady().then(() => {
        app.mount('#app');
    });
});



// Register all Ion components globaly
import {IonApp,IonButtons,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonCol,IonContent,IonGrid,IonHeader,IonIcon,IonImg,IonInfiniteScroll,IonInfiniteScrollContent,IonItem,IonLabel,IonList,IonMenu,IonMenuButton,IonMenuToggle,IonPage,IonRouterOutlet,IonRow,IonSlide,IonSlides,IonTitle,IonToolbar,} from '@ionic/vue';
app.component('ion-app',IonApp);
app.component('ion-buttons',IonButtons);
app.component('ion-card',IonCard);
app.component('ion-card-content',IonCardContent);
app.component('ion-card-header',IonCardHeader);
app.component('ion-card-title',IonCardTitle);
app.component('ion-col',IonCol);
app.component('ion-content',IonContent);
app.component('ion-grid',IonGrid);
app.component('ion-header',IonHeader);
app.component('ion-icon',IonIcon);
app.component('ion-img',IonImg);
app.component('ion-infinite-scroll',IonInfiniteScroll);
app.component('ion-infinite-scroll-content',IonInfiniteScrollContent);
app.component('ion-item',IonItem);
app.component('ion-label',IonLabel);
app.component('ion-list',IonList);
app.component('ion-menu',IonMenu);
app.component('ion-menu-button',IonMenuButton);
app.component('ion-menu-toggle',IonMenuToggle);
app.component('ion-page',IonPage);
app.component('ion-router-outlet',IonRouterOutlet);
app.component('ion-row',IonRow);
app.component('ion-slide',IonSlide);
app.component('ion-slides',IonSlides);
app.component('ion-title',IonTitle);
app.component('ion-toolbar',IonToolbar);

// Register all App components
const componentFiles = require.context('./components', true, /\.vue$/i);
componentFiles.keys().map(function(key:any){
    const name = key.split('/').pop().split('.')[0];
    app.component(name, componentFiles(key).default);
});


