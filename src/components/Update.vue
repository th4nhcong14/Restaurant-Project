<!-- eslint-disable vue/no-unused-components -->
<template>
    <Header/>
</template>

<script>
import Header from './Header.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Update',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        Header
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'Update'
            })
        }
    },
}

</script>

<style>

</style>