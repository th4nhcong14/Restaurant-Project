<template>
    <main>
        <div class="container">
            <h1>Sign Up</h1>
            <div class="register">
                <input type="text" placeholder="Enter Nane" />
                <input type="text" placeholder="Enter Email" />
                <input type="text" placeholder="Enter Password" />
                <button>Sign up</button>
            </div>
        </div>
    </main>
</template>
<script>

export default {
    name: 'SignUp'
}
</script>

<style>
.logo {
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    background-image: url('https://img.favpng.com/6/15/10/food-restaurant-breakfast-cuisine-cook-png-favpng-hEwhUh9EMqX2uLXZsvEi97G0V.jpg');
    /* padding: 0 200px 200px 200px; */
    margin: 0 auto;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 15px;
}

.register button {
    width: 300px;
    height: 30px;
    border-radius: 15px;
    background: black;
    color: white;
    cursor: pointer;
}


</style>