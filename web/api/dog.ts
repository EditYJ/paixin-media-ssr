import service from '@/utils/service'
import { FetchRequest } from '.'

interface DogRespData {
  message: string
  status: string
}
/**
 * 得到一张随机狗狗图片
 * @returns
 */
export const getRandomDog: FetchRequest<DogRespData> = config => {
  return service.get('/api/breeds/image/random', {
    ...config,
    baseURL: 'https://dog.ceo',
  })
}
