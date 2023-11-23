import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import auth from './modules/auth'

Vue.use(Vuex)

const createStore = () => {
  return new Store({
    modules: {
      auth,
    },
  })
}
export default createStore
