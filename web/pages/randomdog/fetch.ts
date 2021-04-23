import { Store } from 'vuex'
import { Router } from 'vue-router'
import { ISSRContext } from 'ssr-types'
import { IndexData } from '@/interface'
import { GlobalStoreProps } from '@/store'
interface IApiService {
  index: () => Promise<IndexData>
}
interface ClientInfo {
  store: Store<GlobalStoreProps>
  router: Router
}

export default async (client: ClientInfo, ctx?: ISSRContext<{ apiService?: IApiService }>) => {
  const { store } = client
  await store.dispatch('dog/fetchRandomDog')
}
