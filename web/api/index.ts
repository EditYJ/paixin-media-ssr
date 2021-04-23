import { AxiosRequestConfig, AxiosResponse } from 'axios'

export * from '@/api/dog'

export type ICostomAxiosRequestConfig = AxiosRequestConfig & {
  opName: string
}

export type FetchRequest<R = any> = (
  config?: ICostomAxiosRequestConfig,
) => Promise<AxiosResponse<R>>
