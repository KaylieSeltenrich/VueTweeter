<template>
  <div class="pagecontainer">
    <div class="login-and-signup">
    <signup-form> </signup-form>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";

export default {
  name: "signup-page",

  components: {
    SignupForm
  }
};
</script>

<style lang="scss" scoped>

div {
  text-align: center;

}

</style>