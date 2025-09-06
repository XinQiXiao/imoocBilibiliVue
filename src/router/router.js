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
    // 视频详情
    path:'/videoDetail',
    component: () => import('@/components/VideoDetail'),
  },
  {
    // 个人中心
    path: '/mySpace',
    redirect: '/mySpace/home',
    component: () => import('@/components/mySpace/MySpaceContent'),
    
    children: [
      {
        path: 'home',
        component: () => import('@/components/mySpace/MySpaceHome'),
      },
      {
        path: 'post',
        component: () => import('@/components/mySpace/MySpacePost'),
      },
      {
        path: 'info',
        component: () => import('@/components/mySpace/MySpaceInfo'),
      },
      {
        path: 'collection',
        component: () => import('@/components/mySpace/MySpaceCollection'),
      },
      {
        path: 'following',
        component: () => import('@/components/mySpace/MySpaceFollowing'),
      },
    ],
  },
]

const router = new VueRouter({
  routes
});

export default router;