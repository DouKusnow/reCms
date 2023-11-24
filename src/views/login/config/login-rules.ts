export const accountRules = {
  username: [
    { required: true, message: '必须填写用户名信息', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,16}$/,
      message: '用户名要6-16位的字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须填写密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,16}$/,
      message: '密码要6-16位字母或数字',
      trigger: 'blur'
    }
  ]
}
