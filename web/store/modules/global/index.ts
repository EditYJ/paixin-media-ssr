import { Module } from 'vuex'
import { State } from '@/store'
import mutations from './mutations'
import getters from './getters'

export interface GlobalState {
  requestNumber: number // 现存在的请求数量
  opNames: { [key: string]: boolean }
}

const global: Module<GlobalState, State> = {
  namespaced: true,
  state: {
    requestNumber: 0,
    opNames: {},
  },
  mutations,
  getters,
}

export default global
