<template>
<div>
<h2> Delete your account: </h2>
<p>Password</p>
<input type="password" id="password-delete" v-model="password">
<h2  @click="deleteProfile">Click here to delete your account </h2>
{{updateStatus}}
</div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
        data() {
            return {
              password: "",   
              loginToken: cookies.get('session'),
              updateStatus: "",
            }
        },
        methods: {
       

            deleteProfile: function() {
                console.log(this.loginToken)
                console.log(this.password)
                this.updateStatus = "Loading"
                axios.request({
                url: "https://tweeterest.ml/api/users",
                method: "DELETE",
                headers: {
                "Content-Type":"application/json",
                "X-Api-Key":"SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P",
                },
                data: {
                    loginToken: this.loginToken,
                     password: this.password,
                }
                }).then((response) => {
                console.log(response)
                this.updateStatus = "Success"
                this.$router.push("/signup")
                cookies.remove("session", response.data.loginToken)
                
                }).catch((error) => {
                console.log(error)
                this.updateStatus = "Error"
                })
            }
        },
    }
</script>

<style lang="sass" scoped>

</style>