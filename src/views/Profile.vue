<template>
  <div>
   <navbar> </navbar>
    <view-following> </view-following>
    <update-profile> </update-profile>
    <delete-profile> </delete-profile>
  </div>
</template>

<script>
import UpdateProfile from "../components/UpdateProfile.vue";
import DeleteProfile from "../components/DeleteProfile.vue";
import ViewFollowing from "../components/ViewFollowing.vue";
import Navbar from "../components/Navbar.vue"

export default {
  name: "profile-page",

  components: {
    UpdateProfile,
    DeleteProfile,
    ViewFollowing,
    Navbar
  }
};
</script>

<style lang="scss" scoped>

</style>