import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/components/MainPage'),
  },
  {
    path: '/userLogin',
    component: () => import('@/components/UserLogin'),
  },
  {
    path: '/demo',
    component: () => import('@/components/DemoComponent'),
  },
  {
    // 视频投稿
    path:'/postContent',
    component: () => import('@/components/PostContent'),
  },
  {
    // 个人中心
    path: '/mySpace',
    component: () => import('@/components/MainPage'),
    redirect: '/mySpace/home',
    children: [
      {
        path: '/home',
        component: () => import('@/components/MySpaceHome'),
      },
      {
        path: '/post',
        component: () => import('@/components/MySpacePost'),
      },
    ],
  },
]

const router = new VueRouter({
  routes
});

export default router;