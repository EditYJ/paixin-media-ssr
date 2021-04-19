import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: 'http://127.0.0.1:3000/',
  timeout: 3000,
})

service.interceptors.response.use(
  response => {
    console.log('自定义环境变量', process.env.BASE_URL)
    if (response.status === 200) {
      return response.data
    }
  },
  async error => {
    console.log('自定义环境变量', process.env.BASE_URL)
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
