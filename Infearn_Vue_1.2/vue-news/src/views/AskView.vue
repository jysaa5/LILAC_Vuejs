<template>
    <div>
         <!-- <div v-for="item in this.$store.state.asks">{{item.title}}</div> -->
         <!-- <div v-for="item in askItems">{{item.title}}</div> -->
         <!-- <div v-for="item in fetchedAsk">{{item.title}}</div> -->
          <p v-for="item in fetchedAsk">
            <!-- <a v-bind:href="item.url">
                {{item.title}}
            </a> -->
            <router-link v-bind:to="`item/${item.id}`">
                {{item.title}}
            </router-link>
            <small>{{item.time_ago}} by {{item.user}}</small>
        </p>
    </div>
</template>

<script>
// import {fetchAskList} from '../api/index.js'
import {mapState, mapGetters} from 'vuex';
export default {
    //  data(){
    //     return{
    //         ask: []
    //     }
    //  },
    computed: {
        ...mapGetters(['fetchedAsk'])
        // #3
        // ...mapGetters({
        //     askItems: 'fetchedAsk'
        // })

        // #2
        // ...mapState({
        //     ask: state => state.asks
        // }),

        // #1
        // ask(){
        //     return this.$store.state.ask;
        // }
    },
     created(){
        // 바인딩 문제 때문.
        // var vm = this;
        // // axios.get('https://api.hnpwa.com/v0/news/1.json')
        // fetchAskList()
        // .then(function(response){
        //     console.log(response);
        //     vm.ask = response.data;
        // })
        // .catch(function(error){
        //     console.log(error);
        // })
        this.$store.dispatch('FETCH_ASKS')
    }
}
</script>

<style>

</style>