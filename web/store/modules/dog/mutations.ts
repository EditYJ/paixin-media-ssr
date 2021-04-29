import { MutationTree } from 'vuex'
import { DogState } from './index'

export enum DogMutationTypes {
  SET_IMG_URL = 'SET_IMG_URL',
}

export interface DogMutations<S = DogState> {
  [DogMutationTypes.SET_IMG_URL]: (state: S, payload: string) => void
}

const mutations: MutationTree<DogState> & DogMutations = {
  [DogMutationTypes.SET_IMG_URL](state, payload) {
    state.imgUrl = payload
  },
}

export default mutations
