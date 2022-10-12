<template src="../ui/views/click_event.html"></template>
<script>
export default {
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    increment: function () {
      this.number++;
    },

    decrement: function () {
      this.number--;
    },
  },
};
</script>