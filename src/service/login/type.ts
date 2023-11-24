export interface accountType {
  username: string
  password: string
}
export interface resDataType<T = any> {
  code: number
  data: T
}
export interface resloginDataType {
  id: number
  name: string
  token: string
}
