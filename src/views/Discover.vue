<template>
  <div>
    <navbar> </navbar>
    <view-profiles> </view-profiles>
    <all-tweets> </all-tweets>
  </div>
</template>

<script>
import ViewProfiles from "../components/ViewProfiles.vue";
import AllTweets from "../components/AllTweets.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "discover-page",

  components: {
    ViewProfiles,
    Navbar,
    AllTweets
  }
};
</script>

<style lang="scss" scoped>

</style>