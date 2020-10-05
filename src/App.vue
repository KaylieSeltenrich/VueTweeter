<template>
  <div id="app">
    <page-header> </page-header>
    <navbar> </navbar>
    <router-view />
    
  </div>
</template>

<script>
import PageHeader from "./components/Header.vue"
import Navbar from "./components/Navbar.vue"

export default {
 
  name: "app",
  components: {
    PageHeader,
    Navbar
    
  },
}
</script>

<style lang="scss">

</style>
