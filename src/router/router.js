import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld"
import Echarts from "../components/echarts/Echarts"
const constantRouterMap = [
    {
        path: '/',
        name: 'index',
        component: HelloWorld
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: Echarts
    }
]
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: constantRouterMap,
});
export default router