<template>
    <div>
        <div v-for="user in this.$store.state.news">{{user.title}}</div>
    </div>
</template>

<script>
// import axios from 'axios';
import {fetchNewsList} from '../api/index.js'
export default {
    // data(){
    //     return{
    //         users: []
    //     }
    // },
    created(){
        // 바인딩 문제 때문.
        // var vm = this;
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        // console.log('호출 전:', this);

        // 1
        // fetchNewsList()
        // // .then(function(response){
        //     .then((response)=>{
        //     console.log(response);
        //     // 2
        //     this.users = response.data;
        //     console.log('호출 후:', this)
        // })
        // // .catch(function(error){
        //     .catch((error) => {
        //     console.log(error);
        // })

       this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>