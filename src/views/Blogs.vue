<template>
  <ion-page id="main-content">
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
        <ion-card class="schoool-card" v-for="item in items" :key="item.id"  @click="openItem(item)">
          <ion-card-header>
            <ion-card-title>{{item.str_title}}</ion-card-title>
            <schoool-item-groep>{{groepsTitle(item.groep)}}</schoool-item-groep>
            <schoool-item-date>{{item.dat_date}}</schoool-item-date>
          </ion-card-header>
          <ion-card-content>
            <schoool-item-image v-if="hasImage(item)" :image="firstImage(item)"></schoool-item-image>
            <schoool-item-text :text="item.txt_text" :small="true"></schoool-item-text>
          </ion-card-content>
        </ion-card>
      </template>
      <ion-infinite-scroll v-if="!loadedAll" @ionInfinite="loadNext($event)" threshold="200px" id="infinite-scroll">
        <schoool-load-more></schoool-load-more>
      </ion-infinite-scroll>
      <schoool-load-more v-else :more="false"></schoool-load-more>
    </ion-content>
  </ion-page>
</template>



<script>
import { defineComponent } from 'vue';
import { mapGetters,mapMutations,mapActions } from 'vuex';
import {itemsMixin} from "../mixins/items";
export default defineComponent({
  name: 'Blogs',
  mixins : [itemsMixin],

  created() {
    this.setType('blogs');
    this.loadData();
  },

  computed : {
    ...mapGetters('blogs',{
      noItems : 'noItems',
      getItems : 'getItems',
      loadedAll : 'loadedAll',
    }),
    ...mapGetters('school',{
      getGroepTitleByUri : 'getGroepTitleByUri',
      getGroepTitleById : 'getGroepTitleById',
    }),

    items() {
      return this.getItems(this.id_type);
    },

    title() {
      if (!isNaN(this.id_type) && this.id_type!='') {
        return this.getGroepTitleById(this.id_type);
      }
      return 'Groepsblog';
    },

  },

  methods: {
    ...mapMutations('blogs',{
      setType: 'setType',
    }),
    ...mapActions('blogs',{
      loadData: 'loadData',
      loadMore: 'loadMore',
    }),

    groepsTitle(groep) {
      return this.getGroepTitleByUri(groep);
    },

    openItem(item) {
      this.$router.push({name:'blog_item',params:{ id:item.id, id_type:this.id_type }});
    },

  },

});
</script>

<style scoped>
</style>
