import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截
http.interceptors.request.use(
  (config) => {
    const token = store.getters.token
    if (token) config.headers.token = token
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
// 响应拦截
http.interceptors.response.use(
  (res) => {
    if (res.data.code === 200) {
      return res.data.data
    }
    if (res.data.code === 400) {
      Message.error(res.data.msg)
    }
    // return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

/**
 * get,post,都可以使用data传参
 */
const request = (option) => {
  if (option.method.toLowerCase() === 'get') {
    option.params = option.data || {}
  }
  return http(option)
}
export default request
