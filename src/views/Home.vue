<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <img src="assets/img/uitloggen-wit.svg" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-grid class="app-home-item-grid">
      <ion-row>
        <ion-col>
          <schoool-logo :logo="getLogo"></schoool-logo>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col router-link="/actueel" class="app-home-item app-home-item-actueel app-background-color-rood">
          <div>
            <img src="assets/img/actueel-rood.svg" />
            <p>Actueel</p>
          </div>
        </ion-col>
        <ion-col router-link="/blogs" class="app-home-item app-home-item-blogs app-background-color-blauw">
          <div>
            <img src="assets/img/groepen-blauw.svg" />
            <p>Groepsblogs</p>
          </div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col router-link="/kalender" class="app-home-item app-home-item-kalender app-background-color-grijs">
          <div>
            <img src="assets/img/kalender-grijs.svg" />
            <p>Kalender</p>
          </div>
        </ion-col>
        <ion-col router-link="/fotos" class="app-home-item app-home-item-fotos app-background-color-geel">
          <div>
            <img src="assets/img/fotos-geel.svg" />
            <p>Foto's</p>
          </div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col router-link="/profiel" class="app-home-profiel">
            <schoool-icon name="profiel" class="app-color-blauw"></schoool-icon>
            <ion-label color="primary">Profiel</ion-label>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-page>
</template>


<script>
import { defineComponent } from 'vue';
import { mapGetters,mapActions } from 'vuex';
export default defineComponent({
  name: 'Home',

  created() {
    this.loadSchool('Develop_2.0');
    // console.log('SCHOOL', this.$store.state.school.str_code, this.getHash );
  },

  computed : {
    ...mapGetters('school',{
      getLogo : 'getLogo',
    }),
  },
  methods : {
    ...mapActions('school',{
      loadSchool : 'loadSchool',
    }),
  },

});
</script>

<style scoped>

  .buttons-first-slot img {
    height:1.5rem;
    width:1.5rem;
  }

  .app-home-item {
    display: block;
    position: relative;
    width:10rem;
    height: 10rem;
  }
  .app-home-item div {
    display: block;
    position: absolute;
    width:100%;
    height: 100%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
  .app-home-item div img {
    position: absolute;
    width: 50%;
    top:20%;
    left:25%;
  }
  .app-home-item div p {
    position: absolute;
    bottom:8%;
    width: 100%;
    color:#FFF;
    text-align: center;
  }

  .app-home-profiel {
    text-align:center;
    width:auto;
    position: absolute;
    bottom:1rem;
    left:50%;
    transform: translateX(-50%);
  }
  .app-home-profiel .schoool-icon {
    margin:auto;
  }

</style>
