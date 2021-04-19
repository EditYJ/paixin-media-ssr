import service from '@/utils/service'

/**
 * 得到主页初始化信息
 * @returns
 */
export const getHomeInitData = () => {
  return service.get('/api/index')
}
