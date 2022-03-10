import { createRouter, createWebHistory } from 'vue-router'

// view components
import Home from "@/pages/Home";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router