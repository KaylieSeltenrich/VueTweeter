<template>
  <div class="pagecontainer">
    <div class="container" v-if="loginToken">
      <div id="profile-container">
        <update-profile> </update-profile>
        <delete-profile> </delete-profile>
      <view-following> </view-following>
      <view-followers> </view-followers>
      </div>
    </div>
    <div class="loggedout" v-else>
      You shouldn't be here! Please Login or Signup to access this page.
    </div>
  </div>
</template>

<script>
import UpdateProfile from "../components/UpdateProfile.vue";
import DeleteProfile from "../components/DeleteProfile.vue";
import ViewFollowing from "../components/ViewFollowing.vue";
import ViewFollowers from "../components/ViewFollowers.vue";
import cookies from "vue-cookies";

export default {
  name: "profile-page",

  components: {
    UpdateProfile,
    DeleteProfile,
    ViewFollowing,
    ViewFollowers
  },

  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style lang="scss" scoped>
#profile-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10%;
  row-gap: 5%;
}
.pagecontainer {
  height: 40vh;
}
</style>