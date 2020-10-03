<template>
    <div>
        <h1> Tweeter Home </h1>
        <div id="navbar">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Signup</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/profile">Profile</router-link> |
        </div>
    <div v-if="loginToken">
This should only show up if the user is logged in 
    </div>


    </div>

</template>

<script>

import cookies from "vue-cookies";

    export default {
        name: "home-page",

        data() {
            return {
                loginToken: cookies.get("session")
            }
        },
    }

</script>

<style lang="sass" scoped>

</style>