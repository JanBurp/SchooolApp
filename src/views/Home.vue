<template>
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <img src="assets/img/uitloggen-wit.svg" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-grid class="app-home-item-grid">
      <ion-row>
        <ion-col class="app-home-logo">
          <img src="assets/img/schoool.svg" />
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-router-link href="/actueel">
          <ion-col class="app-home-item app-home-item-actueel app-background-color-rood">
            <div>
              <img src="assets/img/actueel-rood.svg" />
              <p>Actueel</p>
            </div>
          </ion-col>
        </ion-router-link>
        <ion-router-link href="/blogs">
          <ion-col class="app-home-item app-home-item-blogs app-background-color-blauw">
            <div>
              <img src="assets/img/groepen-blauw.svg" />
              <p>Groepsblogs</p>
            </div>
          </ion-col>
        </ion-router-link>
      </ion-row>
      <ion-row>
        <ion-router-link href="/kalender">
          <ion-col class="app-home-item app-home-item-kalender app-background-color-grijs">
            <div>
              <img src="assets/img/kalender-grijs.svg" />
              <p>Kalender</p>
            </div>
          </ion-col>
        </ion-router-link>
        <ion-router-link href="/fotos">
          <ion-col class="app-home-item app-home-item-fotos app-background-color-geel">
            <div>
              <img src="assets/img/fotos-geel.svg" />
              <p>Foto's</p>
            </div>
          </ion-col>
        </ion-router-link>
      </ion-row>
    </ion-grid>

  </div>
</template>


<script>
import { IonHeader, IonToolbar, IonButtons, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: { IonHeader, IonToolbar, IonButtons, IonGrid, IonRow, IonCol },
  data: function() {
    return {}
  },
});
</script>

<style scoped>

  .buttons-first-slot img {
    height:1.5rem;
    width:1.5rem;
  }

  .app-home-logo {
    height: 10rem;
  }
  .app-home-item {
    display: block;
    position: relative;
    width:10rem;
    height: 10rem;
  }
  .app-home-item div {
    display: block;
    position: absolute;
    width:100%;
    height: 100%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
  .app-home-item div img {
    position: absolute;
    width: 50%;
    top:20%;
    left:25%;
  }
  .app-home-item div p {
    position: absolute;
    bottom:8%;
    width: 100%;
    color:#FFF;
    text-align: center;
  }

</style>
