import dksRequest from '../../index'

import type { resDataType } from '../../login/type'

export function getPageListData(url: string, queryInfo: any) {
  return dksRequest.post<resDataType>({
    url: url,
    data: queryInfo
  })
}
