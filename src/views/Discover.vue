<template>
  <div>
    <navbar> </navbar>
    <view-profiles> </view-profiles>
  </div>
</template>

<script>
import ViewProfiles from "../components/ViewProfiles.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "discover-page",

  components: {
    ViewProfiles,
    Navbar
  }
};
</script>

<style lang="scss" scoped>

</style>