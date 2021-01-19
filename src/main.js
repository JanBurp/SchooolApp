import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';

import App from './App.vue'
import router from './router';

// Register all Ion components
import {
  IonApp,
  IonButtons,
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRouterOutlet,
  IonRow,
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


const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});

// Register all Ion components
app.component('ion-app',IonApp);
app.component('ion-buttons',IonButtons);
app.component('ion-col',IonCol);
app.component('ion-grid',IonGrid);
app.component('ion-header',IonHeader);
app.component('ion-icon',IonIcon);
app.component('ion-item',IonItem);
app.component('ion-label',IonLabel);
app.component('ion-list',IonList);
app.component('ion-menu',IonMenu);
app.component('ion-menu-button',IonMenuButton);
app.component('ion-menu-toggle',IonMenuToggle);
app.component('ion-router-outlet',IonRouterOutlet);
app.component('ion-row',IonRow);
app.component('ion-title',IonTitle);
app.component('ion-toolbar',IonToolbar);

// Register all App components
let componentFiles = require.context('./components', true, /\.vue$/i);
componentFiles.keys().map(function(key){
  var name = key.split('/').pop().split('.')[0];
  app.component(name, componentFiles(key).default);
});


