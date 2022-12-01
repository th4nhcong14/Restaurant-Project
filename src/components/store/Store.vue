<template>
    <header>
        <a href="#return-iphone">IPhone</a>
        <a href="#return-imac">IMac</a>
        <a href="#return-ipad">Ipad</a>
        <a href="#return-airpods">AirPods</a>
        <div class="search-wrapper" style="font-size: 15pxpx;">
            <input type="search" v-model="search" placeholder="Search" />
        </div>
        <a href="/cart">Cart</a>
    </header>

    <div class="img-demo">
    </div>

    <h1 class="title">IPhone</h1>
    <div class="iphone-test" id="return-iphone">
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
    <div class="iMac-test" id="return-imac">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202110?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1664576115052" alt="">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-air-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1653499620093" alt="">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-13-202206?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1665082744007" alt="">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=490&hei=500&fmt=jpeg&qlt=95&.v=1625868688000" alt="">
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
    <div class="iMPad-test" id="return-ipad">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=364&hei=333&fmt=png-alpha&.v=1664477161220" alt="">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=364&hei=333&fmt=png-alpha&.v=1664477161220" alt="">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-digitalmat-gallery-1-202210?wid=364&hei=333&fmt=png-alpha&.v=1664392871297" alt="">
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-digitalmat-gallery-1-202111?wid=365&hei=333&fmt=png-alpha&.v=1635183151000" alt="">
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
    <div class="airpods-test" id="return-airpods">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=532&hei=582&fmt=png-alpha&.v=1551489688005" alt="">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=445&hei=445&fmt=jpeg&qlt=95&.v=1632861342000" alt="">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=532&hei=582&fmt=png-alpha&.v=1660803972361" alt="">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=445&hei=445&fmt=jpeg&qlt=95&.v=1660803972361" alt="">
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
    display:flex;
    margin: auto ;
    justify-content: center;
    width: 50%;
    padding-top: 30px;
    object-fit: cover;
}
.airpods-test {
    display: flex;
    margin: auto;
    justify-content: center;
    max-width: 100%;
    height: auto;
    padding-top: 30px;
    object-fit: cover   ;
}
</style>