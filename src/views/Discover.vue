<template>
  <div class="pagecontainer">
     <div v-if="loginToken">
    <view-profiles> </view-profiles>
    <all-tweets> </all-tweets>
    </div>
    <div class="loggedout" v-else>
     You shouldn't be here! Please Login or Signup to access this page.
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