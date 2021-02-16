const type = {
  actueel : { loadUrl: '/schoolbase_nieuws' },
  blogs   : { loadUrl: '/schoolbase_groepen' },
  fotos   : { loadUrl: '/schoolbase_fotos' },
};

export default {
    namespaced: true,
    state: () => ({
      type : '', // actueel|blogs|fotos
      args : {
        start:0,
        end:0,
      },
      loadedAll : false,
      info : {},
      items : [],
    }),

    getters : {

      noItems(state) {
        return (state.items.length == 0);
      },

      loadedAll(state) {
        return state.loadedAll;
      },

      getItems : (state) => (id_type) => {
        let items = window._.sortBy(state.items,'dat_date');
        if ( !isNaN(id_type) && id_type!='' && state.type=='actueel') {
          items = items.filter( i => i.id_actueel_type==id_type);
        }
        if ( !isNaN(id_type) && id_type!='' && state.type=='blogs') {
          items = items.filter( i => i.id_groepen==id_type);
        }
        items.reverse();
        return items;
      },

    },

    mutations: {

      setType(state,type) {
        state.type = type;
      },

      _setData(state,data) {
        state.args = data.args;
        state.info = data.info;
        state.items = data.data;
      },

      _addData(state,data) {
        state.args = data.args;
        state.info = data.info;
        state.items = [...state.items,...data.data];
        if (data.data.length==0) {
          state.loadedAll =  true;
        }
      },


    },

    actions: {

      loadData({commit,state}) {
        // console.log(state.info.totals);
        // if (state.info.totals>0) {
        //   let response = new Promise;
        //   return response.resolve(state.items);
        // }
        return window.Api.get( type[state.type].loadUrl ).then(function(response){
          if (response.data.success) {
            commit('_setData',response.data);
          }
          return Promise.resolve(response);
        }).catch(function(error){
          return Promise.reject(error);
        });
      },

      loadMore({commit,state}) {
        let start = state.args.start - window.CONSTANTS.TIME_MONTH;
        let end   = state.args.start;

        return window.Api.get( type[state.type].loadUrl + '?start='+start+'&end='+end).then(function(response){
          if (response.data.success) {
            commit('_addData',response.data);
          }
          return Promise.resolve(response);
        }).catch(function(error){
          return Promise.reject(error);
        });
      }

    },
}
