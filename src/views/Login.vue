<template>
  <div class="pagecontainer">
    <div class="login-and-signup">
      <p>Email:</p>
      <input type="text" id="email-input" class="input-text" v-model="email" />
      <p>Password:</p>
      <input type="password" id="password-input" class="input-text" v-model="password" />
      <h2 @click="loginUser">Login</h2>
      <h3>{{ loginStatus }}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
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
  
          console.log(response);
          this.loginStatus = "Success";
          cookies.set("session", response.data.loginToken);
          cookies.set("user", response.data.userId);
          this.$store.commit("loginUpdate",response.data.loginToken);
          this.$router.push("/home");
        })
        .catch(error => {
          console.log(error);
          this.loginStatus = "Error";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.input-text {
  text-align: center;
}
p {
  text-align: left;
  margin-left: 25%;
}

@media only screen and (min-width: 1000px) {
 .input-text {
  text-align: center;
  width: 50%;
  height: 2vh;
  font-size: 1.5em;
  padding: 10px;
}
p {
  text-align: center;
  margin-right: 25%;
  font-size: 2em;
}
.pagecontainer{
  position: fixed;
  width: 100%;
  top: 30%;
}
}



</style>