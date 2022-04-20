<template>
  <div v-bind:class="nameClass">{{ name }}</div>
  <input v-bind:type="type" v-bind:value="name" />
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
    const type = ref("number");
    const nameClass = ref("");
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
      type.value = "text";
      nameClass.value = "name";
    };

    return {
      name,
      greeting,
      //greet,
      consoleLog,
      updateName,
      type,
      nameClass,
    };
  },
};
</script>
<style scoped>
.name {
  color: red;
}
</style>
