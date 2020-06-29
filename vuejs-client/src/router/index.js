import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import User from "@/views/User.vue"
import UserList from "@/views/UserList.vue"
import SearchUser from "@/views/SearchUser.vue"
import AddUser from "@/views/AddUser.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "users",
    alias: "/user",
    component: UserList,
    children: [
      {
        path: "/user/:id",
        name: "user-details",
        component: User,
        props: true
      }
    ]
  },
  {
    path: "/addUser",
    name: "add",
    component: AddUser
  },
  {
    path: "/searchUser",
    name: "searchUser",
    component: SearchUser

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
