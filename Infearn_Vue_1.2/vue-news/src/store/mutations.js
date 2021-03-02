export default {
    // 첫번째 인자로 state를 받아야 함.
    SET_NEWS(state, news) {
        state.news = news;
    },

    SET_ASKS(state, asks) {
        state.asks = asks;
    },

    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },

    SET_USER(state, user) {
        state.user = user;
    },

    SET_ITME(state, item) {
        state.item = item;
    },

    SET_LIST(state, list) {
        state.list = list;
    }
}