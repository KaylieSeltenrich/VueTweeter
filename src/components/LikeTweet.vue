<template>
  <div>
    <img id="heart" @click="likeTweet" src="../assets/likeicon.svg" />
    <h4> Number of likes: {{likeNumber.length}} </h4>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "like-tweet",
data() {
  return {
   likeNumber: [],
  }
},
  props: {
    tweetId: {
      type: Number
    }
  },

  mounted: function() {
    this.getLikedTweets();
  },

  methods: {
    likeTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },

    getLikedTweets: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          params: {
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
          this.likeNumber = response.data
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#heart {
  width: 5%;
}
</style>