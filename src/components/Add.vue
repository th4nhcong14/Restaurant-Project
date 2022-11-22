<!-- eslint-disable vue/no-unused-components -->
<template>
    <Header/>
    <div>
     <input type="text" v-model="name" placeholder="Enter product name">
     <input type="text" v-model="price" placeholder="Enter product price">
     <input type="text" v-model="code" placeholder="Enter product code">
     <button v-on:click="addProduct" class="btn">Add</button>
    </div>
    
    <div>
        <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
        </tr>

        <tr v-for="item in listproduct" :key="item.id">
            <td>{{item.code}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
        </tr>
    </table>
    </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Add',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Header
    },
    data() {
        return {
            name: '',
            price:'',
            code:'',
            listproduct: [],
        }
    },
    methods: {
        async addProduct() {
            let result = await axios.post("http://localhost:3000/list-product",{
                name: this.name,
                price: this.price,
                code: this.code
            });

            console.warn(result);
            if (result.status == 201) {
                alert("Add product successfully!")
                localStorage.setItem("product-info", JSON.stringify(result.data))
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'Add'
            })
        }

        let result = await axios.get("http://localhost:3000/list-product");
        console.warn(result)
        this.listproduct = result.data;
    },
}

</script>
