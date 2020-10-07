<template>
  <div>
    <h2>All Tweets:</h2>
    <h3 v-for="tweet in allTweets" :key="tweet.tweetId">
      {{ tweet.username }} <br />

      {{ tweet.content }} <br />

      {{ tweet.createdAt }} <br />
    </h3>
  </div>
</template>

<script>
export default {
  name: "all-tweets",

  mounted: function() {
    this.getTweets();
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