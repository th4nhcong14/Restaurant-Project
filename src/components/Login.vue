<template>
    <main>
        <div class="container">
            <img class="logo"
                src="https://cdn-icons-png.flaticon.com/512/450/450166.png?fbclid=IwAR29G-fcSl8QGWBDzfD2EDZXiHeK0Vq2L9-pZ8xeFu5Lm-uHH4-p0nuJxvk">
            <h1>Login</h1>
            <div class="register">
                <!-- <input type="text" v-model="name" placeholder="Enter Nane" /> -->
                <input type="text" v-model="email" placeholder="Enter Email" />
                <input type="password" v-model="password" placeholder="Enter Password" />
                <button v-on:click="login">Login</button>
                <p class="btn">
                    <router-link to="/sign-up" class="btn">Sign up</router-link>
                </p>
            </div>
        </div>
    </main>
</template>

<script>

import axios from 'axios'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
    async login() {
        let result = await axios.get (
           `http://localhost:3000/users?email=${this.email}&password=${this.password}` 
        )

        if (result.status==200 && result.data.length>0) {        
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'Home' })
                alert("Login successfully!")
            }
        else (
            alert("Login failed!")
        )
        console.warn(result)
    }
        
    },

    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'Home'
            })
        }
    }
};

</script>