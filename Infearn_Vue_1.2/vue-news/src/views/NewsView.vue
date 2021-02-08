<template>
    <div>
        <div v-for="user in users">{{user.title}}</div>
    </div>
</template>

<script>
// import axios from 'axios';
import {fetchNewsList} from '../api/index.js'
export default {
    data(){
        return{
            users: []
        }
    },
    created(){
        // 바인딩 문제 때문.
        var vm = this;
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        fetchNewsList()
        .then(function(response){
            console.log(response);
            vm.users = response.data;
        })
        .catch(function(error){
            console.log(error);
        })
    }
}
</script>

<style>

</style>