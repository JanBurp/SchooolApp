<template>
  <ion-page id="main-content">
    <ion-content>

        <ion-grid>
            <ion-row>
                <ion-col router-link="/profiel" class="app-profiel">
                    <schoool-icon name="profiel-lach" class="app-color-blauw"></schoool-icon>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-item-sliding v-for="school in scholen" :key="school.id">
                    <ion-item>
                        <ion-img :src="school.media_logo"></ion-img>
                    </ion-item>

                    <ion-item-options side="end">
                        <ion-item-option color="danger" @click="deleteStoredSchool(school.id)">Verwijder</ion-item-option>
                    </ion-item-options>
                </ion-item-sliding>
            </ion-row>

            <ion-row>
                <p>Schoool toevoegen? Voer de inlogcode van een andere school in:</p>
            </ion-row>

        </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters,mapActions } from 'vuex';
export default defineComponent({
    name: 'SelectSchool',

    computed : {
        ...mapGetters('user',{
            hasScholen:'hasScholen',
            scholen : 'getScholen',
        }),

    },

    created() {
        this.loadStoredSchools();
    },

    methods : {
        ...mapActions('user',{
            loadStoredSchools : 'loadStoredSchools',
            deleteStoredSchool : 'deleteStoredSchool',
        }),

    },

});
</script>

<style scoped>
    .app-profiel {
      text-align:center;
      width:auto;
      position: absolute;
      bottom:1rem;
      left:50%;
      transform: translateX(-50%);
    }
    .app-profiel .schoool-icon {
      margin:auto;
    }

</style>
