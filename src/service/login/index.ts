import dksRequest from '../index'

enum LoginApi {
  AccountLoginIn = '/login',
  AccountUserInFo = '/users/',
  AccountRoleMenu = '/role/'
}

import type { accountType, resDataType, resloginDataType } from './type'

export function accountLoginRequest(account: accountType) {
  return dksRequest.post<resDataType<resloginDataType>>({
    url: LoginApi.AccountLoginIn,
    data: account
  })
}
//登录成功之后获得当前用户的id，根据id能够获得当前用户的角色，然后根绝当前的角色id或者角色menu

export function accountUserInFoRequest(userId: number) {
  return dksRequest.get<resDataType>({
    url: LoginApi.AccountUserInFo + userId
  })
}

export function AccountRoleMenuRequest(roleId: number) {
  return dksRequest.get<resDataType>({
    url: LoginApi.AccountRoleMenu + roleId + '/menu'
  })
}
