<!-- eslint-disable vue/no-unused-components -->
<template>
    <Header />
    <h1 style="font-weight: 1000;">User</h1>
    <table border="1">
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Password</td>
            <td>Phone Number</td>
        </tr>

        <tr v-for="item in listuser" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.password }}</td>
            <td>{{ item.phonenumber }}</td>
            <td>
                <router-link :to="'/updateuser/' + item.id" class="update-btn">Update</router-link>
            </td>
            <td>
                <button v-on:click="deleteUser(item.id)" class="delete-btn">Delete</button>
            </td>
        </tr>
    </table>

    <div class="add-form">
        <h1 style="font-weight: 1000;">Add User</h1>
        <input type="text" v-model="name" placeholder="Enter user name">
        <input type="text" v-model="email" placeholder="Enter user email">
        <input type="text" v-model="password" placeholder="Enter user password">
        <input type="text" v-model="phonenumber" placeholder="Enter user phone number">
        <button v-on:click="addUsers" class="add-product">Add</button>

    </div>

</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'addUser',
    data() {
        return {
            name: '',
            listuser: [],
            id: ''
        }
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Header
    },
    methods: {
        async addUsers() {
        let result = await axios.post("http://localhost:3000/users", {
            email: this.email,
            name: this.name,
            password: this.password,
            phonenumber: this.phonenumber
        });

        console.warn(result);
        if (result.status == 201) {
            alert("Add user successfully!")
            localStorage.setItem("user-info", JSON.stringify(result.data))
            this.$router.push({ name: 'User' })
        }
    },


        async deleteUser(id) {
            let result = await axios.delete("http://localhost:3000/users/" + id);
            console.warn(result)
            if (result.status == 200) {
                alert("Delete product successfully!")
                this.mounted()
            }
        }
    },

    async load() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: 'User'
            })
        }
        let result = await axios.get("http://localhost:3000/users");
        console.warn(result)
        this.listuser = result.data;
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: 'User'
            })
        }
        let result = await axios.get("http://localhost:3000/users");
        this.listuser = result.data;
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

.add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 15px;
}

.add button {
    width: 300px;
    height: 30px;
    border-radius: 15px;
    background: black;
    color: white;
    cursor: pointer;
}

.update-btn {
    text-decoration: none;
    background-color: #ccc;
    cursor: pointer;
    padding: 15px 20px;
    color: #333;
    font-weight: 700;
}
</style>