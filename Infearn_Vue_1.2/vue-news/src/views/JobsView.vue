<template>
    <div>
         <div v-for="job in jobs">{{jobs}}</div>
    </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js'
export default {
        data(){
        return{
            jobs: []
        }
    },
    created(){
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        fetchJobsList()
        .then(response => this.jobs = response.data)
        .catch(error => console.log(error));
    }
}
</script>

<style>

</style>