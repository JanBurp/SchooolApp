<template>
  <ion-app>
    <ion-menu side="start" content-id="main-content">
      <ion-list>
        <template v-for="(route,index) in menu" :key="index">
          <ion-item :color="itemClass(route)" button :detail="false">
            <schoool-icon v-if="route.meta.icon" :name="route.meta.icon" :class="iconClass(route)"></schoool-icon>
            <ion-label @click="navigate(url(route.path))">{{route.meta.title}}</ion-label>
            <icon v-if="route.meta.has_sub" :name="submenuIcon(index)" @click="openSub(index)"></icon>
          </ion-item>
          <ion-list v-if="route.sub" :id="'sub-'+index" class="sub-menu" :class="subMenuClass(index)">
            <ion-item v-for="(route,index) in route.sub" :key="index" :color="itemClass(route)" button :detail="false">
              <ion-label :class="itemActiveClass(route)" @click="navigate(url(route.path))">{{route.meta.title}}</ion-label>
            </ion-item>
          </ion-list>
        </template>
      </ion-list>
    </ion-menu>

    <ion-router-outlet id="main-content"></ion-router-outlet>

  </ion-app>
</template>

<script>
import { defineComponent } from 'vue';
import { menuController } from '@ionic/vue';
export default defineComponent({
  name: 'App',

  data: function() {
    return {
      openSubs : [],
    };
  },

  watch: {
    '$route.path': function() {
      this.setOpenSubs();
    },
  },

  mounted() {
    this.setOpenSubs();
  },

  computed : {

    menu() {
      let routes = this.$router.getRoutes();
      routes = routes.filter( r => r.path!=='/' );
      routes = window._.sortBy(routes,'meta.order');

      let menu = routes.filter( r => !r.meta.is_sub );
      for (var i = 0; i < menu.length; i++) {
        let menuItem = menu[i];
        if (menuItem.meta.has_sub) {
          let sub = routes.filter( r => r.meta.is_sub==menuItem.name );
          menuItem.sub = sub;
        }
      }

      return menu;
    },

    currentRoute() {
      return this.$route;
    },

  },

  methods : {

    setOpenSubs() {
      let path = this.$route.path.replace(/(\/.*?)\/.*/g, "$1");
      let idx = this.menu.findIndex( i=>i.path.indexOf(path)>=0);
      let id = 'sub-'+idx;
      if (idx>0) {
        this.openSubs = [id];
      }
    },

    url(path) {
      path = path.replace('/:id_type?','');
      return path;
    },

    navigate(url) {
      menuController.close();
      this.$router.push(url);
    },

    itemClass(route) {
      if (route.meta.is_sub) {
        return 'primary';
      }
      else {
        return '';
      }
    },

    itemActiveClass(route) {
      if (this.$route.path == route.path) {
        return 'active';
      }
      return '';
    },

    iconClass(route) {
      if (route.name==this.currentRoute.name) {
        return 'app-background-color-blauw app-color-wit circle';
      }
      else {
        return 'app-color-blauw';
      }
    },


    openSub(index) {
      let id = 'sub-'+index;
      let idx = this.openSubs.indexOf(id);
      if (idx>=0) {
        this.openSubs.splice(idx,1);
      }
      else {
        this.openSubs.push(id);
      }
    },

    submenuIcon(index) {
      let id = 'sub-'+index;
      let idx = this.openSubs.indexOf(id);
      if (idx>=0) {
        return 'chevron-up-outline';
      }
      return 'chevron-down-outline';
    },

    subMenuClass(index) {
      let id = 'sub-'+index;
      let idx = this.openSubs.indexOf(id);
      if (idx>=0) {
        return 'open';
      }
      else {
        return 'closed';
      }
    },

  },



});
</script>
