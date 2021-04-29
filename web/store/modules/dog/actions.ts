import { State } from '@/store'
import { ActionContext, ActionTree } from 'vuex'
import { DogState } from './index'
import { DogMutations, DogMutationTypes } from './mutations'
import { getRandomDog } from '@/api'

export enum DogActionTypes {
  /**
   * 获取随机狗狗
   */
  FETCH_RANDOM_DOG = 'FETCH_RANDOM_DOG',
}

export type DogAugmentedActionContext = Omit<ActionContext<DogState, State>, 'commit'> & {
  commit: <K extends keyof DogMutations>(
    key: K,
    payload: Parameters<DogMutations[K]>[1],
  ) => ReturnType<DogMutations[K]>
}

export interface DogActions {
  [DogActionTypes.FETCH_RANDOM_DOG]: (ctx: DogAugmentedActionContext) => Promise<string>
}

const actions: ActionTree<DogState, State> & DogActions = {
  async [DogActionTypes.FETCH_RANDOM_DOG](ctx) {
    const { data } = await getRandomDog()
    ctx.commit(DogMutationTypes.SET_IMG_URL, data.message)

    return new Promise(resolve => {
      resolve(data.message)
    })
  },
}

export default actions
