
import { createRouter, createWebHistory } from 'vue-router';
import PostList from '../views/PostList.vue';
import PostDetail from '../views/PostDetail.vue';
import CreatePost from '../views/CreatePost.vue';
import EditPost from '../views/EditPost.vue';

const routes = [
  {
    path: '/',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true
  },
  {
    path: '/create',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/posts/:id/edit',
    name: 'EditPost',
    component: EditPost,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
