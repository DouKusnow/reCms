type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface searchFormItemType {
  field: string
  type: IFormType
  placeholder?: string
  options?: any[]
  otherOptions?: any

  label: string
  rules?: []
}

export interface IForm {
  formItems: searchFormItemType[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
