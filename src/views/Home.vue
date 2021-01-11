<template>
  <ion-app>
    <ion-router>
      <ion-route url="/home" component="page-home"></ion-route>
      <ion-route url="/actueel" component="page-actueel"></ion-route>
      <ion-route url="/blogs" component="page-blogs"  :beforeEnter="isLoggedInGuard" :beforeLeave="hasUnsavedDataGuard"></ion-route>
      <ion-route url="/kalender" component="page-kalender"></ion-route>
      <ion-route url="/fotos" component="page-fotos"></ion-route>
      <ion-route url="/profiel" component="page-profiel"></ion-route>
    </ion-router>


    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar translucent>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-icon name="home" slot="start"></ion-icon>
            <ion-label>Home</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="actueel" slot="start"></ion-icon>
            <ion-label>Actueel</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="blogs" slot="start"></ion-icon>
            <ion-label>Groepsblogs</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="kalender" slot="start"></ion-icon>
            <ion-label>Kalender</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="fotos" slot="start"></ion-icon>
            <ion-label>Fotos</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="profiel" slot="start"></ion-icon>
            <ion-label>Profiel</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{{title}}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-router-outlet></ion-router-outlet>

    </div>
  </ion-app>
</template>



<script>
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  menuController,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
  },

  data: function() {
    return {
      title : 'Menu',

    };
  },

  methods: {
    openMenu() {
      menuController.open();
    },
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
