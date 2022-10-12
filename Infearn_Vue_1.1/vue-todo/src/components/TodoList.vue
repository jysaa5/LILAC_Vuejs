<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, index) in todoItemes"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete(todoItem, index)"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoItemes: [],
    };
  },
  methods: {
    removeTodo(todoItem, index) {
      console.log("remove itemes");
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItemes.splice(index, 1);
    },
    toggleComplete(todoItem, index) {
      console.log(todoItem, index);
      todoItem.completed = !todoItem.completed;
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
  },
  created() {
    console.log("created");
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        //console.log(localStorage.key(i));
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          //this.todoItemes.push(localStorage.key(i));
          // console.log(typeof localStorage.getItem(localStorage.key(i)));
          //JSON.parse(localStorage.getItem(localStorage.key(i)));
          // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
          this.todoItemes.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
