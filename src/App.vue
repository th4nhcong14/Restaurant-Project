<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

.container .logo {
    width: 100px;
    height: 100px;
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

.register button, .login button {
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

.nav {
  background-color: black;
  overflow: hidden;
}

.nav a {
  float: left;
  color: aliceblue;
  padding: 15px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  background: white;
  color: black;
}

#hello {
  float: right;
  margin-right: 15px;
  color: white;
  font-size: 20px;
}

td {
  width: 100px;
  height: 50px;
  color: black;
}

table {
  margin: 15px auto;
  border: 5px solid black;
  background-color: white;

}

.logo {
  margin-top: 100px;
}

</style>
