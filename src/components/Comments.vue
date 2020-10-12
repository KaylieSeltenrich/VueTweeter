<template>
  <div>
    <img
      @click="showComments = !showComments"
      class="comment"
      src="../assets/commenticon.svg"
    />

    <div v-if="showComments == true">
      <textarea
        id="comment-input"
        v-model="content"
        placeholder="150 characters max"
      >
      </textarea>
      <br />
      <button class="button" @click="makeComment">Submit Comment</button>
      <button class="button" @click="getComment">Get Comments</button>
    </div>
    <div
      class="comment-container"
      v-for="comment in comments"
      :key="comment.commentId"
    >
      <p id="comment-username">{{ comment.username }} says:</p>
      <p id="comment-content">{{ comment.content }}</p>

      <like-comment :commentId="comment.commentId"> </like-comment>

      <div v-if="comment.userId == userId">
        <textarea
          v-model="comment.content"
          placeholder="150 characters max"
        ></textarea>
        <br />
        <button
          class="button"
          @click="editComment(comment.content, comment.commentId)"
        >
          Edit Comment
        </button>

        <button class="button" @click="deleteComment(comment.commentId)">
          Delete Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
import LikeComment from "../components/LikeComment.vue";

export default {
  name: "comment",
  components: {
    LikeComment
  },
  data() {
    return {
      content: "",
      comments: [],
      userId: cookies.get("user"),
      showComments: false
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
    },

    getComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          params: {
            tweetId: this.tweetId
          }
        })
        .then(response => {
          console.log(response);
          this.comments = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    editComment: function(content, id) {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            content: content,
            commentId: id
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },

    deleteComment: function(id) {
      axios
        .request({
          url: "https://tweeterest.ml/api/comments",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: id
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
#comment-input {
  position: relative;
  bottom: 3vh;
  width: 100%;
  height: 10vh;
}

#comment-username {
  font-family: "Spartan", sans-serif;
  font-size: 1.2em;
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
}

#comment-content {
  margin-left: 5%;
  margin-bottom: 10%;
}
</style>