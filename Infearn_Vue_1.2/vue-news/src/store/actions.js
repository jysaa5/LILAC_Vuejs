import {
    fetchAskList,
    fetchJobsList,
    fetchNewsList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from '../api/index.js';
export default {
    // 첫번째 인자로 context를 받아야 함.
    FETCH_NEWS({
        commit
    }) {
        return fetchNewsList()
            .then(response => {
                console.log(response.data);
                // mutations 호출
                commit('SET_NEWS', response.data);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_JOBS({
        commit
    }) {
        return fetchJobsList()
            .then(({
                data
            }) => {
                console.log({
                    data
                });
                commit('SET_JOBS', data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_ASKS({
        commit
    }) {
        return fetchAskList()
            .then(({
                data
            }) => {
                console.log(data);
                commit('SET_ASKS', data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_USER({
        commit
    }, name) {
        return fetchUserInfo(name)
            .then(({
                data
            }) => {
                commit('SET_USER', data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    },

    FETCH_ITME({
        commit
    }, id) {
        return fetchCommentItem(id)
            .then(({
                data
            }) => {
                commit('SET_ITME', data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    },

    FETCH_LIST({
        commit
    }, pageName) {
        fetchList(pageName)
            .then(({
                data
            }) => commit('SET_LIST', data))
            .catch((error => console.log(error)));
    }
}