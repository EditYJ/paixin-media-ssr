import { SearchContent } from '@/interface'
import { Module } from 'vuex'
import { GlobalStoreProps } from '..'

const searchStore: Module<SearchContent, GlobalStoreProps> = {
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
