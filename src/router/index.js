import VueRouter from "vue-router"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Register from "../pages/Register"
import List from "../pages/List"
import User from "../pages/User"
import Admin from "../pages/Admin"
import MyList from "../pages/MyList"
import Add from "../pages/Add"
import Detail from "../pages/Detail"
import Pass from "../pages/Pass"
import Fail from "../pages/Fail"
import Unknown from "../pages/Unknown"
export default new VueRouter({
    routes: [{
            path: '/',
            component: Home
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
            path: '/list',
            component: List
        },
        {
            path: '/user',
            component: User
        },
        {
            path: '/admin',
            component: Admin,
            children:[{
                path: 'pass',
                component: Pass
            },
            {
                path: 'fail',
                component: Fail
            },
            {
                path: 'unknown',
                component: Unknown
            }
        ]
 
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/mylist',
            component: MyList
        },
        {
            path: '/add',
            component: Add
        },
        {
            name: "detail",
            path: '/detail',
            component: Detail
        },
    ]
})