import { ClientInfo } from '@/interface'
import { ISSRContext } from 'ssr-types'

export default async (client: ClientInfo, ctx?: ISSRContext) => {
  const { store } = client
  await store.dispatch('dog/FETCH_RANDOM_DOG')
}
