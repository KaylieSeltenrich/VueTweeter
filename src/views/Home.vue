<template>
  <div>
    <div v-if="loginToken">
      <create-tweet> </create-tweet>
      <logout> </logout>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import Logout from "../components/Logout.vue";
import CreateTweet from "../components/CreateTweet.vue";

export default {
  name: "home-page",

  data() {
    return {
      loginToken: cookies.get("session")
    };
  },

  components: {
    Logout,
    CreateTweet
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500&display=swap");

* {
  margin: 0%;
  padding: 0%;
}
</style>