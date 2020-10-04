<template>
    <div>
<navbar> </navbar>
<signup-form> </signup-form>
    </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue"
import Navbar from "../components/Navbar.vue"

    export default {
        name: "signup-page",

       components: {
           SignupForm,
           Navbar
       },
    }
</script>

<style lang="scss" scoped>

</style>