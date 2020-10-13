<template>
  <div class="pagecontainer">
    <div v-if="loginToken">
      <create-tweets> </create-tweets>
      <your-tweets> </your-tweets>
    </div>
    <div class="loggedout" v-if="!loginToken">
      <p>Please Login or Signup to continue.</p>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import CreateTweets from "../components/CreateTweets.vue";
import YourTweets from "../components/YourTweets.vue";

export default {
  name: "home-page",

  data() {
    return {
      loginToken: cookies.get("session")
    };
  },

  components: {
    CreateTweets,
    YourTweets,
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500&display=swap");

</style>