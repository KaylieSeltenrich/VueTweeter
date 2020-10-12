<template>
  <div class="pagecontainer">
    <h1 class="header">All Tweets:</h1>
    <div class="tweets-container" v-for="tweet in allTweets" :key="tweet.tweetId">
    <div class="tweet-container">
      <page-tweet :tweetObject="tweet"> </page-tweet>
   </div>
    </div>
  </div>
</template>

<script>
import PageTweet from "../components/Tweets.vue";
export default {
  name: "all-tweets",

  mounted: function() {
    this.getTweets();
  },

  components: {
    PageTweet
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

<style lang="scss" scoped>

</style>