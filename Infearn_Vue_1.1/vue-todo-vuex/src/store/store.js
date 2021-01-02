import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// localstorage
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(
                        JSON.parse(localStorage.getItem(localStorage.key(i)))
                    );
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state: {
        // headerText: "TODO it!",
        todoItemes: storage.fetch(),
    },
    mutations: {
        addOneItem(state, todoItem) {
            console.log('received')
            const obj = {
                completed: false,
                item: todoItem
            };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItemes.push(obj)
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItemes.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            // todoItem.completed = !todoItem.completed;
            state.todoItemes[payload.index].completed = !state.todoItemes[payload.index].completed;
            // 로컬 스토리지의 데이터를 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItemes(state) {
            localStorage.clear();
            state.todoItemes = [];
        }
    }
});