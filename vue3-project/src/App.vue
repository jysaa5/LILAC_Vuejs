<template>
  <div class="name">{{ name }}</div>
  <div>Hello World</div>
</template>
<script>
export default {
  setup() {
    const name = "JooYeon Kim";
    return {
      name,
    };
  },
};
</script>
<style scoped>
.name {
  color: red;
}
</style>
