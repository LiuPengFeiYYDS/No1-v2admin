import request from '@/utils/request'

/**
 * 获取验证码接口
 * @returns {AxiosPromise}
 */
export const getCaptcha = () => {
  return request({
    url: '/sys/captcha',
    method: 'get'
  })
}
/**
 * 获取登录的接口
 */
export const login = (data) => {
  return request({
    url:
      '/sys/login?username=' +
      data.username +
      '&password=' +
      data.password +
      '&code=' +
      data.code +
      '&token=' +
      data.token,
    method: 'post'
  })
}
/**
 *获取菜单栏数据
 */
export const getNav = () => {
  return request({ url: '/sys/menu/nav', method: 'get' })
}
/**
 * 获取信息数据
 * @returns
 */
export const getInfo = () => {
  return request({ url: '/sys/user/info', method: 'get' })
}
/**
 * 获取用户列表
 * @returns
 */
export const getList = () => {
  return request({ url: '/sys/user/list', method: 'get' })
}

/**
 * 导出api接口
 */
// export default { getCaptcha, login, getNav }
