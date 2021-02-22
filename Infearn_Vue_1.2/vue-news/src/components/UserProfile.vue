<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <!-- <router-link :to="`/user/${userInfo.user}`">
        {{ userInfo.id }}
      </router-link> -->
      <template v-if="this.$route.name === 'item'">
        <div>{{ info.id }}</div>
      </template>
      <template v-else>
        <div>{{ info.user }}</div>
      </template>
      <div class="time">
        {{ info.created }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
  },
  //   computed: {
  //     userInfo() {
  //       return this.$store.state.user;
  //     },
  //   },
};
</script>
<style>
.user-container {
  display: flex;
  align-content: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
