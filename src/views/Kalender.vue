<template>
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Kalender</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <schoool-nocontent></schoool-nocontent>
    </ion-content>
  </div>
</template>



<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Home',
  data: function() {
  },
});
</script>

<style scoped>
</style>
