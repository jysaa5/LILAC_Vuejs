import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'

import EventClick from '@/components/EventClick'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/event/click',
            name: 'EventClick',
            component: EventClick
        },
        {
            path: '/list',
            name: 'List',
            component: List
        }

    ]
})