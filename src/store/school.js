const md5 = require('js-md5');

const getHash = function(code) {
    let salt = Math.floor(new Date().getTime() / 86400000) + 3 ;
    let hash = md5(salt+code);
    return hash;
}


export default {
    namespaced: true,
    state: {
        str_title: '',
        b_free_account: false,
        // str_code: "Develop_2.0",
        b_demo: false,
        url_url: '',
        media_logo: '',
        rgb_achtergrond: '',
    },

    getters : {
        getHash(state) {
            let code = state.str_code;
            return getHash(code);
        },

        getLogo(state) {
            return state.media_logo;
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
        },
    },

    actions: {
        loadSchool({commit},code) {
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
    },
}
