import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  timeout: 3000,
})

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    }
  },
  async error => {
    if (__isBrowser__) {
      ElMessage({
        type: 'error',
        message: `请求发生错误：${error}`,
      })
    }
    return await Promise.reject(error)
  },
)

export default service
