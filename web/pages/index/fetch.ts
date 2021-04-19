import { Store } from 'vuex'
import { Router } from 'vue-router'
import { ISSRContext } from 'ssr-types'
import { IndexData } from '@/interface'
import { GlobalStore } from '@/store'
import { getHomeInitData } from '@/api/home'
interface IApiService {
  index: () => Promise<IndexData>
}
interface ClientInfo {
  store: Store<GlobalStore>
  router: Router
}

export default async (client: ClientInfo, ctx?: ISSRContext<{ apiService?: IApiService }>) => {
  const { store } = client
  const data = await getHomeInitData()
  // const data = __isBrowser__
  //   ? await (await window.fetch('/api/index')).json()
  //   : await ctx?.apiService?.index()
  await store.dispatch('indexStore/initialData', { payload: data })
}
