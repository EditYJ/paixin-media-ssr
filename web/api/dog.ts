import service from '@/utils/service'

export enum DogApiUrl {
  /**
   * 获取随机狗狗图片接口
   */
  RANDOM_DOG = '/api/breeds/image/random',
}

interface DogRespData {
  message: string
  status: string
}
/**
 * 得到一张随机狗狗图片
 * @returns
 */
export const getRandomDog = () => {
  return service.get<DogRespData>(DogApiUrl.RANDOM_DOG, {
    baseURL: 'https://dog.ceo',
  })
}
