<template>
  <ion-app>
    <ion-menu side="start" content-id="main-content">
      <ion-list>

        <ion-item v-for="(route,index) in routes" :key="index">
          <schoool-icon :name="route.meta.icon" :class="iconClass(route)"></schoool-icon>
          <ion-label><ion-router-link :href="route.path">{{route.meta.title}}</ion-router-link></ion-label>
        </ion-item>

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
    };
  },

  mounted() {
    // console.log(this.currentRoute, this.routes);
  },

  computed : {

    routes() {
      let routes = this.$router.getRoutes();
      routes = routes.filter( r => r.path!=='/' );
      return window._.sortBy(routes,'meta.order');
    },
    currentRoute() {
      return this.$route;
    },

  },

  methods : {

    iconClass(route) {
      if (route.name==this.currentRoute.name) {
        return 'app-background-color-blauw app-color-wit circle';
      }
      else {
        return 'app-color-blauw';
      }
    },

  },



});
</script>
