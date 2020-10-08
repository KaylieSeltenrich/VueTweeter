<template>
  <div>
    <img id="comment" src="../assets/commenticon.svg" />
    <textarea
      id="comment-input"
      v-model="content"
      placeholder="150 characters max"
    ></textarea>
    <button @click="makeComment">Submit Comment</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "comment",
  data() {
    return {
      content: ""
    };
  },
  props: {
    tweetId: {
      type: Number
    }
  },
  methods: {
    makeComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId,
            content: this.content
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#comment {
  width: 15%;
}
</style>