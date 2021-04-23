import { FetchRequest } from '@/api'
import { ComponentsArr, SearchContent } from '@/interface/index'
import { ActionContext, Store } from 'vuex'
import dog, { DogProps } from './modules/dog'
import global, { GlobalStatus } from './modules/global'
import { indexStore } from './modules/index'
import { searchStore } from './modules/search'
export interface GlobalStoreProps {
  global: GlobalStatus
  dog: DogProps
  indexStore: ComponentsArr
  searchStore: SearchContent
}

export function getStore() {
  let store: Store<GlobalStoreProps> | undefined
  if (__isBrowser__) {
    store = window.__VUE_APP__._context.provides.store
    // console.log(store)
  }
  return store
}

export function actionWrapper(fetchRequest: FetchRequest, commitName: string) {
  return async <T = any, S = any>(state: ActionContext<T, S>, payload?: any) => {
    const newConfig = { ...payload, opName: commitName }
    const { data } = await fetchRequest(newConfig)
    state.commit(commitName, data)
    return data
  }
}

export const modules = {
  global,
  dog,
  indexStore,
  searchStore,
}
