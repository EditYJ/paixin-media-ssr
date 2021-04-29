import { Router } from 'vue-router'
import { AugmentedStore } from '@/store'

export interface ClientInfo {
  store: AugmentedStore
  router: Router
}
