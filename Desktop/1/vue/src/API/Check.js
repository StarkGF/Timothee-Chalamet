export const Check = {
  phone: function (str) {
    const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
    if (str === '') {
      return '请输入手机号码'
    } else if (!reg.test(str)) {
      str = ''
      return '手机格式不正确'
    } else {
      return ''
    }
  },
  Card: function (str) {
    // eslint-disable-next-line no-useless-escape
    const regEmail = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
    if (!regEmail.test(str)) {
      str = ''
      return '邮箱格式不正确'
    } else {
      return ''
    }
  },
  Name: function (str) {
    if (str === '') {
      return '要填写姓名哦'
    } else {
      return ''
    }
  },
  DepartmentChoice: function (str) {
    if (str === '') {
      return '请输入年级专业'
    } else {
      return ''
    }
  },
  CodeC: function (str) {
    if (str === '') {
      return '请输入验证码'
    } else {
      return ''
    }
  }
}
