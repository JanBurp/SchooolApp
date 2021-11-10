<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Kalender</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <iframe :src="url"></iframe>
    </ion-content>
  </ion-page>
</template>

<script>
import {CONFIG} from '../services/globals.ts';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Kalender',

  data : function() {
    return {
      kalenderHtml : '',
    };
  },

  computed : {
    url() {
      return CONFIG.kalender_url;
    }
  },

});
</script>

<style scoped>
  iframe {
    border:none;
    width:100%;
    height: 100%;
  }
</style>
