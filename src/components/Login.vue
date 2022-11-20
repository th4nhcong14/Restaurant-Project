<template>
    <main>
        <div class="container">
            <img class="logo" src="https://cdn-icons-png.flaticon.com/512/450/450166.png?fbclid=IwAR29G-fcSl8QGWBDzfD2EDZXiHeK0Vq2L9-pZ8xeFu5Lm-uHH4-p0nuJxvk">
            <h1>Login</h1>
            <div class="register">
                <input type="text" v-model="name" placeholder="Enter Nane" />
                <input type="text" v-model="email" placeholder="Enter Email" />
                <input type="text" v-model="password" placeholder="Enter Password" />
                <button v-on:click="signUp">Login</button>
                <p>
                    <router-link to="/sign-up">Sign up</router-link>
                </p>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
}

</script>