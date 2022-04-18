<template>
  <div class="name">{{ name }}</div>
  <button class="btn btn-primary" v-on:click="consoleLog">Click</button>
  <div>Hello World</div>
  {{ greeting("Joo") }}
  {{ greet }}
</template>
<script>
export default {
  setup() {
    const name = "JooYeon Kim";

    const greeting = (name) => {
      return "Hello, " + name;
    };

    const greet = greeting(name);

    const consoleLog = () => {
      console.log("hello world");
    };

    return {
      name,
      greeting,
      greet,
      consoleLog,
    };
  },
};
</script>
<style scoped>
.name {
  color: red;
}
</style>
