<template>
    <main>
        <div class="container">
            <img class="logo" src="https://cdn-icons-png.flaticon.com/512/731/731985.png">
            <h1>Place out order</h1>
            <div class="register">
                <input type="text" v-model="name" placeholder="Enter Nane" />
                <input type="email" v-model="email" placeholder="Enter Email" />
                <input type="text" v-model="phonenumber" placeholder="Enter Phone Number" />
                <input type="text" v-model="address" placeholder="Enter Address">
                <button class="btn" v-on:click="Order()">Order</button>
                <button class="bnt" v-on:click="ReturnCart()">Return to Cart</button>
            </div>
        </div>
    </main>
</template>

<script>

import axios from 'axios'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Order',
    data() {
        return {
            name: '',
            email: '',
            phonenumber: '',
            address: '',
            order:'',
            listorder:[]
        }
    },
    methods: {
        async Order() {
            let result = await axios.get("http://localhost:3000/cart")
            this.listorder = result.data;

            result = await axios.post("http://localhost:3000/customers", {
                email: this.email,
                name: this.name,
                phonenumber: this.phonenumber,
                address: this.address,
            });

            console.warn(result);
            if (result.status == 201) {
                alert("Order successfully!")
                this.$router.push({
                    name: 'Store'
                })

            }
        },
        async ReturnCart(){
            this.$router.push ({
                name: 'Cart'
            })
        }
    },
}
</script>