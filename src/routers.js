import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import User from './components/User.vue'
import addUser from './components/addUser.vue'
import UpdateUser from './components/UpdateUser.vue'


const routes= [
    {
        name: "Home",
        component: Home,
        path: "/"
    },

    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up",
    },   

    {
        name: "Login",
        component: Login,
        path: "/login",
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
    }
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;