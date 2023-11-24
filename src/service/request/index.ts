import axios from 'axios'

import type { AxiosInstance } from 'axios'
import type { DKSRequestinterceptors, DKSConfig } from './type'

class DKSRequest {
  //第一步实现的是外部传递的参数能够在类内部实现一个axios实例
  instance: AxiosInstance
  interceptors?: DKSRequestinterceptors

  constructor(config: DKSConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    //每一个实例的拦截

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseOnterceptorCatch
    )

    //全局的每一个实例都会调用的拦截器
    this.instance.interceptors.request.use((config) => {
      console.log('全局请求拦截')
      return config
    })

    this.instance.interceptors.response.use((res) => {
      console.log('全局相应拦截')
      res = res.data
      //这里一定要将res解一个扣，不然在后面的pinia的位置就不能够得到正确的数据
      return res
    })
  }

  request<T>(config: DKSConfig<T, any>): Promise<T> {
    //单个请求单的拦截
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
          // console.log(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: DKSConfig<T, any>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: DKSConfig<T, any>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  patch<T = any>(config: DKSConfig<T, any>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
  delete<T = any>(config: DKSConfig<T, any>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default DKSRequest
