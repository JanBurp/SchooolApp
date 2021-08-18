<template>
  <ion-page id="main-content">
    <ion-content>

        <ion-grid>
            <ion-row>
                <ion-col router-link="/profiel" class="app-profiel">
                    <schoool-icon name="profiel-lach" class="app-color-wit"></schoool-icon>
                    <p>&nbsp;</p>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-item-sliding v-for="school in scholen" :key="school.id">
                    <ion-item button @click="gotoSchool(school.id)">
                        <ion-img :src="school.media_logo"></ion-img>
                    </ion-item>

                    <ion-item-options side="end">
                        <ion-item-option color="danger" @click="deleteStoredSchool(school.id)">Verwijder</ion-item-option>
                    </ion-item-options>
                </ion-item-sliding>
            </ion-row>

            <ion-row>
                <ion-text>
                    <p class="app-color-wit">Schoool toevoegen? Voer de inlogcode van een andere school in:</p>
                    <ion-input v-model="schoolCode" placeholder="voer de code van uw school in" class="app-background-color-wit"></ion-input>
                    <ion-button @click="addSchool()" type="submit" color="light" size="small" expand="block" fill="solid">naar school</ion-button>
                </ion-text>
            </ion-row>

        </ion-grid>

    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { alertController } from '@ionic/vue';
import { mapGetters,mapActions } from 'vuex';
export default defineComponent({
    name: 'SelectSchool',

    data : function() {
        return {
            schoolCode : '',
        };
    },

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
            addStoredSchool : 'addStoredSchool',
            deleteStoredSchool : 'deleteStoredSchool',
        }),
        ...mapActions('school',{
            loadSchool : 'loadSchool',
            loadSchoolInfo : 'loadSchoolInfo',
        }),


        gotoSchool(id) {
            let self = this;
            this.loadSchoolInfo().then(function(response){
                self.$router.push({ name: 'home'});
            });
        },

        addSchool() {
            let self = this;
            this.loadSchool(this.schoolCode).then(function(school){
                self.addStoredSchool(school);
                self.schoolCode = '';
            }).catch(function(){
                self.alert({message: 'Helaas is de opgegeven code niet bekend bij ons.'});
            });
        },

        async alert(options) {
            let defaultOptions = {
                header: 'Ongeldige invoer',
                subHeader: '',
                message: '',
                buttons: ['OK'],
            }
            options = {...defaultOptions,...options};
            const alert = await alertController.create(options);
            await alert.present();
        },

    },

});
</script>

<style scoped>

    ion-content::part(background) {
        background-color: var(--app-color-grijs)!important;
    }

    ion-text {
        margin-left: 10%;
        width: 80%;
    }

    .app-profiel {
        text-align:center;
        width:auto;
        left:50%;
        transform: translateX(-50%);
    }
    .app-profiel .schoool-icon {
        margin: auto;
    }
    .app-profiel .schoool-icon:before {
        font-size: 3rem;
    }

</style>
