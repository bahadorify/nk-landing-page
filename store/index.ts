import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { RootState } from '@/assets/types.ts'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    data: {
      userId: null,
      userToken: null
    }
  },
  mutations: {
    SAVE_USER_ID (state, id) {
      state.data.userId = id
    },
    SAVE_USER_TOKEN (state, token) {
      state.data.userToken = token
    }
  }
}

export default () => new Vuex.Store<RootState>(store)
