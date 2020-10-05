<template>
  <div>
    <h3 @click="getTweets">Show all Tweets:</h3>
    <h3 v-for="tweet in tweets" :key="tweet.id">
      {{ tweet.username }} <br />

      {{ tweet.content }} <br />

      {{ tweet.createdAt}} <br />
    </h3>
  </div>
</template>

<script>
export default {
 name: "all-tweets",

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