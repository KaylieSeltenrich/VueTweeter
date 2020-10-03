<template>
  <div>
    <h1 id="title">Tweeter</h1>
    <navbar> </navbar>

    <div v-if="loginToken">
      <create-tweet> </create-tweet>

      <logout> </logout>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
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
    Navbar,
    Logout,
    CreateTweet
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500&display=swap");

#title {
  font-family: "Spartan", sans-serif;
  text-align: center;
  font-size: 2.5em;
  font-weight: bold;
  margin: 0%;
  padding: 5%;
  color: rgb(70, 144, 230);
  
}

</style>