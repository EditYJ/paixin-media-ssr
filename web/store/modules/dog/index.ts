import { State } from '@/store'
import { Module } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export interface DogState {
  imgUrl: string
}

const dog: Module<DogState, State> = {
  namespaced: true,
  state: {
    imgUrl: '',
  },
  mutations,
  actions,
  getters,
}

export default dog
