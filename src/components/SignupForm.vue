<template>
  <div>
    <p>Email:</p>
    <input type="text" id="email-input" class="centertext" v-model="email" />
    <p>Username:</p>
    <input type="text" id="username-input" class="centertext" v-model="username" />
    <p>Password:</p>
    <input type="password" id="password-input" class="centertext" v-model="password" />
    <p>Bio:</p>
    <textarea id="bio-input" class="centertext" v-model="bio"></textarea>
    <p>Birthday:</p>
    <input type="text" id="birthdate-input" class="centertext" v-model="birthdate" placeholder="YYYY-MM-DD" />
    <h2 @click="signupUser">Sign Up</h2>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "signup-form",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      bio: "",
      birthdate: ""
    };
  },

  methods: {
    signupUser: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            email: this.email,
            username: this.username,
            password: this.password,
            bio: this.bio,
            birthdate: this.birthdate
          }
        })
        .then(response => {
          console.log(response.data)
          cookies.set("session", response.data[0].loginToken);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.centertext {
  text-align: center;
}
p {
  text-align: left;
  margin-left: 25%;
}
#bio-input {
  height: 10vh;
  width: 50%;
}
</style>