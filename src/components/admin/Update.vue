<!-- eslint-disable vue/no-unused-components -->
<template>
    <Header/>
    <div class="update">
     <h1>Update Iphone</h1>
     <input type="text" v-model="listProduct.name" placeholder="Enter product name">
     <input type="text" v-model="listProduct.price" placeholder="Enter product price">
     <input type="text" v-model="listProduct.code" placeholder="Enter product code">
     <button v-on:click="updateProduct" class="btn">Update</button>
    </div>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Update',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Header
    },
    data() {
        return {
            listProduct: {
                name: '',
                price: '',
                code: '',
            }
        }
    },
    methods: {
        async updateProduct() {
            console.warn(this.listProduct)
            const result = await axios.put('http://localhost:3000/product-iphone/'+this.$route.params.id,
            {
                name:this.listProduct.name,
                price:this.listProduct.price,
                code:this.listProduct.code,
            });
                       
            if(result.status==200) {
                alert("Update product successfully!")
                this.$router.push({name:'Admin'});
            }    

        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }

        const result = await axios.get('http://localhost:3000/product-iphone/'+this.$route.params.id)
        console.warn(result.data)
        this.listProduct=result.data
    },
    
}

</script>

<style>
.update {
    margin-top: 15px;
}

.update input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 15px;
}

.update button {
    width: 300px;
    height: 30px;
    border-radius: 15px;
    background: black;
    color: white;
    cursor: pointer;
}

</style>