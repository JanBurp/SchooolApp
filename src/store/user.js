import { Storage } from '@capacitor/storage';

export default {
    namespaced: true,
    state: {
        token : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3Rkb2NlbnQiLCJwYXNzd29yZCI6IlRlc3REb2NlbnQxIn0.m-2EKJVppjJsq0lNKWQhvmTssH2fofH5b6dcDze9soQ',
        scholen: [
            // {
            //   "id": 3,
            //   "str_title": "Develop",
            //   "b_free_account": false,
            //   "str_code": "Develop_2.0",
            //   "b_demo": true,
            //   "url_url": "https://develop.schoool.nl/",
            //   "media_logo": "https://schoool.nl/_media/logos_scholen/schoool_develop_App.gif",
            //   "rgb_achtergrond": "#FFFFFF"
            // },
        ],
    },

    getters : {

        hasScholen(state) {
            return state.scholen.length > 0;
        },

        getScholen(state) {
            return state.scholen;
        },

    },

    mutations: {

        _setScholen(state,data) {
            state.scholen = data;
        },

    },

    actions: {

        loadStoredSchools({commit}) {
            Storage.get({ key: 'scholen' }).then(function(data){
                let value = JSON.parse(data.value);
                commit('_setScholen',value);
            });
        },

        deleteStoredSchool({state},id) {
            let scholen = state.scholen;
            let index = scholen.findIndex( e=>e.id==id);
            if (index>=0) {
                scholen.splice(index,1);
                Storage.set({
                    key:     'scholen',
                    value:    JSON.stringify(scholen),
                });
            }
        },

        addStoredSchool({state},school) {
            if (state.scholen==null) {
                state.scholen = [];
            }
            state.scholen.unshift(school);
            Storage.set({
                key:     'scholen',
                value:    JSON.stringify(state.scholen),
            });
        },

    },
}
