<!-- eslint-disable vue/no-unused-components -->
<template>
    <Header />
    <h1 style="font-weight: 1000;">Product</h1>
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Image</td>
        </tr>

        <tr v-for="item in listproduct" :key="item.id">
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.image }}</td>
            <td>
                <router-link :to="'/update/' + item.id" class="update-btn">Update</router-link>
            </td>
            <td>
                <button v-on:click="deleteProduct(item.id)" class="delete-btn">Delete</button>
            </td>
        </tr>
    </table>

</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Admin',
    data() {
        return {
            name: '',
            listproduct: [],
            id:''
        }
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Header
    },
    methods: {
        async deleteProduct(id) {
            let result = await axios.delete("http://localhost:3000/list-product/"+id);
            console.warn(result)
            if(result.status==200) {
                alert("Delete product successfully!")
                this.mounted()
            }   
        }
    },
    async loadData() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: 'Admin'
            })
        }
        let result = await axios.get("http://localhost:3000/list-product");
        console.warn(result)
        this.listproduct = result.data;
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: 'Admin'
            })
        }
        let result = await axios.get("http://localhost:3000/list-product");
        this.listproduct = result.data;
    },


}

</script>

<style>
.delete-btn {
    width: 300px;
    height: 30px;
    border-radius: 15px;
    background: black;
    color: white;
    cursor: pointer;
}

.btn {
    text-decoration: none;
    color: black;
    border-radius: 15px;
}
</style>