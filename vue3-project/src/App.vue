<template>
  <div class="name">{{ name }}</div>
  <button class="btn btn-primary">Click</button>
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

    return {
      name,
      greeting,
      greet,
    };
  },
};
</script>
<style scoped>
.name {
  color: red;
}
</style>
