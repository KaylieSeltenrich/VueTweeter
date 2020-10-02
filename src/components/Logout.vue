<template>
    <div>
<h2 @click="logOut"> Log Out </h2>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        name: "logout-user",
        data() {
            return {
               loginToken: cookies.get("session"),
            }
        },

        methods: {
            logOut: function() {
            axios.request({
                url: "https://tweeterest.ml/api/login",
                method: "DELETE",
                headers: {
                "Content-Type":"application/json",
                "X-Api-Key":"SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P",
                },
                data: {
                loginToken: this.loginToken,
                }

            }).then((response) => {
            console.log(response)
            cookies.remove("session")
            this.$router.push("/login")
           
            }).catch((error) => {
            console.log (error)
            })
            },
        },
    }
</script>

<style lang="sass" scoped>

</style>