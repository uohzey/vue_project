import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs'
import VueLazyload from 'vue-lazyload'
import axios from 'axios';

Vue.prototype.qs = qs
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
Vue.use(VueLazyload, {
  loading: require('./assets/images/loading.gif'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/images//error_img.jpg')  //加载失败图片
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
