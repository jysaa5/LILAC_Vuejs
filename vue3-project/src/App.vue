<template>
  <input v-bind:type="type" v-bind:value="name" />
  <button class="btn btn-primary" @click="updateName">Click</button>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("JooYeon");
    const type = ref("number");

    const onSubmit = () => {
      console.log(name.value);
    };

    const updateName = () => {
      name.value = "Developer";
      type.value = "text";
    };

    return {
      type,
      name,
      onSubmit,
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
