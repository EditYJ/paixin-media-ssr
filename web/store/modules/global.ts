import { Module } from 'vuex'
import { GlobalStoreProps } from '..'

export interface GlobalStatus {
  requestNumber: number // 现存在的请求数量
  opNames: { [key: string]: boolean }
}

const global: Module<GlobalStatus, GlobalStoreProps> = {
  namespaced: true,
  state: {
    requestNumber: 0,
    opNames: {},
  },
  mutations: {
    startLoading(state, { opName }) {
      state.requestNumber++
      if (opName) {
        state.opNames[opName] = true
      }
    },
    finishLoading(state, { opName }) {
      state.requestNumber--
      delete state.opNames[opName]
    },
  },
  getters: {
    isLoading: state => state.requestNumber > 0,
    isOpLoading: state => (opName: string) => state.opNames[opName] && state.requestNumber > 0,
  },
}

export default global
