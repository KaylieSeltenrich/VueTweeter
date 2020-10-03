<template>
  <div>
    <h2 @click="viewFollowers">View Followers</h2>
    <h3 v-for="follow in follows" :key="follow.userId">
      {{ follow.username }} <br />
      {{ follow.email }} <br />
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
      follows: []
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
    }
  }
};
</script>

<style lang="sass" scoped>

</style>