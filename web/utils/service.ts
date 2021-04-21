import axios from 'axios'
import { getStore } from '@/store'

function startLoading() {
  const store = getStore()
  store?.commit('global/startLoading')
}
function finishLoading() {
  const store = getStore()
  store?.commit('global/finishLoading')
}

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
})

service.interceptors.request.use(config => {
  startLoading()
  return config
})

service.interceptors.response.use(
  response => {
    finishLoading()
    return response.data
  },
  async error => {
    finishLoading()
    return await Promise.reject(error)
  },
)

export default service
