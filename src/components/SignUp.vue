<template>
    <main>
        <div class="container">
            <img class="logo" src="https://cdn-icons-png.flaticon.com/512/450/450166.png?fbclid=IwAR29G-fcSl8QGWBDzfD2EDZXiHeK0Vq2L9-pZ8xeFu5Lm-uHH4-p0nuJxvk">
            <h1>Sign Up</h1>
            <div class="register">
                <input type="text" v-model="name" placeholder="Enter Nane" />
                <input type="text" v-model="email" placeholder="Enter Email" />
                <input type="text" v-model="password" placeholder="Enter Password" />
                <button v-on:click="signUp">Sign up</button>
                <p>
                    <router-link to="/login">Login</router-link>
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
            if(result.status==201) {
                alert("Sign up successfully!")
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push ({
                name: 'Home'
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

</style>