<template>
  <div class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Groepsblogs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <schoool-nocontent v-if="noItems"></schoool-nocontent>
      <template v-else>
        <ion-card class="schoool-card" v-for="item in items" :key="item.id">
          <ion-card-header>
            <ion-card-title>{{item.str_title}}</ion-card-title>
            <schoool-item-groep>{{item.groep}}</schoool-item-groep>
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
export default defineComponent({
  name: 'Blogs',

  created() {
    this.setType('blogs');
    this.loadData();
  },

  computed : {
    ...mapGetters('blogs',{
      noItems : 'noItems',
      items : 'getItems',
      loadedAll : 'loadedAll',
    }),
  },

  methods: {
    ...mapMutations('blogs',{
      setType: 'setType',
    }),
    ...mapActions('blogs',{
      loadData: 'loadData',
      loadMore: 'loadMore',
    }),

    loadNext(event) {
      this.loadMore().then(function(){
        event.target.complete();
      });
    },

    hasImage(item) {
      return (item.carousel.length>0);
    },

    firstImage(item) {
      return item.carousel[0];
    },

  },

});
</script>

<style scoped>
</style>
