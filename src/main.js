import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';

import InfiniteLoading from 'vue-infinite-loading'

import App from './App.vue'

import router from '@/router/router'

// 设置 dialog 弹起时 滚动条不消失
Element.Dialog.props.lockScroll.default=false;

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(InfiniteLoading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
