<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-targer="#navbar1" aria-controls="navbar1"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggle-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>

                <li v-if="auth==''" class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>

                <li v-if="auth==''" class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>

                <li v-if="auth=='loggedin'" class="nav-item">
                    <router-link class="nav-link" to="/profile">Profile</router-link>
                </li>

                <li v-if="auth=='loggedin'" class="nav-item">
                    <a class="nav-link" href="" v-on:click="logout">Logout</a>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/event/click">EventClick</router-link>
                </li>

                <li v-if="auth=='loggedin'" class="nav-item">
                    <router-link class="nav-link" to="/list">List</router-link>
                </li>

            </ul>
        </div>
    </nav>
</template>

<script>
import axios from 'axios'
import EventBus from './EventBus'
EventBus.$on('logged-in', test => {
  console.log(test)
})
export default {
  data () {
    return {
      auth: '',
      user: ''
    }
  },
  methods: {
    logout () {
      axios.get('/api/logout').then((res)=>{
        alert('로그아웃 되었습니다.')
          localStorage.removeItem('usertoken')
          this.$router.push("/");
      })
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      this.auth = status
    })
  }
}
</script>