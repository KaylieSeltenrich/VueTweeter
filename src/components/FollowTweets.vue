<template>
  <div>
    <div v-for="tweet in tweets" :key="tweet.tweetId">
      {{tweet.username}} <br />
      {{tweet.content}} <br />
      {{tweet.createdAt}} <br />
    <like-tweet :tweetId="tweet.tweetId"> </like-tweet>
    <comments :tweetId="tweet.tweetId"> </comments>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
import LikeTweet from "../components/LikeTweet.vue";
import Comments from "../components/Comments.vue"

export default {
  name: "follow-tweets",
  components: {
    LikeTweet,
    Comments
  },

  props: {
    tweets: {
      type: Array,
      required: true
    },


  },

  mounted: function() {
      this.getTweets();
  },

 data() {
     return {
        followtweets: [],
     }
 },

  methods: {
    getTweets: function() {
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
          this.followtweets = response.data;
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