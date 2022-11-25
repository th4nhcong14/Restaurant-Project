<template>
    <header>
        <a href="">Iphone</a>
        <a href="">Accessories</a>
        <div class="search-wrapper">
            <input type="search" v-model="search" placeholder="Search" />
        </div>
    </header>

    <div class="img-demo">
    </div>

    <h1 class="title">Iphone 14</h1>
    <!-- <div class="iphone-test">
        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_m_12.png" alt="">
        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/v/_/v_ng_12.png" alt="">
        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/_/x_m_16.png" alt="">
        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_1_1.png" alt="">
    </div> -->
    <div>
        <table class="product-table">
            <!-- <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Code</td>
                <td></td>
            </tr> -->
            <tr v-for="item in listproduct" :key="item.id">
                <td>
                    <img src="{{item.image}}">
                </td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.code}}</td>
                
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Store',
    data() {
        return {
            name:'',
            listproduct:[],
            id:''
        }
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

<style scoped>
header {
    display: flex;
    justify-content: center;
    background-color: black;
    font-size: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
    padding: 20px;
    color: white;
    text-decoration: none;
}

a:hover {
    background-color: white;
    color: black;
}

.search-wrapper {
    display: flex;
    padding: 25px;
    float: right;
    margin-left: auto;
}

input {
    width: 250px;
}

.img-demo {
    background-image: url("https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2022/02/2-5.jpeg");
    padding: 444px;
    background-size: cover;
    border: 1px solid;
}

.title{
    padding-top: 20px;
}

.iphone-test {
    display: flex;
    margin: auto;
    justify-content: center;
    width: 50%;
    padding-top: 30px;
}
</style>