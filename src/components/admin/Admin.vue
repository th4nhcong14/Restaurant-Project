eslint-disable vue/no-unused-components
<template>
    <Header />
    <div>
        <h1 style="font-weight: 1000;">IPhone</h1>
    <table border="1">
        <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Price</td>
            <!-- <td>Image</td> -->
        </tr>
        

        <tr v-for="item in listproduct" :key="item.id">
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <!-- <td>{{ item.image }}</td> -->
            <td>
                <router-link :to="'/update/' + item.id" class="update-btn">Update</router-link>
            </td>
            <td>
                <button v-on:click="deleteProduct(item.id)" class="add-btn">Delete</button>
            </td>
        </tr>
    </table>
    <router-link :to="'/add'" class="add-btn">Add</router-link>
    </div>

    <div>
        <h1 style="font-weight: 1000;">MAC</h1>
    <table border="1">
        <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Price</td>
            <!-- <td>Image</td> -->
        </tr>
        

        <tr v-for="item in imac" :key="item.id">
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <!-- <td>{{ item.image }}</td> -->
            <td>
                <router-link :to="'/updateimac/' + item.id" class="update-btn">Update</router-link>
            </td>
            <td>
                <button v-on:click="deleteImac(item.id)" class="update-btn">Delete</button>
            </td>
        </tr>
    </table>
    <router-link :to="'/addimac'" class="add-btn">Add</router-link>
    </div>

    <div>
        <h1 style="font-weight: 1000;">IPAD</h1>
    <table border="1">
        <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Price</td>
            <!-- <td>Image</td> -->
        </tr>
        

        <tr v-for="item in ipad" :key="item.id">
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <!-- <td>{{ item.image }}</td> -->
            <td>
                <router-link :to="'/updateipad/' + item.id" class="update-btn">Update</router-link>
            </td>
            <td>
                <button v-on:click="deleteIPad(item.id)" class="update-btn">Delete</button>
            </td>
        </tr>
    </table>
    <router-link :to="'/addipad'" class="add-btn">Add</router-link>
    </div>

    <div>
        <h1 style="font-weight: 1000;">AIRPODS</h1>
    <table border="1">
        <tr>
            <td>Code</td>
            <td>Name</td>
            <td>Price</td>
            <!-- <td>Image</td> -->
        </tr>
        

        <tr v-for="item in airpods" :key="item.id">
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <!-- <td>{{ item.image }}</td> -->
            <td>
                <router-link :to="'/updateairpods/' + item.id" class="update-btn">Update</router-link>
            </td>
            <td>
                <button v-on:click="deleteAirPods(item.id)" class="update-btn">Delete</button>
            </td>
        </tr>
    </table>
    <router-link :to="'/addairpods'" class="add-btn">Add</router-link>
    </div>    

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
            id:'',
            imac: [],
            ipad: [],
            airpods: []
        }
    },
    components: {
        Header
    },
    methods: {
        async deleteProduct(id) {
            let result = await axios.delete("http://localhost:3000/product-iphone/"+id);
            console.warn(result)
            if(result.status==200) {
                alert("Delete product successfully!")
            }   
            location.reload(); 
        },

        async deleteImac(id) {
            let result = await axios.delete("http://localhost:3000/product-imac/"+id);
            console.warn(result)
            if(result.status==200) {
                alert("Delete product successfully!")
            }   
            location.reload(); 
        },

        async deleteIPad(id) {
            let result = await axios.delete("http://localhost:3000/product-ipad/"+id);
            console.warn(result)
            if(result.status==200) {
                alert("Delete product successfully!")
            }
            location.reload();    
        },

        async deleteAirPods(id) {
            let result = await axios.delete("http://localhost:3000/product-airpods/"+id);
            console.warn(result)
            if(result.status==200) {
                alert("Delete product successfully!")
            }  
            location.reload(); 
        }
    },
    // async loadData() {
    //     let user = localStorage.getItem("user-info", JSON.stringify(result.data[0]));
    //     this.name = JSON.parse(user).name;
    //     if (!user) {
    //         this.$router.push({
    //             name: 'Login'
    //         })
    //     }
    //     let result = await axios.get("http://localhost:3000/product-iphone");
    //     console.warn(result)
    //     this.listproduct = result.data;   
    // },

   async mounted() {
        let user = localStorage.getItem('user-info')
        // this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({
                name: 'Login'
            })
        }
        let result = await axios.get("http://localhost:3000/product-iphone")
        this.listproduct = result.data
        let resultimac = await axios.get("http://localhost:3000/product-imac")
        this.imac = resultimac.data
        let resultipad = await axios.get("http://localhost:3000/product-ipad")
        this.ipad = resultipad.data
        let resultairpods = await axios.get("http://localhost:3000/product-airpods")
        this.airpods = resultairpods.data
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

.add-btn {
    text-decoration: none;
    background-color: #ccc;
    cursor: pointer;
    padding: 15px 20px;
    color: #333;
    font-weight: 700;
}
</style>