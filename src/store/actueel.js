export default {
    namespaced: true,
    state: {
      info : {
        totals: 0,
        table: "tbl_actueel",
        fields: [
          "str_title",
          "id_actueel_type",
          "dat_date",
          "dat_end_date",
          "b_visible",
          "b_restricted",
          "b_in_nieuwsmail",
          "txt_text",
          "str_video",
          "medias_fotos"
        ],
        path: "pictures",
        user_can_insert: true,
        user_can_edit: true,
        user_can_delete: true
      },
      items : {
      },
    },

    getters : {

      noItems(state) {
        return (state.items.length == 0);
      },

      getItems(state) {
        return state.items;
      },

    },

    mutations: {

      _setData(state,data) {
        state.info = data.info;
        state.items = data.data;
      },

    },

    actions: {

      loadData({commit}){
        // if (state.info.totals>0) {
        //   return new Promise.resolve(state.items);
        // }
        return window.Api.get( '/schoolbase_nieuws').then(function(response){
          if (response.data.success) {
            commit('_setData',response.data);
          }
          return Promise.resolve(response);
        }).catch(function(error){
          return Promise.reject(error);
        });
      },

    },
}
