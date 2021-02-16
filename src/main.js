require('./globals.js');

// App & Vue
import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';
import App from './App.vue'
import {store} from './store/store.js';

// Global API
window.Api = {
  get : function(url) {
    this._request = {
      url    : url,
      method : 'GET',
    };
    return this.call(this._request);
  },
  post : function(url,data) {
    this._request = {
      url    : url,
      method : 'POST',
      data   : data,
    };
    return this.call(this._request);
  },
  patch : function(url,id,data) {
    if ( window._.isUndefined(data) && window._.isObject(id)) {
      data = id;
    }
    else {
      url = url + '/' + id;
    }
    this._request = {
      url    : url,
      method : 'PATCH',
      data   : data,
    };
    return this.call(this._request);
  },
  delete : function(url,id) {
    this._request = {
      url    : url + '/' + id,
      method : 'DELETE',
    };
    return this.call(this._request);
  },
  deletePOST : function(url,data) {
    this._request = {
      url    : url,
      method : 'POST',
      data : data,
    };
    return this.call(this._request);
  },
  call : function(request) {
    if (request.url.substr(0,4)!=='http') {
      request.url = window.api_url + request.url;
    }
    request.crossdomain = true;
    request.transformResponse = function(data) {
      return JSON.parse(data,function (key, value) {
        // if (['startdate','enddate','start','dtstart','until','due_at'].indexOf(key)>=0) {
        //   const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*Z$/; //2020-10-26T10:00:00.000Z
        //   if (typeof value === "string" && dateFormat.test(value)) {
        //     return new Date(value);
        //   }
        // }
        return value;
      });
    };
    return window.axios.request( request )
        .then(function (response) {
          return response;
        }).catch(function (error) {
          if ( error.toString().indexOf('timeout')>=0 ) {
            alert( "De server of uw internetverbinding reageert te traag.\nProbeer het nogmaals (door de pagina te herladen).");
            return Promise.reject({'error':error});
          }
          switch (error.response.status) {
            case 401:
            case 419:
              // Geen rechten, dus naar inlog pagina.
              window.location = "/login";
              break;
            case 429:
              alert( "De server is overbelast.\nProbeer het later nogmaals (door de pagina te herladen).\n\nNeem contact op met de beheerder als dit euvel zich blijft herhalen.\n\n\n" + error );
              break;
            case 404:
            default:
              alert( "Er ging iets mis bij het ophalen of verzenden van data.\nNeem contact op met de beheerder als dit euvel zich blijft herhalen.\n\n\n" + error );
              break;
          }
          return Promise.reject({'error':error});
        }).finally(function () {
        });
  },
};

// Register all Ion components
import {
  IonApp,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRouterOutlet,
  IonRow,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';


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
  let types = store.getters['school/getActueelTypes'];
  for (var i = 0; i < types.length; i++) {
    let item = types[i];
    let subRoute = {
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
  let groepen = store.getters['school/getGroepen'];
  for ( i = 0; i < groepen.length; i++) {
    let item = groepen[i];
    let subRoute = {
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


// Register all Ion components
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
app.component('ion-router-outlet',IonRouterOutlet);
app.component('ion-row',IonRow);
app.component('ion-slide',IonSlide);
app.component('ion-slides',IonSlides);
app.component('ion-title',IonTitle);
app.component('ion-toolbar',IonToolbar);

// Register all App components
let componentFiles = require.context('./components', true, /\.vue$/i);
componentFiles.keys().map(function(key){
  var name = key.split('/').pop().split('.')[0];
  app.component(name, componentFiles(key).default);
});


