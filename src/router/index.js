import { createRouter, createWebHistory } from 'vue-router'

// view components
import Home from "@/pages/Home";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import VerifyEmail from "@/pages/VerifyEmail";
import VerifyNumber from "@/pages/VerifyNumber";
import Success from "@/pages/Success";

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
    },
    {
        path: '/verify-email',
        name: 'verifyEmail',
        component: VerifyEmail
    },
    {
        path: '/verify-number',
        name: 'verifyNumber',
        component: VerifyNumber
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router