import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentAdd from "../views/StudentAdd";
import StudentList from "../views/StudentList/StudentList";
import Login from "../views/Login/Login";
import Register from "../views/Login/Register";
import Home from "../views/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'studentAdd',
                component: StudentAdd
            },
            {
                path: 'studentList',
                component: StudentList,
            },
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '*',
        component: ()=>import('../views/NotFind')
    }
]

const router = new VueRouter({
    mode: 'hash',
    linkExactActiveClass: 'exact-active',
    linkActiveClass: 'active',
    base: process.env.BASE_URL,
    routes
})

export default router
