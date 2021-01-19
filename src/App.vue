<template>
  <ion-app>
    <ion-menu side="start" content-id="main-content">
      <ion-list>
        <ion-item>
          <ion-icon name="home-outline" slot="start"></ion-icon>
          <ion-label><ion-router-link href="/home">Home</ion-router-link></ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="actueel" slot="start"></ion-icon>
          <ion-label><ion-router-link href="/actueel">Actueel</ion-router-link></ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="blogs" slot="start"></ion-icon>
          <ion-label><ion-router-link href="/blogs">Groepsblogs</ion-router-link></ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="kalender" slot="start"></ion-icon>
          <ion-label><ion-router-link href="/kalender">Kalender</ion-router-link></ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="fotos" slot="start"></ion-icon>
          <ion-label><ion-router-link href="/fotos">Fotos</ion-router-link></ion-label>
        </ion-item>
        <ion-item>
          <ion-icon name="profiel" slot="start"></ion-icon>
          <ion-label><ion-router-link href="/profiel">Profiel</ion-router-link></ion-label>
        </ion-item>
        <ion-item>
          <ion-menu-toggle>
              <ion-item>
                <ion-icon name="nieuwsbrief" slot="start"></ion-icon>
                <ion-label><ion-router-link href="/profiel/nieuwsbrief">Nieuwsbrief Instellingen</ion-router-link></ion-label>
              </ion-item>
              <ion-item>
                <ion-icon name="privacy" slot="start"></ion-icon>
                <ion-label><ion-router-link href="/profiel/privacy">Privacy Instellingen</ion-router-link></ion-label>
              </ion-item>
              <ion-item>
                <ion-icon name="adres" slot="start"></ion-icon>
                <ion-label><ion-router-link href="/profiel/adres">Adresgegevens</ion-router-link></ion-label>
              </ion-item>
          </ion-menu-toggle>
        </ion-item>
      </ion-list>
    </ion-menu>

    <ion-router-outlet></ion-router-outlet>

  </ion-app>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>
