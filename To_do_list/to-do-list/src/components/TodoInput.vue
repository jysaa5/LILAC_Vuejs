<template>
  <div>
    <input type="text" v-model="newTodoItem" />
    <button v-on:click="addTodo">추가</button>
  </div>
</template>
<script>
// 할 일 입력 및 추가
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    addTodo() {
      console.log(this.newTodoItem);
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
    },
  },
};
</script>
