<template>
  <div>
    <h1 @click="viewFollowers" class="header">View Followers:</h1>
    <div v-for="follower in followers" :key="follower.userId">
      {{ follower.username }}
    </div>
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
      followers: []
    };
  },

  methods: {
    viewFollowers: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/followers",
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
          this.followers = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>