<template>
  <div>
    <h1 class="header">Update Profile:</h1>
    <p>Email</p>
    <input type="text" id="email-input" v-model="email" />
    <p>Username</p>
    <input type="text" id="username-input" v-model="username" />
    <p>Password</p>
    <input type="password" id="password-input" v-model="password" />
    <p>Bio</p>
    <textarea id="bio-input" v-model="bio"></textarea>
    <p>Birthday</p>
    <input type="text" id="birthdate-input" v-model="birthdate" />
    <button class="button" @click="updateProfile">Update</button>
    <h1>{{ updateStatus }}</h1>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthdate: "",
      updateStatus: "",
      loginToken: cookies.get("session")
    };
  },
  methods: {
    updateProfile: function() {
      this.updateStatus = "Loading";
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate,
            loginToken: this.loginToken
          }
        })
        .then(response => {
          console.log(response);
          this.updateStatus = "Success";
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


</style>