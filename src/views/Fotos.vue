<template>
  <ion-page>
    <template v-if="!zoom">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Foto's</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <schoool-nocontent v-if="noItems"></schoool-nocontent>
        <template v-else>
          <div class="grid">
            <div class="grid-square" v-for="(item,index) in items" :key="index">
              <div class="grid-content">
                <schoool-item-image :image="item" size="normal" :cropped="true" @click="zoomFoto(index)"></schoool-item-image>
              </div>
            </div>
          </div>
        </template>
        <ion-infinite-scroll v-if="!loadedAll" @ionInfinite="loadNext($event)" threshold="200px" id="infinite-scroll">
          <schoool-load-more></schoool-load-more>
        </ion-infinite-scroll>
        <schoool-load-more v-else :more="false"></schoool-load-more>
      </ion-content>
    </template>

    <template v-else>
      <ion-header>
        <ion-toolbar>
          <ion-buttons class="ion-justify-content-between">
            <schoool-icon name="r" class="app-color-wit" @click="zoomFoto(0)"></schoool-icon>
            <schoool-icon name="download" class="app-color-wit" @click="download()"></schoool-icon>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="zoom-container">
          <ion-slides :options="slideOpts" @ionSlideDidChange="slideDidChange">
            <ion-slide v-for="(item,index) in items" :key="index">
              <schoool-item-image :image="item" size="normal"></schoool-item-image>
            </ion-slide>
          </ion-slides>
        </div>
      </ion-content>
    </template>

  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters,mapMutations,mapActions } from 'vuex';
import {itemsMixin} from "../mixins/items";

export default defineComponent({
  name: 'Foto\'s',
  mixins : [itemsMixin],

  data : function() {
    return {
      zoom : false,
      slideOpts : {
        initialSlide : 0,
      },
      activeSlide : 0,
    };
  },

  created() {
    this.setType('fotos');
    this.loadData();
  },

  computed : {
    ...mapGetters('fotos',{
      noItems : 'noItems',
      getItems : 'getItems',
      loadedAll : 'loadedAll',
    }),

    items() {
      return this.getItems();
    },

  },

  methods: {
    ...mapMutations('fotos',{
      setType: 'setType',
    }),
    ...mapActions('fotos',{
      loadData: 'loadData',
      loadMore: 'loadMore',
    }),

    zoomFoto(item) {
      this.zoom = !this.zoom;
      this.slideOpts.initialSlide = item;
    },

    slideDidChange(event) {
      let swiper = event.target;
      let self = this;
      swiper.getActiveIndex().then(function(index){
        self.activeSlide = index;
      });
    },

    download() {
      let item = this.items[this.activeSlide];
      console.log('download',this.activeSlide,item);
    },

  },

});
</script>

<style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
    width:100%;
  }

  .grid-square {
    position: relative;
    flex-basis: calc(25%);
    box-sizing: border-box;
  }

  .grid-square::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  .grid-content {
    position: absolute;
    top: 0; left: 0;
    padding:2px;
    height: 100%;
    width: 100%;
    overflow:hidden;
  }

  .zoom-container {
    width:100%;
    height: 100%;
    background-color: #000;
    color:#FFF;
  }

  .swiper-slide {
    margin:auto;
  }

</style>
