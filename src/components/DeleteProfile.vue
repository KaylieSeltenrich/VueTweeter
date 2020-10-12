<template>
  <div>
    <h1 class="header">Delete account:</h1>
    <p>Password</p>
    <input type="password" id="password-delete" v-model="password" />

    <button class="button" v-if="!showDelete" @click="showDelete = true">
      Click here to delete your account
    </button>
    <button class="button" v-if="showDelete" @click="deleteProfile">Confirm</button>

    {{ updateStatus }}
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      password: "",
      loginToken: cookies.get("session"),
      updateStatus: "",
      showDelete: false
    };
  },
  methods: {
    deleteProfile: function() {
      console.log(this.loginToken);
      console.log(this.password);
      this.updateStatus = "Loading";
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: this.loginToken,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          this.updateStatus = "Success";
          this.$router.push("/signup");
          cookies.remove("session", response.data.loginToken);
        })
        .catch(error => {
          console.log(error);
          this.updateStatus = "Error";
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  margin-right: 5%;
}
</style>