import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/components/MainPage'),
    redirect: 'home',
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
  {
    path: '/userLogin',
    component: () => import('@/components/UserLogin'),
  },
  {
    path: '/demo',
    component: () => import('@/components/DemoComponent'),
  },
]

const router = new VueRouter({
  routes
});

export default router;