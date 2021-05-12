import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '@/components/template/Register'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)

const routes = [{
    name: 'auth',
    path: '/auth',
    component: Auth
}, {
    name: 'register',
    path: '/register',
    component: Register
},{
    name:'home',
    path:'/',
    component: Auth
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
