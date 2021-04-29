import { CommitOptions, DispatchOptions, Store } from 'vuex'
import dog, { DogState } from './modules/dog'
import global, { GlobalState } from './modules/global'
import { DogMutations } from '@/store/modules/dog/mutations'
import { DogActions } from '@/store/modules/dog/actions'
import { DogGetters } from '@/store/modules/dog/getters'
import { GlobalMutations } from './modules/global/mutations'
import { GlobalGetters } from './modules/global/getters'

export type NameSpaced<T, N extends string> = {
  [K in keyof T & string as `${N}/${K}`]: T[K]
}

export type AllMutations = NameSpaced<DogMutations, 'dog'> & NameSpaced<GlobalMutations, 'global'>
export type AllActions = NameSpaced<DogActions, 'dog'>
export type AllGetters = NameSpaced<DogGetters, 'dog'> & NameSpaced<GlobalGetters, 'global'>

export interface State {
  global: GlobalState
  dog: DogState
}

export type AugmentedStore = Omit<Store<State>, 'getters' | 'commit' | 'dispatch'> & {
  commit: <K extends keyof AllMutations, P extends Parameters<AllMutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions,
  ) => ReturnType<AllMutations[K]>
} & {
  dispatch: <K extends keyof AllActions, P extends Parameters<AllActions[K]>[1]>(
    key: K,
    payload?: P,
    options?: DispatchOptions,
  ) => ReturnType<AllActions[K]>
} & {
  getters: {
    [K in keyof AllGetters]: ReturnType<AllGetters[K]>
  }
}

export function useStore() {
  const store = window.__VUE_APP__._context.provides.store as AugmentedStore
  return store
}

export const modules = {
  global,
  dog,
}
