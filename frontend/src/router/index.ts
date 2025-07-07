import { createRouter, createWebHistory } from "vue-router";
import PostList from "@/views/PostList.vue";
import PostDetail from "@/views/PostDetail.vue";
import CreatePost from "@/views/CreatePost.vue";
import EditPost from "@/views/EditPost.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ProfileList from "@/views/ProfileList.vue";
import ProfileDetail from "@/views/ProfileDetail.vue";
import CreateProfile from "@/views/CreateProfile.vue";
import EditProfile from "@/views/EditProfile.vue";

const routes = [
  {
    path: "/",
    name: "PostList",
    component: PostList,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/create",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/posts/:id/edit",
    name: "EditPost",
    component: EditPost,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/profiles",
    name: "ProfileList",
    component: ProfileList,
  },
  {
    path: "/profiles/:id",
    name: "ProfileDetail",
    component: ProfileDetail,
    props: true,
  },
  {
    path: "/profiles/create",
    name: "CreateProfile",
    component: CreateProfile,
  },
  {
    path: "/profiles/:id/edit",
    name: "EditProfile",
    component: EditProfile,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
