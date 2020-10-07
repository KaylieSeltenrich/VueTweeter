<template>

  <div id="container">
     <div v-if="loginToken">
    <update-profile> </update-profile>
    <view-following> </view-following>
    <delete-profile> </delete-profile>
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
* {
  margin: 0%;
  padding: 0%;
  width: 100%;
}

#container {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>