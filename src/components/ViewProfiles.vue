<template>
  <div>
    <h2 @click="showProfiles">Discover Profiles:</h2>
    <h3 v-for="user in users" :key="user.userId">
      {{ user.username }} <br />
      {{ user.email }} <br />
      {{ user.birthdate }} <br />
      {{ user.bio }} <br />
      <h3 @click="followUser(user.userId)"> Follow User </h3>
    </h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "view-profiles",

  data() {
    return {
      users: [],
    };
  },

  methods: {
    showProfiles: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/users",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {}
        })
        .then(response => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    followUser: function(userId) {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            followId: userId,
          }
        })
        .then(response => {
          console.log(response.data);

        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="sass" scoped>

</style>