<template>
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <schoool-nocontent v-if="noItems"></schoool-nocontent>
      <template v-else>
        <ion-card class="schoool-card" v-for="item in items" :key="item.id">
          <ion-card-header>
            <ion-card-title>{{item.str_title}}</ion-card-title>
            <schoool-item-category>{{item.type}}</schoool-item-category>
            <schoool-item-date>{{item.dat_date}}</schoool-item-date>
          </ion-card-header>
          <ion-card-content>
            <schoool-item-image v-if="hasImage(item)" :image="firstImage(item)"></schoool-item-image>
            <schoool-item-text :text="item.txt_text"></schoool-item-text>
          </ion-card-content>
        </ion-card>
      </template>
      <ion-infinite-scroll v-if="!loadedAll" @ionInfinite="loadNext($event)" threshold="200px" id="infinite-scroll">
        <schoool-load-more></schoool-load-more>
      </ion-infinite-scroll>
      <schoool-load-more v-else :more="false"></schoool-load-more>
    </ion-content>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters,mapMutations,mapActions } from 'vuex';
import {itemsMixin} from "../mixins/items";
export default defineComponent({
  name: 'Actueel',
  mixins : [itemsMixin],

  created() {
    this.setType('actueel');
    this.loadData();
  },

  computed : {
    ...mapGetters('actueel',{
      noItems : 'noItems',
      getItems : 'getItems',
      loadedAll : 'loadedAll',
    }),
    ...mapGetters('school',{
      getActueelTypeTitle : 'getActueelTypeTitle',
    }),

    items() {
      return this.getItems(this.id_type);
    },

    title() {
      if (!isNaN(this.id_type)) {
        return this.getActueelTypeTitle(this.id_type);
      }
      return 'Actueel';
    },

  },

  methods: {
    ...mapMutations('actueel',{
      setType: 'setType',
    }),
    ...mapActions('actueel',{
      loadData: 'loadData',
      loadMore: 'loadMore',
    }),
  },

});
</script>

<style scoped>
</style>
