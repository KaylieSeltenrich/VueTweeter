<template>
  <div>
    <view-following> </view-following>
    <update-profile> </update-profile>
    <delete-profile> </delete-profile>
  </div>
</template>

<script>
import UpdateProfile from "../components/UpdateProfile.vue";
import DeleteProfile from "../components/DeleteProfile.vue";
import ViewFollowing from "../components/ViewFollowing.vue";

export default {
  name: "profile-page",

  components: {
    UpdateProfile,
    DeleteProfile,
    ViewFollowing
  }
};
</script>

<style lang="scss" scoped>
</style>