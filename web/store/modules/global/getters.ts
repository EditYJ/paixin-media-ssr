import { AllApiUrl } from '@/api'
import { State } from '@/store'
import { GetterTree } from 'vuex'
import { GlobalState } from './index'

export interface GlobalGetters<S = GlobalState> {
  isLoading: (state: S) => boolean
  isOpLoading: (state: S) => (opName: AllApiUrl) => boolean | undefined
}

const getters: GetterTree<GlobalState, State> & GlobalGetters = {
  isLoading: state => state.requestNumber > 0,
  isOpLoading: state => (opName: string) => state.opNames[opName],
}

export default getters
