import Admin from './components/Admin.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import User from './components/User.vue'
import addUser from './components/addUser.vue'
import UpdateUser from './components/UpdateUser.vue'
import  Store from './components/Store.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "Login",
        component: Login,
        path: "/login" ,
    },
    {
        name: "Admin",
        component: Admin,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },
    {
        name: 'Add',
        component: Add,
        path: '/add'
    },
    {
        name: 'Update',
        component: Update,
        path: '/update/:id',
    },
    {
        name: 'User',
        component: User,
        path: '/user'
    },
    {
        name: 'addUser',
        component: addUser,
        path: '/adduser'
    },
    {
        name: 'UpdateUser',
        component: UpdateUser,
        path: '/updateuser/:id'
    },
    {
        name: 'Store',
        component: Store,
        path: '/store'
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;