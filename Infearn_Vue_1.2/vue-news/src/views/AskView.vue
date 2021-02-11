<template>
    <div>
         <div v-for="item in this.$store.state.asks">{{item}}</div>
    </div>
</template>

<script>
// import {fetchAskList} from '../api/index.js'
export default {
    //  data(){
    //     return{
    //         ask: []
    //     }
    //  },
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