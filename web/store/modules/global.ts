import { Module } from 'vuex'
import { GlobalStoreProps } from '..'

export interface GlobalStatus {
  requestNumber: number // 现存在的请求数量
}

const global: Module<GlobalStatus, GlobalStoreProps> = {
  namespaced: true,
  state: {
    requestNumber: 0,
  },
  mutations: {
    startLoading(state) {
      state.requestNumber++
    },
    finishLoading(state) {
      state.requestNumber--
    },
  },
  getters: {
    isLoading: state => state.requestNumber > 0,
  },
}

export default global
