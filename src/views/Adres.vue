<template>
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Adresgegeven</ion-title>
      </ion-toolbar>
    </ion-header>
  </div>
</template>


<script>
import { IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: { IonHeader, IonTitle, IonToolbar },

  data: function() {
  },
});
</script>

<style scoped>
</style>
