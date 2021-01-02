import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from 'aos'
import "bootstrap"; // 在這裡載入 Bootstrap 的 JavaScript 檔
import "aos/dist/aos.css"; // You can also use <link> for styles
import "animate.css/animate.min.css"; // You can also use <link> for styles
import VueLazyload from 'vue-lazyload';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import { getInfo } from './api/user';


Vue.config.productionTip = false;
Vue.use(VueLazyload);
Vue.component('Loading', Loading);// Loading


router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth) {
    // 確認登入
    getInfo().then(response => {
      if (response.data.user.roles === "admin") {
        next();
      } else {
        next({
          path: '/'
        });
      }
    });
  } else {
    next();
  }
});


new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


