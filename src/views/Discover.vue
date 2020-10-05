<template>
  <div>
    <view-profiles> </view-profiles>
    <all-tweets> </all-tweets>
  </div>
</template>

<script>
import ViewProfiles from "../components/ViewProfiles.vue";
import AllTweets from "../components/AllTweets.vue";

export default {
  name: "discover-page",

  components: {
    ViewProfiles,
    AllTweets
  }
};
</script>

<style lang="scss" scoped>
</style>