// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div class="cart">
        <table>
            <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Id</td>
            </tr>

            <tr v-for="item in listproduct" :key="item.id">
                <td>{{ item.code }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <button class="update-btn" v-on:click="RemoveItem(item.id)">Remove</button>
            </tr>
        </table>
        
    </div>
    <div>
        <button class="update-btn" v-on:click="Checkout()">Checkout</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Cart',
    data() {
        return {
            name: '',
            listproduct: []
        }
    },
    methods:{
        async RemoveItem(id){
            let result = await axios.delete("http://localhost:3000/cart/"+id);
            console.warn(result)
            if(result.status==200) {
                alert("Delete product successfully!")
            }   
            location.reload(); 
        },

        async Checkout(){
            this.$router.push({
                name: 'Order'
            })
        }
    },
    async mounted() {
        let result = await axios.get("http://localhost:3000/cart")
        this.listproduct = result.data
    }
}
</script>

<style>
.cart {
    text-align: center;
}
</style>