<template>
  <div class="ion-page" id="main-content">
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
          <div class="grid-square" v-for="item in items" :key="item.id">
            <div class="grid-content">
              <schoool-item-image :image="item" size="normal" :cropped="true"></schoool-item-image>
            </div>
          </div>
        </div>
      </template>
    </ion-content>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters,mapMutations,mapActions } from 'vuex';
import {itemsMixin} from "../mixins/items";

export default defineComponent({
  name: 'Foto\'s',
  mixins : [itemsMixin],

  created() {
    this.setType('fotos');
    this.loadData();
  },

  computed : {
    ...mapGetters('fotos',{
      noItems : 'noItems',
      items : 'getItems',
      loadedAll : 'loadedAll',
    }),
  },

  methods: {
    ...mapMutations('fotos',{
      setType: 'setType',
    }),
    ...mapActions('fotos',{
      loadData: 'loadData',
      loadMore: 'loadMore',
    }),
  },



  data: function() {
  },
});
</script>

<style scoped>
  .grid {
    display: flex;
    flex-wrap: wrap;
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
</style>
