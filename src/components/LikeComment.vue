<template>
  <div id="like-container">
    <img
      v-if="!isLiked"
      id="heart"
      @click="likeComment"
      src="../assets/likeicon.svg"
    />
    <img
      v-else
      id="unlikeheart"
      @click="deleteLikeComment"
      src="../assets/dislikeicon.svg"
    />
    
    <div> Comment likes: {{ commentLikes.length }}</div>
    
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "like-comment",
  data() {
    return {
      commentLikes: [],
      isLiked: false
    };
  },
  props: {
    commentId: {
      type: Number
    }
  },

  mounted: function() {
      this.getLikedComments();
  },

  methods: {
    likeComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          this.isLiked = true;
        })
        .catch(error => {
          console.log(error);
        });
    },

    deleteLikeComment: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          this.isLiked = false;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getLikedComments: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/comment-likes",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          params: {
            commentId: this.commentId
          }
        })
        .then(response => {
          console.log(response);
          this.commentLikes = response.data;

          for (let i = 0; i < this.commentLikes.length; i++) {
            if (cookies.get("user") == this.commentLikes[i].userId) {
              this.isLiked = true;
              return;
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#heart {
  width: 15%;
}

#unlikeheart {
  width: 15%;
}

#like-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>