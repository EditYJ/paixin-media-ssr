import { SearchContent } from '@/interface'
import { Module } from 'vuex'
import { GlobalStore } from '..'

const searchStore: Module<SearchContent, GlobalStore> = {
  namespaced: true,
  state: {
    searchText: '',
  },
  mutations: {
    setText(state, payload) {
      state.searchText = payload.text
    },
  },
  actions: {
    setText({ commit }, { payload }) {
      commit('setText', payload)
    },
  },
}

export { searchStore }
