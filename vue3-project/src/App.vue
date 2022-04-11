<template>
  <div class="name">{{ name }}</div>
  <div>Hello World</div>
  {{ greeting("Joo") }}
</template>
<script>
export default {
  setup() {
    const name = "JooYeon Kim";

    const greeting = (name) => {
      return "Hello, " + name;
    };

    return {
      name,
      greeting,
    };
  },
};
</script>
<style scoped>
.name {
  color: red;
}
</style>
