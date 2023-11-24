import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios'

export interface DKSRequestinterceptors<
  T = AxiosResponse,
  R = InternalAxiosRequestConfig
> {
  requestInterceptor?: (config: R) => R
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseOnterceptorCatch?: (err: any) => any
}

export interface DKSConfig<T = AxiosResponse, R = InternalAxiosRequestConfig>
  extends AxiosRequestConfig {
  interceptors?: DKSRequestinterceptors<T, R>
}
