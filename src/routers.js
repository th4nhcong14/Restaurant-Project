import Admin from './components/admin/Admin.vue'
import SignUp from './components/admin/SignUp.vue'
import Login from './components/admin/Login.vue'
import Add from './components/admin/Add.vue'
import Update from './components/admin/Update.vue'
import User from './components/admin/User.vue'
import addUser from './components/admin/addUser.vue'
import UpdateUser from './components/admin/UpdateUser.vue'
import AddIMac from './components/admin/addimac.vue'
import UpdateIMac from './components/admin/UpdateImac.vue'
import AddIPad from './components/admin/addipad.vue'
import UpdateIPad from './components/admin/UpdateIPad.vue'
import AddAirPods from './components/admin/addairpods.vue'
import UpdateAirPods from './components/admin/UpdateAirPods.vue'
import Customers from './components/admin/Customers.vue'
import UpdateCustomers from './components/admin/UpdateCustomers.vue'

import  Store from './components/store/Store.vue'
import Cart from './components/store/Cart.vue'
import Order from './components/store/Order.vue'

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
    },
    {
        name: 'AddIMac',
        component: AddIMac,
        path: '/addimac'
    },
    {
        name: 'UpdateIMac',
        component: UpdateIMac,
        path: '/updateimac/:id'
    },
    {
        name: 'AddIPad',
        component: AddIPad,
        path: '/addipad'
    },
    {
        name: 'UpdateIPad',
        component: UpdateIPad,
        path: '/updateipad/:id'
    },
    {
        name: 'AddAirPods',
        component: AddAirPods,
        path: '/addairpods'
    },
    {
        name: 'UpdateAirPods',
        component: UpdateAirPods,
        path: '/updateairpods/:id'
    },
    {
        name: 'Cart',
        component: Cart,
        path: '/cart'
    },
    {
        name: 'Order',
        component: Order,
        path: '/order'
    },
    {
        name: 'Customers',
        component: Customers,
        path: '/customers'
    },
    {
        name: 'UpdateCustomers',
        component: UpdateCustomers,
        path: '/updatecustomers/:id'
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;