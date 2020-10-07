<template>
  <div>
     <div v-if="loginToken">
    <view-profiles> </view-profiles>
    <all-tweets> </all-tweets>
    </div>
  </div>
</template>

<script>
import ViewProfiles from "../components/ViewProfiles.vue";
import AllTweets from "../components/AllTweets.vue";
import cookies from "vue-cookies";

export default {
  name: "discover-page",

  components: {
    ViewProfiles,
    AllTweets
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