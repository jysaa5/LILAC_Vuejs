<template>
  <input v-bind:type="type" v-model="name" />
  <button class="btn btn-primary" @click="onSubmit">Click</button>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("JooYeon");

    const onSubmit = () => {
      console.log(name.value);
    };

    return {
      name,
      onSubmit,
    };
  },
};
</script>
<style scoped>
.name {
  color: red;
}
</style>
