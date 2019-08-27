import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../components/Index')
const Article = () => import('../components/Article')
const Login = () => import('../components/Login')
const Register = () => import('../components/Register')


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/article',
            component: Article,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
    ]
})

export default router