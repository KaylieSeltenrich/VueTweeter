<template>
  <div id="like-container">
    <img
      v-if="!isLiked"
      id="heart"
      @click="likeTweet"
      src="../assets/likeicon.svg"
    />
    <img
      v-else
      id="unlikeheart"
      @click="deleteLikeTweet"
      src="../assets/dislikeicon.svg"
    />
    <div>Likes: {{ tweetLikes.length }}</div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  name: "like-tweet",
  data() {
    return {
      tweetLikes: [],
      isLiked: false
    };
  },
  props: {
    tweetId: {
      type: Number
    }
  },

  mounted: function() {
    this.getLikedTweets();
  },

  methods: {
    likeTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId
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

    deleteLikeTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: this.tweetId
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

    getLikedTweets: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweet-likes",
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
          this.tweetLikes = response.data;

          for (let i = 0; i < this.tweetLikes.length; i++) {
            if (cookies.get("user") == this.tweetLikes[i].userId) {
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