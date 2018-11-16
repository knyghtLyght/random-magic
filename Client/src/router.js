import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ItemShow from "./views/ItemShow.vue";
import Register from "./views/Register.vue";
import UserProfile from "./views/UserProfile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfile
    },
    {
      path: "/items",
      name: "item-show",
      component: ItemShow,
      props: true
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
