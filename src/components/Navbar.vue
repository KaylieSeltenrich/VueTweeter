<template>

<div id="navbar">
        <router-link to="/login" v-if="!loginToken">Login </router-link> 
        <router-link to="/signup" v-if="!loginToken">Signup </router-link> 
        <router-link to="/" v-if="loginToken"> Home </router-link> 
        <router-link to="/profile" v-if="loginToken"> Profile </router-link> 
        <router-link to="/discover" v-if="loginToken"> Discover </router-link> 
 </div>
    
</template>

<script>
import cookies from "vue-cookies";

    export default {
        name: "navigation-bar",
    data() {
    return {
      loginToken: cookies.get("session")
    };
  },
    }
</script>

<style lang="scss" scoped>
#navbar {
    font-size: 1.5em;

    a {
     text-decoration: none;
     color: black;
    }
}
</style>