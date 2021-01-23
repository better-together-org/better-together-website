import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './modules/authentication'
import communities from './modules/communities'

Vue.use(Vuex)

// const BetterTogetherApiEndpoint = `${process.env.VUE_APP_BETTER_TOGETHER_API_URI}/bt/api/`

export default new Vuex.Store({
  modules: {
    authentication,
    communities,
  },
})
