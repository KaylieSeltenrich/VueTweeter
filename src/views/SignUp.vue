<template>
    <div>
<router-link to="/login">Login</router-link>
<h1> Sign Up Page </h1>
<signup-form> </signup-form>
    </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue"

    export default {
        name: "signup-page",

       components: {
           SignupForm,
       },
    }
</script>

<style lang="sass" scoped>

</style>