<template>
  <div>
    <div id="create-tweet-container">
      <h1 class="header">Create Tweet:</h1>
      <textarea
        id="tweet-input"
        v-model="content"
        placeholder="200 characters max"
      ></textarea>
      <br />
      <button id="submit-tweet" class="button" @click="createTweet">
        Submit
      </button>
    </div>
    <div id="your-tweets-container">
      <h1 class="header">Your Tweets:</h1>
      <div
        class="tweets-container"
        v-for="tweet in tweets"
        :key="tweet.tweetId"
      >
        <div class="tweet-container">
          <p class="tweet-username">{{ tweet.username }}</p>
          <p class="tweet-content">{{ tweet.content }}</p>
          <p>Date posted: {{ tweet.createdAt }}</p>
        </div>
        <textarea id="edit-tweet" v-model="tweet.content"> </textarea> <br />
        <div id="button-container">
          <button
            class="button"
            @click="updateTweet(tweet.content, tweet.tweetId)"
          >
            Edit Tweet
          </button>
          <button class="button" @click="deleteTweet(tweet.tweetId)">
            Delete Tweet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  name: "create-tweet",

  mounted: function() {
    this.getTweets();
  },
  data() {
    return {
      content: "",
      userId: cookies.get("user")
    };
  },
  computed: {
    tweets() {
      return this.$store.getters.getUserTweets;
    }
  },
  methods: {
    createTweet: function() {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            content: this.content,
            tweetId: this.$store.getters.getUserTweets
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateTweet: function(content, id) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            content: content,
            tweetId: id
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTweet: function(id) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {
            loginToken: cookies.get("session"),
            tweetId: id
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getTweets: function() {
      this.$store.dispatch("getAllTweets");
    }
  }
};
</script>

<style lang="scss" scoped>
#edit-tweet {
  width: 80%;
  height: 8vh;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
}

#button-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5vw;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
}

#tweet-input {
  width: 100%;
  height: 10vh;
}

#submit-tweet {
  margin-left: 10%;
  width: 80%;
}

#create-tweet-container {
  padding: 5%;
}

.tweet-container {
  padding: 5%;
}

#your-tweets-container {
  width: 100%;
}

#tweets-container {
  width: 100%;
}

textarea {
  resize: none;
}
</style>