import Vue from 'vue';
import Vuex from 'vuex';
import { login } from "@/api/user";
import { getInfo } from '@/api/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: localStorage.getItem('token')
  },
  mutations: {
    //使用者資訊
    CHANGE_USERDATA: (state, data) => {
      state.user = data;
    },
    //
    CHANGE_TOKEN: (state, data) => {
      state.token = data;
    }
  },
  actions: {
    setUserData({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data.email, data.password).then(response => {
          commit('CHANGE_USERDATA', response.data.user);//登入狀態
          localStorage.setItem("token", response.data.user.token);
          commit('CHANGE_TOKEN', response.data.user.token);//登入狀態

          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    },
    setUserToken({ commit }, data) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          console.log(response)
          commit('CHANGE_USERDATA', response.data.user);//登入狀態
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
    }
  },
  modules: {
  },
  getters: {
    token: state => {
      return state.token;
    },
    user: state => {
      return state.user;
    }
  }
});
