<template>
    <main>
        <div class="container">
            <img class="logo"
                src="https://cdn-icons-png.flaticon.com/512/731/731985.png">
            <h1>Sign Up</h1>
            <div class="register">
                <input type="text" v-model="name" placeholder="Enter Nane" />
                <input type="text" v-model="email" placeholder="Enter Email" />
                <input type="password" v-model="password" placeholder="Enter Password" />
                <button v-on:click="signUp" class="btn">Sign up</button>
                <p>
                    <router-link to="/login" class="btn">Login</router-link>
                </p>
            </div>
        </div>
    </main>
</template>
<script>

import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                name: this.name,
                password: this.password
            });

            console.warn(result);
            if (result.status == 201) {
                alert("Sign up successfully!")
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({ name: 'Admin' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'Admin'
            })
        }
    }
}
</script>

<style>
.container .logo {
    width: 100px;
    height: 100px;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 15px;
}

.register button {
    width: 300px;
    height: 30px;
    border-radius: 15px;
    background: black;
    color: white;
    cursor: pointer;
}

html {
    width: 100%;
    height: 100%;
    /* background-image: url(""); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>

