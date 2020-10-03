<template>
    <div>
        <h1> Tweeter Home </h1>
        <navbar> </navbar>
        
    <div v-if="loginToken">
This should only show up if the user is logged in <br>

<logout> </logout>

    </div>


    </div>

</template>

<script>
import Navbar from "../components/Navbar.vue";
import cookies from "vue-cookies";
import Logout from "../components/Logout.vue";

    export default {
        name: "home-page",

        data() {
            return {
                loginToken: cookies.get("session")
            }
        },
        
        components: {
            Navbar,
            Logout,
        },
    }

</script>

<style lang="scss" scoped>

</style>