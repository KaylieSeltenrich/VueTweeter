<template>
  <div class="pagecontainer">
    <div v-if="loginToken">
    <div id="button-container">
      <view-profiles v-if="showCreateTweet == false"> </view-profiles>
      <button class="button" @click="showCreateTweet = !showCreateTweet"> Create a Tweet </button>
      </div>
      <div v-if="showCreateTweet == true" id="create-tweet-container">
      <create-tweets> </create-tweets>
      </div>
      
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
import CreateTweets from "../components/CreateTweets.vue";
import cookies from "vue-cookies";

export default {
  name: "discover-page",

  components: {
    ViewProfiles,
    AllTweets,
    CreateTweets
  },

  data() {
    return {
      loginToken: cookies.get("session"),
      showCreateTweet: false,
    };
  }
};
</script>

<style lang="scss" scoped>
#button-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>