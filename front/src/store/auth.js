export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
  }
}