import { ComponentsArr, SearchContent } from '@/interface/index'
import { indexStore } from './modules/index'
import { searchStore } from './modules/search'

export interface GlobalStore {
  indexStore: ComponentsArr
  searchStore: SearchContent
}

export const modules = {
  indexStore,
  searchStore,
}
