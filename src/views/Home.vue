<template>
  <div>
    <div v-if="loginToken">
      <create-tweets> </create-tweets>
      <logout> </logout>
    </div>
    <div v-if="!loginToken">
    <p> Please sign up or log in to continue. </p>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import Logout from "../components/Logout.vue";
import CreateTweets from "../components/CreateTweets.vue";

export default {
  name: "home-page",

  data() {
    return {
      loginToken: cookies.get("session")
    };
  },

  components: {
    Logout,
    CreateTweets
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500&display=swap");

* {
  margin: 0%;
  padding: 0%;
  
}

p {
  font-size: 1.5em;
  text-align: center;
  margin: 5%;
}
</style>