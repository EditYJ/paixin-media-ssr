import { AllApiUrl } from '@/api'
import { MutationTree } from 'vuex'
import { GlobalState } from './index'

export enum GlobalMutationTypes {
  START_LOADING = 'START_LOADING',
  FINISH_LOADING = 'FINISH_LOADING',
}

export interface GlobalMutations<S = GlobalState> {
  [GlobalMutationTypes.START_LOADING]: (state: S, opName?: AllApiUrl) => void
  [GlobalMutationTypes.FINISH_LOADING]: (state: S, opName?: AllApiUrl) => void
}

const mutations: MutationTree<GlobalState> & GlobalMutations = {
  [GlobalMutationTypes.START_LOADING]: (state, opName) => {
    state.requestNumber++
    if (opName) {
      state.opNames[opName] = true
    }
  },
  [GlobalMutationTypes.FINISH_LOADING]: (state, opName) => {
    state.requestNumber--
    if (opName) {
      delete state.opNames[opName]
    }
  },
}

export default mutations
