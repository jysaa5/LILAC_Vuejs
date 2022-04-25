<template>
  <input v-bind:type="type" v-bind:value="name" @input="updateName" />
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

    const updateName = (e) => {
      name.value = e.target.value;
      console.log(e.target.value);
    };

    return {
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
