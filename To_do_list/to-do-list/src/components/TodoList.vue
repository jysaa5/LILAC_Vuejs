<template>
  <section>
    <ul>
      <li v-for="todoItem in todoItems" :key="todoItem + '-' + i">{{ todoItem }}</li>
    </ul>
  </section>
</template>
<script>
// 할 일 목록 표시 및 특정 할 일 삭제
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
};
</script>
<style></style>
