<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- 컴포넌트 명명법 종류 -->
    <!-- 케밥 케이스: VSC의 공식 스타일 가이드 명령법 -->
    <!-- <hello-world></hello-world> -->
    <!-- 파스칼 케이스 -->
    <!-- <HelloWorld></HelloWorld> -->
    <!-- 진보된 패턴 -->
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: "App",
  // components: {
  //   HelloWorld,
  //   "hello-world": HelloWorld,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
