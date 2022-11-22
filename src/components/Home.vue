<!-- eslint-disable vue/no-unused-components -->
<template>
    <Header/>
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
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    data() {
        return {
            name:'',
            listproduct: [],
        }
    },
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Header
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({
                name: 'Home'
            })
        }
        let result = await axios.get("http://localhost:3000/list-product");
        console.warn(result)
        this.listproduct = result.data;
    },
}

</script>

<style>

</style>