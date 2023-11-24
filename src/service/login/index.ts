import dksRequest from '../index'

enum LoginApi {
  AccountLoginIn = '/login'
}

import type { accountType, resDataType, resloginDataType } from './type'

export function accountLoginRequest(account: accountType) {
  return dksRequest.post<resDataType<resloginDataType>>({
    url: LoginApi.AccountLoginIn,
    data: account
  })
}
