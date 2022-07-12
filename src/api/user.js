import request from '@/utils/request'

/**
 * 获取验证码接口
 * @returns {AxiosPromise}
 */
const getCaptcha = () => {
  return request({
    url: '/sys/captcha',
    method: 'get'
  })
}
/**
 * 获取登录的接口
 */
const login = (data) => {
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
 * 导出api接口
 */
export default { getCaptcha, login }
