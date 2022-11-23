<template>
    <div class="nav">
        <router-link to="/">Product</router-link>
        <router-link to="/add">Add Product</router-link>
        <a href="/user">Users</a>
        <a href="/adduser">Add Users</a>
        <a v-on:click="logout" href="#">Logout</a>
        <a v-on:click="shop" href="#">Shop</a>
        <h1 id="hello">Hello {{name}}, welcome to admin page!</h1>
    </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    data() {
        return {
            name:''
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "Login" });
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
    },
    components: { RouterLink }
}
</script>