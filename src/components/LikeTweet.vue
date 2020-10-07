<template>
  <div>
     <img id="heart" @click="likeTweet" src="../assets/likeicon.svg"> 
  </div>
</template>

<script>
export default {
  name: "like-tweet",

  methods: {
    likeTweet: function() {
      this.$store.dispatch("likeTweet");
    }
  }
};
</script>

<style lang="scss" scoped>
#heart {
width: 5%;
}
</style>