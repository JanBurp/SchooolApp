const md5 = require('js-md5');

const getHash = function(code) {
    let salt = Math.floor(new Date().getTime() / 86400000) + 3 ;
    let hash = md5(salt+code);
    return hash;
}

export default {
    namespaced: true,
    state: {
        schoolLoaded : false,
        str_title: '',
        b_free_account: false,
        // str_code: "Develop_2.0",
        b_demo: false,
        url_url: '',
        media_logo: '',

        infoLoaded : false,
        name:'',
        logo: {},
        rgb_achtergrond:'',
        rgb_highlight:'',
        rgb_kop:'',
        rgb_link:'',
        rgb_tekst:'',

        actueel_types:[],
        groepen:[],

        disclaimer_text:'',
        disclaimer_title:'',
    },

    getters : {
        getHash(state) {
            let code = state.str_code;
            return getHash(code);
        },

        getLogo(state) {
            return state.media_logo;
        },

        getActueelTypes(state) {
            return state.actueel_types;
        },

        getActueelTypeTitle : (state) => (id_type) => {
            let idx = state.actueel_types.findIndex( i=>i.id==id_type );
            if (idx>=0) {
                return state.actueel_types[idx].str_title;
            }
            return '';
        },

        getGroepen(state) {
            return state.groepen;
        },

        getGroepTitleById : (state) => (id_groep) => {
            let idx = state.groepen.findIndex( i=>i.id==id_groep );
            if (idx>=0) {
                return state.groepen[idx].str_title;
            }
            return '';
        },

        getGroepTitleByUri : (state) => (groep) => {
            let idx = state.groepen.findIndex( i=>i.uri==groep );
            if (idx>=0) {
                return state.groepen[idx].str_title;
            }
            return '<no name found>';
        },


    },

    mutations: {
        _setSchool(state,data) {
            state.str_title = data.str_title;
            state.b_free_account =data.b_free_account;
            state.b_demo =data.b_demo;
            state.url_url = data.url_url;
            state.media_logo = data.media_logo;
            state.rgb_achtergrond = data.rgb_achtergrond;
            //
            state.schoolLoaded =  true;
        },

        _setSchoolInfo(state,data) {
            state.name = data.name;
            state.logo = data.logo;
            state.rgb_achtergrond = data.rgb_achtergrond;
            state.rgb_highlight = data.rgb_highlight;
            state.rgb_kop = data.rgb_kop;
            state.rgb_link = data.rgb_link;
            state.rgb_tekst = data.rgb_tekst;
            state.actueel_types = data.actueel_types;
            state.groepen = data.groepen;
            state.disclaimer_text = data.disclaimer_text;
            state.disclaimer_title = data.disclaimer_title;
            //
            state.infoLoaded = true;
        },

        // _setGroepen(state,data) {
        //     state.groepen = data;
        // },

    },

    actions: {

        loadSchool({commit,state},code) {
            if (state.schoolLoaded) {
                return true;
            }
            let hash = getHash(code);
            return window.Api.get( 'https://schoool.nl/_api/school?hash='+hash ).then(function(response){
              if (response.data.success) {
                commit('_setSchool',response.data.data);
              }
              return Promise.resolve(response);
            }).catch(function(error){
              return Promise.reject(error);
            });
        },

        loadSchoolInfo({commit,state}) {
            if (state.infoLoaded) {
                return true;
            }
            return window.Api.get( '/schoolbase_info' ).then(function(response){
              if (response.data.success) {
                commit('_setSchoolInfo',response.data.data);
              }
              return Promise.resolve(response);
            }).catch(function(error){
              return Promise.reject(error);
            });
        },

    },
}
