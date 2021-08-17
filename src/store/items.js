var _ = require('lodash');

import {TIMES} from '../services/globals.ts';
import Api from '../services/api.js';

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
            let items = _.sortBy(state.items,'dat_date');
            if ( !isNaN(id_type) && id_type!='' && state.type=='actueel') {
                items = items.filter( i => i.id_actueel_type==id_type);
            }
            if ( !isNaN(id_type) && id_type!='' && state.type=='blogs') {
                items = items.filter( i => i.id_groepen==id_type);
            }
            items.reverse();
            return items;
        },

        getItemById : (state) => (id) => {
            let idx = state.items.findIndex( i=>i.id==id );
            if (idx>=0) {
                return state.items[idx];
            }
            return false;
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
            if (state.type!=='fotos') {
                state.items = state.items.filter((e, i) => state.items.findIndex(a => a['id'] === e['id']) === i); // unique
            }
            if (data.data.length==0) {
                state.loadedAll =  true;
            }
        },

    },

    actions: {

        loadData({commit,state}) {
            if (state.info && state.info.totals>0) {
                return true;
            }
            return Api.get( type[state.type].loadUrl ).then(function(response){
                if (response.data.success) {
                    commit('_setData',response.data);
                }
                return Promise.resolve(response);
            }).catch(function(error){
                return Promise.reject(error);
            });
        },

        loadMore({commit,state}) {
            let start = state.args.start - TIMES.TIME_MONTH;
            if (state.type!=='fotos') {
                start = state.args.start - TIMES.TIME_MONTH * 2;
            }
            let end   = state.args.start;

            return Api.get( type[state.type].loadUrl + '?start='+start+'&end='+end).then(function(response){
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
