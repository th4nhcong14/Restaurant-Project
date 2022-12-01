<!-- eslint-disable vue/no-unused-components -->
<template>
    <Header />
    <h1 style="font-weight: 1000;">Customers</h1>
    <table border="1">
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Address</td>
        </tr>

        <tr v-for="item in listproduct" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phonenumber }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="'/updatecustomers/' + item.id" class="update-btn">Update</router-link>
            </td>
            <td>
                <button v-on:click="deleteUser(item.id)" class="delete-btn">Delete</button>
            </td>
        </tr>
    </table>

</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Customers',
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
        async deleteUser(id) {
            let result = await axios.delete("http://localhost:3000/customers/"+id);
            if(result.status==200) {
                alert("Delete customer successfully!")
                location.reload(); 
            }   
        }
    },
    async loadData() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({
                name: 'User'
            })
        }
        let result = await axios.get("http://localhost:3000/customers");
        console.warn(result)
        this.listproduct = result.data;
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({
                name: 'User'
            })
        }
        let result = await axios.get("http://localhost:3000/customers");
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