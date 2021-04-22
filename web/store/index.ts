import { ComponentsArr, SearchContent } from '@/interface/index'
import { Store } from 'vuex'
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

export const modules = {
  global,
  dog,
  indexStore,
  searchStore,
}
