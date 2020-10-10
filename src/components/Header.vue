<template>
  <div id="page-header">
    <img id="icon" src="../assets/squawkericon.svg" alt="squawker icon" />
    <h1 id="title">Squawker</h1>
  </div>
</template>

<script>
export default {
  name: "page-header",

  computed: {
    loginToken() {
      return this.$store.state.loginToken;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0%;
  padding: 0%;
}

#page-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;
  height: 10vh;
  background-color: white;
  z-index: 1;
}

#title {
  font-family: "Spartan", sans-serif;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: rgb(70, 144, 230);
}

#icon {
  height: 10vh;
}
</style>