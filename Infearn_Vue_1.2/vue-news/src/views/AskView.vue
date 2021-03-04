<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import {fetchAskList} from '../api/index.js'
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin.js";
// import bus from "../utils/bus.js";
//import {mapState, mapGetters} from 'vuex';
export default {
  components: { ListItem },
  mixins: [ListMixin],
  //  data(){
  //     return{
  //         ask: []
  //     }
  //  },
  //   computed: {
  //     ...mapGetters(['fetchedAsk'])
  //     #3
  //     ...mapGetters({
  //         askItems: 'fetchedAsk'
  //     })
  //     #2
  //     ...mapState({
  //         ask: state => state.asks
  //     }),
  //     #1
  //     ask(){
  //         return this.$store.state.ask;
  //     }
  //   },
  // created() {
  //     바인딩 문제 때문.
  //     var vm = this;
  //     // axios.get('https://api.hnpwa.com/v0/news/1.json')
  //     fetchAskList()
  //     .then(function(response){
  //         console.log(response);
  //         vm.ask = response.data;
  //     })
  //     .catch(function(error){
  //         console.log(error);
  //     })

  //   bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch("FETCH_ASKS")
  //       .then(() => {
  //         console.log("fetched");
  //         bus.$emit("end:spinner");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, 3000);
  // },
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
