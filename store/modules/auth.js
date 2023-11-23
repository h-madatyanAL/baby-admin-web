const state = () => ({
  loginSuccessData: null,
  loginErrorData: null,
  loginLoading: false,
})

const getters = {
  loginSuccessData: (state) => state.loginSuccessData,
  loginErrorData: (state) => state.loginErrorData,
  loginLoading: (state) => state.loginLoading,
}

const mutations = {
  LOGIN_PROCESS: (state, data) => {
    state.loginLoading = data
  },
  LOGIN_SUCCESS: (state, data) => {
    state.loginSuccessData = data
  },
  LOGIN_FAILURE: (state, data) => {
    state.loginErrorData = null
    state.loginErrorData = data
  }
}

const actions = {
  loginUser({ commit }, payload) {
    commit('LOGIN_PROCESS', true)
    this.$api
      .$post('/rest-auth/login/', payload)
      .then((data) => {
        commit('LOGIN_SUCCESS', data)
      })
      .catch((e) => {
        commit('LOGIN_FAILURE', e.response.data);
      })
      .finally(() => {
        commit('LOGIN_PROCESS', false)
      })
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}