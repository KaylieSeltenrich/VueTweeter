<template>
  <div id="app">
    <page-header> </page-header>
    <div id="header-container">
      <welcome-user v-if="loginToken"> </welcome-user>
      <logout v-if="loginToken"> </logout>
      <navbar> </navbar>
    </div>
    <router-view />

    <div id="footer">
      Website by Kaylie Seltenrich
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageHeader from "./components/Header.vue";
import WelcomeUser from "./components/WelcomeUser.vue";
import Logout from "./components/Logout.vue";
import cookies from "vue-cookies";

export default {
  name: "app",
  components: {
    Navbar,
    PageHeader,
    Logout,
    WelcomeUser
  },

  data() {
    return {
      loginToken: cookies.get("session")
    };
  }
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}

#footer {
  position: sticky;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 5vh;
  font-size: 1.5em;
  background-color: rgb(70, 144, 230);
  color: white;

}

.button {
  padding: 2%;
  color: black;
  font-weight: bold;
}
.header {
  font-weight: bolder;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: black;
  font-size: 1.3em;
  margin-bottom: 3%;
}


.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
  background-color: white;
}

#header-container {
  position: sticky;
  top: 0;
  background-color: white;
}
</style>
