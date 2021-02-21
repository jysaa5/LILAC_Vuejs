<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
            <li v-for="job in this.$store.state.jobs" class="post">
                <div class="points">
                    {{job.points || 0}}
                </div>
                <div>
                    <p class='news-title'>
                    <a :href="job.url">{{job.title}}</a>
                    </p>
                    <small class="link-text">
                       {{job.time_ago}} by
                       <a :href="job.url">
                           {{job.domain}}
                       </a>
                    </small>
                </div>
            </li>
        </ul> -->
  </div>
</template>

<script>
// import {fetchJobsList} from '../api/index.js'
import ListItem from "../components/ListItem.vue";
export default {
  components: {
    ListItem,
  },
  //     data(){
  //     return{
  //         jobs: []
  //     }
  // },
  //   created() {
  //     axios.get('https://api.hnpwa.com/v0/news/1.json')
  //     fetchJobsList()
  //     .then(response => this.jobs = response.data)
  //     .catch(error => console.log(error));
  //     this.$store.dispatch("FETCH_JOBS");
  //   },
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
