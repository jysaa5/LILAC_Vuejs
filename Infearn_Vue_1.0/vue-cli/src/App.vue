<template>
  <div>
    {{ str }}
    <!-- <app-header v-bind:하위 컴포넌트에서 정한 프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
// import를 사용할 때는 .vue까지 붙여서 사용해야 한다.
import AppHeader from "./components/AppHeader.vue";
export default {
  // 새 객체를 반환
  data: function() {
    return {
      str: "Hi? Header",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = "hi";
    },
  },
};
</script>

<style></style>
