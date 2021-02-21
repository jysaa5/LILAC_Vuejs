<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post" :key="item.id">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
              <small class="link-text" v-if="item.domain">
                ({{ item.domain }})
              </small>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
              <small>
                <a
                  class="link-text"
                  v-bind:href="item.domain"
                  v-if="item.domain"
                >
                  ({{ item.domain }})
                </a>
              </small>
            </template>
          </p>
          <small v-if="item.user" class="link-text">
            by
            <router-link :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
          <small v-if="item.time_ago" class="link-text">
            {{ item.time_ago }}
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    //this.$store.dispatch('FETCH_NEWS');
    // console.log(this.$route.path === '/news');
    // const name = this.$route.name;
    // if(name === 'news'){
    //     this.$store.dispatch('FETCH_NEWS');
    // }else if(name === 'asks'){
    //     this.$store.dispatch('FETCH_ASKS');
    // }else if(name === 'jobs'){
    //     this.$store.dispatch('FETCH_JOBS');
    // }
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      console.log("현재 루트>>>>", name);
      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "asks") {
        return this.$store.state.asks;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      }
      return "";
    },
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
