<template>
  <div id="app">
    <page-header> </page-header>
    <navbar> </navbar>
    <router-view />

    <div id="footer">
      Website by Kaylie Seltenrich
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageHeader from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Navbar,
    PageHeader
  }
};
</script>

<style lang="scss">
#app {
min-height: 100%;
}

#footer {
  text-align: center;
  bottom:0;
  width: 100%;
  height: 2.5rem;
  font-size: 1.5em;
  background-color: rgb(70, 144, 230);
  color: white;

}


</style>
