import service from '@/utils/service'

interface DogRespData {
  message: string
  status: string
}
/**
 * 得到一张随机狗狗图片
 * @returns
 */
export const getRandomDog = () => {
  return service.get<DogRespData>('/api/breeds/image/random', {
    baseURL: 'https://dog.ceo',
  })
}
