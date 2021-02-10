<template>
  <ion-app>
    <ion-menu side="start" content-id="main-content">
      <ion-list>

        <template v-for="(route,index) in menu" :key="index">
          <ion-item :color="itemClass(route)" button :detail="false">
            <schoool-icon v-if="route.meta.icon" :name="route.meta.icon" :class="iconClass(route)"></schoool-icon>
            <ion-label><ion-router-link :href="route.path">{{route.meta.title}}</ion-router-link></ion-label>
            <schoool-icon v-if="route.meta.has_sub" name="onder" :class="iconClass(route)" @click="openSub(index)"></schoool-icon>
          </ion-item>

          <ion-list v-if="route.sub" :id="'sub-'+index" class="sub-menu" :class="subMenuClass(index)">
            <ion-item v-for="(route,index) in route.sub" :key="index" :color="itemClass(route)" button :detail="false">
              <ion-label><ion-router-link :href="route.path">{{route.meta.title}}</ion-router-link></ion-label>
            </ion-item>
          </ion-list>

        </template>

      </ion-list>
    </ion-menu>

    <ion-router-outlet></ion-router-outlet>

  </ion-app>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',

  data: function() {
    return {
      openSubs : [],
    };
  },

  mounted() {
    // console.log(this.currentRoute, this.routes);
  },

  computed : {

    menu() {
      let routes = this.$router.getRoutes();
      routes = routes.filter( r => r.path!=='/' );
      routes = window._.sortBy(routes,'meta.order');
      // submenu's
      let menu = [];
      let sub = false;
      let idx = 0;
      for (var i = 0; i < routes.length; i++) {
        let item = routes[i];
        if (item.meta.has_sub || item.meta.is_sub) {
          if (item.meta.has_sub) {
            sub = [];
            idx = menu.push(item) - 1;
          }
          else {
            sub.push(item);
          }
        }
        else {
          if (sub!==false) {
            menu[idx].sub = sub;
          }
          menu.push(item);
          sub = false;
        }
      }
      // is sub at end, then this:
      if (sub!==false) {
        menu[idx].sub = sub;
      }
      return menu;
    },

    currentRoute() {
      return this.$route;
    },

  },

  methods : {

    itemClass(route) {
      if (route.meta.is_sub) {
        return 'primary';
      }
      else {
        return '';
      }
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
