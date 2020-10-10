<template>
  <div class="pagecontainer">
    <h1 class="header">All Tweets:</h1>
    <div v-for="tweet in allTweets" :key="tweet.tweetId">
    <page-tweet :tweetObject="tweet"> </page-tweet>
    </div>
  </div>
</template>

<script>

import PageTweet from "../components/Tweets.vue"
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

#likecommentcontainer {
  display: grid;
  grid-template-columns: 1fr 2fr;

 
}
</style>