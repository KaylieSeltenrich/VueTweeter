<template>
  <div>
    <h2 @click="viewFollowers">View People you Follow:</h2>
    <h3 v-for="follow in follows" :key="follow.userId">
      {{ follow.username }} <br />
      {{ follow.email }} <br />
      <h3 @click="unFollow(follow.userId)">Un-Follow this user</h3>
    </h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "view-followers",

  data() {
    return {
      userId: "",
      follows: [],
    };
  },
  methods: {
    viewFollowers: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          params: {
            userId: cookies.get("user")
          }
        })
        .then(response => {
          console.log(response.data);
          this.follows = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    unFollow: function(followId) {
     console.log(followId)
      axios
        .request({
          url: "https://tweeterest.ml/api/follows",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            followId: followId,
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