<template>
  <div>
    <button class="button" v-if="loginToken" id="log-out" @click="logOut">
      Log Out
    </button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "logout-user",

  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    }
  },

  methods: {
    logOut: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/login",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
          cookies.remove("session");
          cookies.remove("user");
          this.$store.commit("loginDelete");
          this.$router.push("/home");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#log-out {
  padding: 2%;
  float: right;
  font-size: 0.9em;
  margin: 3%;
}

@media only screen and (min-width: 1000px) {
  #log-out {
    margin: 0;
    margin-right: 1%;
    margin-bottom: 10px;
    padding: 0;
  }
  .button {
    width: 10%;
    height: 5vh;
  }
}
</style>