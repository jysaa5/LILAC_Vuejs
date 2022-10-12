<template>
  <div id="app">
    <!-- 1. Strongly Recommended -->
    <!-- <ToolBar></ToolBar> -->
    <!-- 2. Essential -->
    <tool-bar></tool-bar>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";
import { handleException } from "./utils/handler.js";
import axios from "axios";
export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,

      // async await
      items: [],
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },

    loginUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          console.log(response);
          if (response.data.id === 1) {
            console.log("사용자가 인증되었습니다.");
            axios
              .get("https://jsonplaceholder.typicode.com/todos")
              .then((response) => {
                console.log(response);
                this.items = response.data;
              })
              .catch();
          }
        })
        .catch((error) => console.log(error));
    },

    // async await
    async loginUser1() {
      try {
        var response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        if (response.data.id === 1) {
          console.log("사용자가 인증되었습니다.");
          var list = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
          );
          this.items = list.data;
        }
      } catch (error) {
        // 예외처리 공통화
        handleException(error);
        console.log(error);
      }
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
