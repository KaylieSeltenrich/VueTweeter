<template>
  <div>
    <h2>Create Tweet:</h2>
    <textarea id="tweet-input" v-model="content"></textarea>
    <br />
    <button @click="createTweet">Submit</button>

    <h2>Your Tweets:</h2>
    <h3 v-for="tweet in tweets" :key="tweet.tweetId">
      {{ tweet.username }} <br />
      {{ tweet.content }} <br />
      {{ tweet.createdAt }} <br />
    
    </h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "create-tweet",
  mounted: function() {
    this.getTweets();
  },
  data() {
    return {
      content: "",
      userId: cookies.get("user"),
    };
  },

  computed: {
      tweets() {
          return this.$store.getters.getUserTweets
      }
  },

  methods: {
    createTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.content
          }
        })
        .then(response => {
          console.log(response);
          
        })
        .catch(error => {
          console.log(error);
        });
    },

    getTweets: function() {
      this.$store.dispatch("getAllTweets");

    },

    
  }
};
</script>

<style lang="scss" scoped>
</style>