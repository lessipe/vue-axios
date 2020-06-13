export default {
  namespaced: true,
  state: {
    validations: {}
  },
  mutations: {
    setValidationError(state, error) {
      state.validations = error;
    }
  }
}