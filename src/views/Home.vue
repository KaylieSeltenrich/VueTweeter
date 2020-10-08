<template>
  <div>
    <div v-if="loginToken">
      <create-tweets> </create-tweets>
    </div>
    <div id="loggedout" v-if="!loginToken">
      <p>Please sign up or log in to continue.</p>
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

* {
  margin: 0%;
  padding: 0%;
  height: 100vh;
}

#loggedout {
  position: fixed;
  top: 50%;
  font-size: 1.5em;
  text-align: center;
  margin: 5%;
}
</style>