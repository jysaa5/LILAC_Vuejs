import Vue from 'vue';
import Vuex from 'vuex';
// import {fetchAskList, fetchJobsList, fetchNewsList} from '../api/index.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        item: {}
    },
    // computed와 동일한 속성
    getters,
    // mutations: mutations,
    mutations,
    actions,
});