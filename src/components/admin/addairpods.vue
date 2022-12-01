<!-- eslint-disable vue/no-unused-components -->
<template>
    <Header />
    <div class="add"> 
        <div class="add-form">
            <h1 style="font-weight: 1000;">Add AirPods</h1>
            <input type="text" v-model="name" placeholder="Enter product name">
            <input type="text" v-model="price" placeholder="Enter product price">
            <input type="text" v-model="code" placeholder="Enter product code">
            <!-- <input type="file" v-on:click="image"> -->
            <button v-on:click="addProduct" class="add-product">Add</button>   
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'AddAirPods',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Header
    },
    data() {
        return {
            name: '',
            price: '',
            code: '',
            image:'',
            listproduct: [],
        }
    },
    methods: {
        async deleteProduct(id) {
            let result = await axios.delete("http://localhost:3000/product-airpods/"+id);
            console.warn(result)
            if(result.status==200) {
                alert("Delete product successfully!")
                localStorage.setItem("product-info", JSON.stringify(result.data))
                this.$router.push({name:'Admin'});
            }   
        },

        async addProduct() {
            let result = await axios.post("http://localhost:3000/product-airpods", {
                name: this.name,
                price: this.price,
                code: this.code,
                // image: this.image
            });
            console.warn(result);
            if (result.status == 201) {
                alert("Add product successfully!")
                localStorage.setItem("product-info", JSON.stringify(result.data))
                this.$router.push({name:'Admin'});
            }
        },

        async reviewFiles(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            // eslint-disable-next-line no-unused-vars
            reader.onloadend = (file) => {
                this.form.photo = reader.result;
            }
            reader.readAsDataURL(file);
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'Add'
            })
        }

        let result = await axios.get("http://localhost:3000/product-airpods");
        console.warn(result)
        this.listproduct = result.data;
    },
}

</script>

<style>
.add {
    margin-top: 15px;
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
