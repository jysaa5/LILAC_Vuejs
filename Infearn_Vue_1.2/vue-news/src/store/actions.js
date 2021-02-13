import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo} from '../api/index.js';
export default {
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
        .then(({data}) => {
            console.log({data});
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    FETCH_ASKS({commit}){
        fetchAskList()
        .then(({data}) => {
            console.log(data);
            commit('SET_ASKS', data);
        })
        .catch(error => {
            console.log(error);
        })
    },

    FETCH_USER({commit}, name){
        fetchUserInfo(name)
        .then(({data}) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        });
    }
}