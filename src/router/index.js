import Vue from "vue";
import VueRouter from "vue-router";
import SignupPage from "../views/SignUp.vue"
import LoginPage from "../views/Login.vue"

Vue.use(VueRouter);

const routes = [
{
  path: "/signup",
  name: "signup-page",
  component: SignupPage
},
{
  path: "/login",
  name: "login-page",
  component: LoginPage
}
];

const router = new VueRouter({
  routes
});

export default router;
