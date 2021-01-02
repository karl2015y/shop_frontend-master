import axios from 'axios';
import store from '../store/index';
import router from "../router/index";

// 創建axios實例
const service = axios.create({
  baseURL: process.env.VUE_APP_APIPATH, // api 的 base_url
  timeout: 5000, // 請求超時時間
  // headers: {
  //   "Authorization": `Bearer ${localStorage.getItem("token")}`,
  // },

})

service.defaults.withCredentials = false; // 預設是false,如果打開即便後端有傳回,如過不同域無法取得資料 

// request攔截器
service.interceptors.request.use(
  config => {
    if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Bearer ${store.state.token}`;
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
)

// response 攔截器
service.interceptors.response.use(
  response => {
    /**
     * 
     */
    // console.log(response);

    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          alert('請先登入!')
          router.replace({
            path: 'login',
          });
      }
    }
    return Promise.reject(error)
  }
)

export default service;