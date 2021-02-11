import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news: []
    },
    mutations:{
        // 첫번째 인자로 state를 받아야 함.
        SET_NEWS(state, news){
            state.news = news;
        }
    },
    actions:{
        // 첫번째 인자로 context를 받아야 함.
        FETCH_NEWS(context){
            fetchNewsList()
            .then(response => {
                console.log(response.data);
                // mutations 호출
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
});