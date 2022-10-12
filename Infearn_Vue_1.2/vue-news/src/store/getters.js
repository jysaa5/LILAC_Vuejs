export default {
    // computed와 동일한 속성
    fetchedItem(state) {
        return state.item;
    },
    fetchedUser(state) {
        return state.user;
    },
    fetchedAsk(state) {
        return state.asks;
    },
}