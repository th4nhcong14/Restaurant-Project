<template>
    <header>
        <a href="">IPhone</a>
        <a href="">IMac</a>
        <a href="">Ipad</a>
        <a href="">AirPods</a>
        <div class="search-wrapper" style="font-size: 15pxpx;">
            <input type="search" v-model="search" placeholder="Search" />
        </div>
        <a href="/cart">Cart</a>
    </header>

    <div class="img-demo">
    </div>

    <h1 class="title">IPhone</h1>
    <div class="iphone-test">
        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/_/t_m_12.png" alt="">
        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/v/_/v_ng_12.png" alt="">
        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/x/_/x_m_16.png" alt="">
        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/_/b_c_1_1.png" alt="">
    </div>
    <div>
        <table class="product-table">
            <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Code</td>
            </tr>
            <tr v-for="item in listproduct" :key="item.id">
                <!-- <td>
                    <img src: require({{item.image}})>
                </td> -->
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.code}}</td>
                <td>
                    <button v-on:click="addIphoneToCart(item.id)">Add to cart</button>
                </td>
                
            </tr>
        </table>
    </div>

    <h1 class="title">IMac</h1>
    <div class="iMac-test">
        <img src="http://www.maccenter.vn/App_Images/iMac-5K-2020.jpg" alt="">
        <img src="https://cdn.tgdd.vn/Products/Images/5698/238061/imac-24-icnh-2021-m1-thumb-bac-1-600x600.jpg" alt="">
        <img src="https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/gallery_adv/public/2021/05/m1_apple_imac_24in_review_-_0004.jpeg?itok=kSeWF-SR" alt="">
        <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/03/iMac-2021-face-1.jpg" alt="">
    </div>
    <div>
        <table class="product-table">
            <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Code</td>
            </tr>
            <tr v-for="item in imac" :key="item.id">
                <!-- <td>
                    <img src: require({{item.image}})>
                </td> -->
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.code}}</td>
                <td>
                    <button v-on:click="addIMacToCart(item.id)">Add to cart</button>
                </td>
            </tr>
        </table>
    </div>

    <h1 class="title">IPad</h1>
    <div class="iMPad-test">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
        <img src="" alt="">
    </div>
    <div>
        <table class="product-table">
            <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Code</td>
            </tr>
            <tr v-for="item in ipad" :key="item.id">
                <!-- <td>
                    <img src: require({{item.image}})>
                </td> -->
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.code}}</td>
                <td>
                    <button v-on:click="addIPadToCart(item.id)">Add to cart</button>
                </td>
            </tr>
        </table>
    </div>

    <h1 class="title">AirPods</h1>
    <div class="airpods-test">

    </div>
    <div>
        <table class="product-table">
            <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Code</td>
            </tr>
            <tr v-for="item in airpods" :key="item.id">
                <!-- <td>
                    <img src: require({{item.image}})>
                </td> -->
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.code}}</td>
                <td>
                    <button v-on:click="addAirPodsToCart(item.id)">Add to cart</button>
                </td>
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
            id:'',
            price:'',
            code: '',
            imac: [],
            ipad:[],
            airpods:[],
            listiphone: [],
            iphonename:'',
            iphonecode:'',
            iphoneprice:''
        }
    },
    methods: {
        async addIphoneToCart(id) {
            let result = await axios.get("http://localhost:3000/product-iphone/"+id,)
            this.listiphone = result.data;
            result = await axios.post("http://localhost:3000/cart",{
                name: this.listiphone.name,
                price: this.listiphone.price,
                code: this.listiphone.code
            });
            if (result.status == 201) {
                alert("Add to cart successfully!")
            } 
        },
        async addIMacToCart(id) {
            let result = await axios.get("http://localhost:3000/product-imac/"+id,)
            this.listiphone = result.data;
            result = await axios.post("http://localhost:3000/cart",{
                name: this.listiphone.name,
                price: this.listiphone.price,
                code: this.listiphone.code
            });
            if (result.status == 201) {
                alert("Add to cart successfully!")
            } 
        },
        async addIPadToCart(id) {
            let result = await axios.get("http://localhost:3000/product-ipad/"+id,)
            this.listiphone = result.data;
            result = await axios.post("http://localhost:3000/cart",{
                name: this.listiphone.name,
                price: this.listiphone.price,
                code: this.listiphone.code
            });
            if (result.status == 201) {
                alert("Add to cart successfully!")
            } 
        },
        async addAirPodsToCart(id) {
            let result = await axios.get("http://localhost:3000/product-airpods/"+id,)
            this.listiphone = result.data;
            result = await axios.post("http://localhost:3000/cart",{
                name: this.listiphone.name,
                price: this.listiphone.price,
                code: this.listiphone.code
            });
            if (result.status == 201) {
                alert("Add to cart successfully!")
            } 
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
        let result = await axios.get("http://localhost:3000/product-iphone");
        this.listproduct = result.data;
        let resultimac = await axios.get("http://localhost:3000/product-imac");
        this.imac = resultimac.data;
        let resultipad = await axios.get("http://localhost:3000/product-ipad");
        this.ipad = resultipad.data;
        let resultairpods = await axios.get("http://localhost:3000/product-airpods");
        this.airpods = resultairpods.data;
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

.iMac-test {
    display:block;
    margin: auto;
    justify-content: center;
    width: 100%;
    padding-top: 30px;
}

</style>