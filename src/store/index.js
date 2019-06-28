import Vue from "vue";
import Vuex from "vuex";
import http from "../axios-instance";
import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    isAuthenticated: true,
    loading: false,
    token: "",
    message: "",
    user: {}
  },
  mutations: {
    loading: state => {
      state.loading = !state.loading;
    },
    login_success: state => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
    setToken: (state, payload) => {
      state.token = payload.token;
      state.message = payload.message;
    }
  },
  actions: {
    LOGIN({ commit, dispatch }, payload) {
      commit("loading");
      http
        .post("/login", {
          username: payload.username,
          password: payload.password
        })
        .then(res => {
          commit("setToken", res.data);
          commit("login_success");
          router.push("/");
          commit("loading");
          dispatch("GET_INITIAL_DATA");
        })
        .catch(error => {
          console.log(error);
        });
    },
    LOGOUT({ commit }) {
      //logout
      commit("loading");
      http
        .post("/logout")
        .then(res => {
          commit("setMessage", res.data);
          router.push("/login");
          commit("logout");
          //TODO: remove all data from store
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    token({ token }) {
      return token;
    }
  }
});
export default store;
