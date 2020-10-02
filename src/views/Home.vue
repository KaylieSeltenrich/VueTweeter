<template>
    <div>
        <h1> Tweeter Home </h1>
        <div id="navbar">
        <router-link to="/">Home</router-link> |
        <router-link to="/signup">Signup</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/profile">Profile</router-link> |
        </div>

    </div>
</template>

<script>
    export default {
        name: "home-page"
    }
</script>

<style lang="sass" scoped>

</style>