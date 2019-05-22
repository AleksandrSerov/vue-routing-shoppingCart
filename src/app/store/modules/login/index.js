import axios from "axios";

const state = {
  token: null
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  }
};

const actions = {
  login({ commit }) {
    return axios.post("/api/login").then(response => {
      const { token } = response.data.token;
      localStorage.setItem("token", response.data.token);
      commit("SET_TOKEN", token);
    });
  },
  logout({ commit }) {
    return new Promise(resolve => {
      localStorage.removeItem("token");
      commit("SET_TOKEN", null);
      resolve();
    });
  }
};

const getters = {
  token: state => state.token
};

const loginModule = {
  state,
  mutations,
  actions,
  getters
};

export default loginModule;
