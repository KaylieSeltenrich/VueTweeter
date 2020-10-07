<template>
  <div>
    <h1 class="header">All Tweets:</h1>
    <div v-for="tweet in allTweets" :key="tweet.tweetId">
      {{ tweet.username }} <br />
      
      {{ tweet.content }} <br />

      {{ tweet.createdAt }} <br />
    
    <like-tweet :tweetId="tweet.tweetId"> </like-tweet>
    </div>
  </div>
</template>

<script>
import LikeTweet from "../components/LikeTweet.vue";

export default {
  name: "all-tweets",

  mounted: function() {
    this.getTweets();
  },

  components: {
  LikeTweet,
},

  computed: {
    allTweets() {
      return this.$store.state.allTweets;
    }
  },

  methods: {
    getTweets: function() {
      this.$store.dispatch("getAllTweets");
    }
  }
};
</script>

<style lang="sass" scoped>

</style>