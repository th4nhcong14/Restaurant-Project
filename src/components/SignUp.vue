<template>
    <main>
        <div class="container">
            <h1>Sign Up</h1>
            <div class="register">
                <input type="text" v-model="name" placeholder="Enter Nane" />
                <input type="text" v-model="email" placeholder="Enter Email" />
                <input type="text" v-model="password" placeholder="Enter Password" />
                <button v-on:click="signUp">Sign up</button>
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
    }
}
</script>

<style>
.logo {
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    background-image: url('https://img.favpng.com/6/15/10/food-restaurant-breakfast-cuisine-cook-png-favpng-hEwhUh9EMqX2uLXZsvEi97G0V.jpg');
    /* padding: 0 200px 200px 200px; */
    margin: 0 auto;
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