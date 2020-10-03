<template>
  <div>
   <navbar> </navbar>
    <view-followers> </view-followers>
    <update-profile> </update-profile>
    <delete-profile> </delete-profile>
  </div>
</template>

<script>
import UpdateProfile from "../components/UpdateProfile.vue";
import DeleteProfile from "../components/DeleteProfile.vue";
import ViewFollowers from "../components/ViewFollowers.vue";
import Navbar from "../components/Navbar.vue"

export default {
  name: "profile-page",

  components: {
    UpdateProfile,
    DeleteProfile,
    ViewFollowers,
    Navbar
  }
};
</script>

<style lang="scss" scoped>

</style>