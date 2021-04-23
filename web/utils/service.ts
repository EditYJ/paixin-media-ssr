import axios, { AxiosError } from 'axios'
import { getStore } from '@/store'
import { ICostomAxiosRequestConfig } from '@/api'

function startLoading(opName: string) {
  const store = getStore()
  store?.commit('global/startLoading', { opName })
}
function finishLoading(opName: string) {
  const store = getStore()
  store?.commit('global/finishLoading', { opName })
}

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
})

service.interceptors.request.use(config => {
  const newConfig = config as ICostomAxiosRequestConfig
  startLoading(newConfig.opName)
  return config
})

service.interceptors.response.use(
  response => {
    const newConfig = response.config as ICostomAxiosRequestConfig
    finishLoading(newConfig.opName)
    return response
  },
  async (error: AxiosError) => {
    const newConfig = error.config as ICostomAxiosRequestConfig
    finishLoading(newConfig.opName)
    return await Promise.reject(error)
  },
)

export default service
