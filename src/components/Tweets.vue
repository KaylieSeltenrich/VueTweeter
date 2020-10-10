<template>
  <div>
    {{ tweetObject.username }} <br />

    {{ tweetObject.content }} <br />

    {{ tweetObject.createdAt }} <br />

    <div id="likecommentcontainer">
      <comments :tweetId="tweetObject.tweetId"> </comments>
      <like-tweet :tweetId="tweetObject.tweetId"> </like-tweet>
    </div>
  </div>
</template>

<script>
import LikeTweet from "../components/LikeTweet.vue";
import Comments from "../components/Comments.vue";

export default {
  name: "page-tweet",
  components: {
      LikeTweet,
      Comments
  },
  props: {
    tweetObject: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>