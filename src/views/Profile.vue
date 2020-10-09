<template>
  <div class="pagecontainer">
    <div class="container" v-if="loginToken">
      <update-profile> </update-profile>
      <view-following> </view-following>
      <delete-profile> </delete-profile>
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
import cookies from "vue-cookies";

export default {
  name: "profile-page",

  components: {
    UpdateProfile,
    DeleteProfile,
    ViewFollowing
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