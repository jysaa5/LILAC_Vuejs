<template>
  <div id="app">
    <!-- 1. Strongly Recommended -->
    <!-- <ToolBar></ToolBar> -->
    <!-- 2. Essential -->
    <tool-bar></tool-bar>
    <transition name="page">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
export default {
  components:{
    ToolBar,
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}

a{
  color: #34495e;
  text-decoration: none;
}

a:hover{
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active{
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
