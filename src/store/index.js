import Vue from "vue";
import Vuex from "vuex";
import http from "../axios-instance";
import router from "../router";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {},
  state: {
    isAuthenticated: false,
    loading: false,
    token: "",
    message: "",
    user: {},
    system_settings: {},
    recorder: {
      token: "",
      track_list: []
    }
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
    },
    setSettings: (state, payload) => {
      state.system_settings = payload.system_settings;
    },
    setUser: (state, payload) => {
      state.user = payload.user;
    }
  },
  actions: {
    LOGIN({ commit, dispatch }, payload) {
      //commit("loading");
      http
        .post("/login", {
          username: payload.username,
          password: payload.password
        })
        .then(res => {
          commit("setToken", res.data);
          commit("login_success");
          dispatch("GET_USER_DATA");
          router.push("/");
          //commit("loading");
        });
    },
    LOGOUT({ commit }) {
      //logout
      commit("loading");
      http.post("/logout").then(res => {
        commit("setMessage", res.data);
        router.push("/login");
        commit("logout");
        //TODO: remove all data from store
      });
    },
    GET_SYSTEM_SETTINGS({ commit }) {
      commit("loading");
      http.get("/system/settings").then(res => {
        commit("setSettings", res.data);
        commit("loading");
      });
    },
    GET_USER_DATA({ commit }) {
      http.get("/user").then(res => {
        commit("setUser", res.data);
      });
    }
  },
  getters: {
    token({ token }) {
      return token;
    },
    system_settings({ system_settings }) {
      return system_settings;
    }
  },
  userData({ user }) {
    return user;
  }
});
export default store;
