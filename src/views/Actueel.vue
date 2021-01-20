<template>
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Actueel</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <schoool-nocontent></schoool-nocontent>
    </ion-content>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
export default defineComponent({
  name: 'Actueel',



  created() {
    console.log('mounted');
  },


  methods: {
    ...mapActions('actueel',[
      'loadData',
    ]),
  },


});
</script>

<style scoped>
</style>
