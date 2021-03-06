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

    /* promise */
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             console.log(response.data);
    //             // mutations 호출
    //             context.commit('SET_NEWS', response.data);
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },

    // FETCH_NEWS({
    //     commit
    // }) {
    //     return fetchNewsList()
    //         .then(response => {
    //             console.log(response.data);
    //             // mutations 호출
    //             commit('SET_NEWS', response.data);
    //             console.log(response);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },

    /* async await */
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        // return을 해야 chain이 된다. (promise가 반환됨.)
        return response;
    },

    /* promise */
    // FETCH_JOBS({
    //     commit
    // }) {
    //     return fetchJobsList()
    //         .then(({
    //             data
    //         }) => {
    //             console.log({
    //                 data
    //             });
    //             commit('SET_JOBS', data);
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },

    /* async await */
    async FETCH_JOBS({
        commit
    }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error)
        }

    },

    /* promise */
    // FETCH_ASKS({
    //     commit
    // }) {
    //     return fetchAskList()
    //         .then(({
    //             data
    //         }) => {
    //             console.log(data);
    //             commit('SET_ASKS', data);
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },


    /* async await */
    async FETCH_ASKS({
        commit
    }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
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

    /* promise */
    // # 2
    // FETCH_LIST({
    //     commit
    // }, pageName) {
    //     // # 3
    //     return fetchList(pageName)
    //         .then(response => {
    //             // # 4
    //             console.log(4)
    //             commit('SET_LIST', response.data);
    //             return response;
    //         })
    //         .catch(error => console.log(error));
    // },

    /* async await */
    async FETCH_LIST({
        commit
    }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    },
}