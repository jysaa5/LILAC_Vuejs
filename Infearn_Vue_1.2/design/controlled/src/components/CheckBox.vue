<template>
  <!-- <input type="checkbox" v-model="checked" /> -->
  <input type="checkbox" :value="value" @click="toggleCheckBox" />
</template>

<script>
export default {
  // props: ["checked"],
  // @input 이벤트
  // :value 값
  props: ["value"],
  methods: {
    toggleCheckBox() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
