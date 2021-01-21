const url = {
  actueel : { load: '/schoolbase_nieuws' },
  blogs   : { load: '/schoolbase_groepen' },
};

export default {
    namespaced: true,
    state: () => ({
      type : '', // actueel|blogs
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

      getItems(state) {
        let items = window._.sortBy(state.items,'dat_date');
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
        if (state.info.totals>0) {
          return new Promise.resolve(state.items);
        }
        return window.Api.get( url[state.type].load ).then(function(response){
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

        return window.Api.get( url[state.type].load + '?start='+start+'&end='+end).then(function(response){
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
