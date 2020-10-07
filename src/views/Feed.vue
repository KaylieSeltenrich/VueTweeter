<template>
  <div>
    <div v-if="loginToken">
      <following-tweets> </following-tweets>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import FollowingTweets from "../components/FollowingTweets.vue";

export default {
  name: "feed-page",
  components: {
    FollowingTweets
  },

  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style lang="scss" scoped>
</style>