<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Profiel</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <schoool-nocontent></schoool-nocontent>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Profiel',
});
</script>

<style scoped>
</style>
