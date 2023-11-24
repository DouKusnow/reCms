import DKSRequest from './request'

import { BASE_URL, TIME_OUT } from './request/config'

const dksRequest = new DKSRequest({
  // baseURL: 'https://mock.apifox.cn/m1/1262975-0-default'
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('这是本实例中的请求的拦截')
      return config
    },
    responseInterceptor: (res) => {
      console.log('这是本实例相应的拦截')
      return res
    }
  }
})
export default dksRequest
