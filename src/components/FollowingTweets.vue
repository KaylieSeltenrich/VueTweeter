<template>
  <div>
    <h1 class="header">People you follow Tweets:</h1>
    <div v-for="followsTweet in followsTweets" :key="followsTweet.tweetId">
      {{ followsTweet.username }} <br />

      {{ followsTweet.content }} <br />

      {{ followsTweet.createdAt }} <br />
    
      <like-tweet> </like-tweet>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import LikeTweet from "../components/LikeTweet.vue";

export default {
  name: "following-tweets",
  components: {
    LikeTweet
  },
  data() {
    return {
      userId: cookies.get("user"),
      follows: [],
      followsTweets: []
    };
  },
  mounted: function() {
    this.getFollowingTweets();
  },
  methods: {
    getTweets: function() {
      this.$store.dispatch("getAllTweets");
    },

    getFollowingTweets: function() {
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
          this.followsTweets = this.$store.getters.getFollowingTweets(
            this.follows
          );
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