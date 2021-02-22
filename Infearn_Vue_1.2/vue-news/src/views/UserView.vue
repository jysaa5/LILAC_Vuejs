<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <template slot="time">{{ userInfo.created }}</template>
      <div slot="karma">{{ userInfo.karma }}</div>
    </user-profile>
    <!-- <p>name: {{userInfo.id}}</p>
        <p>karma: {{userInfo.karma}}</p>
        <p>created: {{userInfo.created}}</p> -->
  </div>
</template>
<script>
import UserProfile from "../components/UserProfile.vue";
// import axios from 'axios';
export default {
  components: { UserProfile },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    // console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    //axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`);
    // payload: userName -> 1개만 넘어가기 때문에 여러개 넘길 때는 객체로 만들어서 넘김.
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>
<style></style>
