<template>
  <div>
    <h2>All Tweets:</h2>
    <h3 v-for="tweet in allTweets" :key="tweet.tweetId">
      {{ tweet.username }} <br />
      
      {{ tweet.content }} <br />

      {{ tweet.createdAt }} <br />
    
    <like-tweet> </like-tweet>
    </h3>
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