import axios, { AxiosError } from 'axios'
import { useStore } from '@/store'
import { AllApiUrl } from '@/api'

function startLoading(url?: AllApiUrl) {
  const store = useStore()
  store?.commit('global/START_LOADING', url)
}
function finishLoading(url?: AllApiUrl) {
  const store = useStore()
  store?.commit('global/FINISH_LOADING', url)
}

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 3000,
})

service.interceptors.request.use(config => {
  const url = config.url as AllApiUrl | undefined
  startLoading(url)
  return config
})

service.interceptors.response.use(
  response => {
    const url = response.config.url as AllApiUrl | undefined
    finishLoading(url)

    return response
  },
  async (error: AxiosError) => {
    const url = error.config.url as AllApiUrl | undefined
    finishLoading(url)
    return await Promise.reject(error)
  },
)

export default service
