<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명" -->
    <!-- <todo-input v-on:addTodoItem="addOneItem"></todo-input> -->
    <todo-input></todo-input>
    <!-- v-bind: 내려보낼 props 속성 이름="현재 위치의 컴포넌트 데이터 속성" -->
    <todo-list
      v-bind:propsdata="todoItemes"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    ></todo-list>
    <todo-footer v-on:clearAll="clearAllItemes"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    // 컴포넌트 태그명: 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItemes: [],
    };
  },
  created() {
    console.log("created");
    // if (localStorage.length > 0) {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     //console.log(localStorage.key(i));
    //     if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
    //       //this.todoItemes.push(localStorage.key(i));
    //       // console.log(typeof localStorage.getItem(localStorage.key(i)));
    //       //JSON.parse(localStorage.getItem(localStorage.key(i)));
    //       // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //       this.todoItemes.push(
    //         JSON.parse(localStorage.getItem(localStorage.key(i)))
    //       );
    //     }
    //   }
    // }
  },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = { completed: false, item: todoItem };
    //   // localStorage.setItem(this.newTodoItem, obj);
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItemes.push(obj);
    // },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItemes.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      // todoItem.completed = !todoItem.completed;
      this.todoItemes[index].completed = !this.todoItemes[index].completed;
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItemes() {
      localStorage.clear();
      this.todoItemes = [];
    },
  },
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
