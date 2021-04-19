import service from '@/utils/service'

export const getHomeInitData = () => {
  return service.get('/api/index')
}
