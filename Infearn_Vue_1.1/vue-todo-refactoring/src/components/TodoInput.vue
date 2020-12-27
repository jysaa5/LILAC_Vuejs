<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <!-- <button v-on:click="addTodo"></button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <h3 slot="body">
        아무것도 입력하지 않았습니다.
      </h3>
      <h3 slot="footer">
        copy right
      </h3>
    </Modal>
  </div>
</template>
<script>
import Modal from "./common/Modal.vue";
export default {
  components: {
    Modal: Modal,
  },
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      // this: 자바스크립트에서 스코프 지칭 -> 결국 App.vue에 있는 Vue 인스턴스를 가리킴.
      console.log(this.newTodoItem);
      // 저장하는 로직
      // localStorage.setItem();
      if (this.newTodoItem !== "") {
        // this.$emit('이벤트 이름', 인자1, 인자2, ...);
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
