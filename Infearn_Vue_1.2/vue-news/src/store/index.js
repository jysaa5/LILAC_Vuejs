import Vue from 'vue';
import Vuex from 'vuex';
import {fetchAskList, fetchJobsList, fetchNewsList} from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        news: [],
        jobs: [],
        asks: []
    },
    mutations:{
        // 첫번째 인자로 state를 받아야 함.
        SET_NEWS(state, news){
            state.news = news;
        },

        SET_JOBS(state, jobs){
            state.jobs = jobs;
        },

        SET_ASKS(state, asks){
            state.asks = asks;
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
        },

        FETCH_JOBS({commit}){
            fetchJobsList()
            .then(response => {
                console.log({data});
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            })
        },

        FETCH_ASKS(context){
            fetchAskList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_ASKS', response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
});