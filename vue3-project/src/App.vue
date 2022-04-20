<template>
  <div class="name">{{ name }}</div>
  <input type="text" v-bind:value="name" />
  <button class="btn btn-primary" v-on:click="updateName">Click</button>
  <div>Hello World</div>
  {{ greeting("Joo") }}
  <!-- {{ greet }} -->
</template>
<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    let name = ref("JooYeon");
    let arr = reactive({ id: 1 });

    const greeting = (name) => {
      return "Hello, " + name;
    };

    //const greet = greeting(name);

    const consoleLog = () => {
      console.log("hello world");
    };

    const updateName = () => {
      name.value = "Developer";
      console.log(name);
      arr.id = 2;
    };

    return {
      name,
      greeting,
      //greet,
      consoleLog,
      updateName,
    };
  },
};
</script>
<style scoped>
.name {
  color: red;
}
</style>
