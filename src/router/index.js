import Vue from 'vue'
import Router from 'vue-router'
//引入.vue组件


Vue.use(Router)//声明使用Router

export default new Router({
    routes: [
        {
            path: "/",
            redirect:'/home'
        },
        {
            path:'/home',
            component:()=>import("../components/HelloWorld")
        },
        {
            path: "/uploadImage",
            component:()=>import("../components/UploadImage")
        },
        {
            path: '/splitImage',
            component:()=>import("../components/SplitImage")
        },{
            path: '/pt',
            component:()=>import("../components/pt")
        }
    ]
})
