<template>
  <div>
    <h1 class="header">All Tweets:</h1>
    <div v-for="tweet in allTweets" :key="tweet.tweetId">
      {{ tweet.username }} <br />

      {{ tweet.content }} <br />

      {{ tweet.createdAt }} <br />

      <div id="likecommentcontainer">
        <comment> </comment>
        <like-tweet :tweetId="tweet.tweetId"> </like-tweet>
      </div>
    </div>
  </div>
</template>

<script>
import LikeTweet from "../components/LikeTweet.vue";
import Comment from "../components/Comment.vue";

export default {
  name: "all-tweets",

  mounted: function() {
    this.getTweets();
  },

  components: {
    LikeTweet,
    Comment
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