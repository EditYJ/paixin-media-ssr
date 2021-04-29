import { State } from '@/store'
import { GetterTree } from 'vuex'
import { DogState } from './index'

export interface DogGetters {
  getImgUrl: (state: DogState) => string
}

const getters: GetterTree<DogState, State> & DogGetters = {
  getImgUrl: state => state.imgUrl,
}

export default getters
