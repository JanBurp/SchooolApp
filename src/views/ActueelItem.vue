<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <schoool-icon name="r" class="app-color-wit" @click="closeItem()"></schoool-icon>
        </ion-buttons>
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card class="schoool-card schoool-card-item">
        <ion-card-header>
          <ion-card-title>{{item.str_title}}</ion-card-title>
          <schoool-item-category>{{item.type}}</schoool-item-category>
          <schoool-item-date>{{item.dat_date}}</schoool-item-date>
        </ion-card-header>
        <ion-card-content>
          <ion-slides v-if="item.carousel" :pager="(item.carousel.length>1)" :class="{'has-pager':(item.carousel.length>1)}">
            <ion-slide v-for="(image,index) in item.carousel" :key="index">
              <schoool-item-image :image="image"></schoool-item-image>
            </ion-slide>
          </ion-slides>
          <schoool-item-text :text="item.txt_text"></schoool-item-text>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters,mapMutations,mapActions } from 'vuex';
import {itemsMixin} from "../mixins/items";
export default defineComponent({
  name: 'ActueelItem',
  mixins : [itemsMixin],

  created() {
    this.setType('actueel');
    this.loadData();
  },

  computed : {
    ...mapGetters('actueel',{
      getItemById : 'getItemById',
    }),
    ...mapGetters('school',{
      getActueelTypeTitle : 'getActueelTypeTitle',
    }),

    title() {
      if (!isNaN(this.itemIdType) && this.itemIdType!='') {
        return this.getActueelTypeTitle(this.itemIdType);
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
    }),

  },

});
</script>

<style scoped>
  ion-slides.has-pager {
    padding-bottom:2rem;
  }
</style>
