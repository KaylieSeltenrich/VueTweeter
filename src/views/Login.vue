<template>
  <div>
      <navbar> </navbar>
    <h1>THIS IS THE LOGIN</h1>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Password</p>
    <input type="password" id="password-input" v-model="password" />
    <h2 @click="loginUser">Login</h2>
    <h3>{{ loginStatus }}</h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      email: "",
      password: "",
      loginStatus: ""
    };
  },
  methods: {
    loginUser: function() {
      this.loginStatus = "Loading";
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          //CHECK IF LOGIN TOKEN SENT
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
          cookies.set("user", response.data.userId);
          this.$router.push("/");
        })
        .catch(error => {
          //SHOW USER LOGIN FAILURE
          console.log(error);
          this.loginStatus = "Error";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>