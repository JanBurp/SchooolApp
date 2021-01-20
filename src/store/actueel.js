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
      data : {
      },
    },

    getters : {
    },

    mutations: {
    },

    actions: {
      loadData(){
        return window.Api.get( '/schoolbase_nieuws').then(function(response){
          console.log(response);
            // if (!_.isUndefined(response.data.notes)) {
            //     commit('_setNotes',response.data.notes);
            // }
            return Promise.resolve(response);
        }).catch(function(error){
            return Promise.reject(error);
        });
      },
    },
}
