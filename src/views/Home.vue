<template>
  <div class="pagecontainer">
    <div v-if="loginToken">
      <create-tweets> </create-tweets>
    </div>
    <div class="loggedout" v-if="!loginToken">
      <p>Please Login or Signup to continue.</p>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import CreateTweets from "../components/CreateTweets.vue";

export default {
  name: "home-page",

  data() {
    return {
      loginToken: cookies.get("session")
    };
  },

  components: {
    CreateTweets
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500&display=swap");
</style>