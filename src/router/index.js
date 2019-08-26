import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../components/Index')
const Article = () => import('../components/Article')

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
    ]
})

export default router