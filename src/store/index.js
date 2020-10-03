import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    userId: cookies.get("user"),
    allTweets: [],
  },
  mutations: {
    updateAllTweets: function (state, data) {
      state.allTweets = data
    },
  },
  actions: {
    getAllTweets: function (state) {
      axios
        .request({
          url: "https://tweeterest.ml/api/tweets",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "SVzuhkqP5JrStTsfETYXW6UQZs0UV95ENy1VscJoZ3L5P"
          },
          data: {

          }
        })
        .then(response => {
          console.log(response);
          state.commit("updateAllTweets", response.data)

        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  getters: {

    getUserTweets: function (state) {
      return state.allTweets.filter(function (tweet) { return state.userId == tweet.userId })
    }
  }
});
