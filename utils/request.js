/**
 * 基于axios封装的请求模块
 */

import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.realworld.io',
})

// request.interceptors.request.use(function (config) {
//   console.log(123)
//   config.headers.Authorization = `Token `
//   return config
// }, function (error) {
//   // 如果请求失败（此时请求还没发出去）就会进入这里
//   return Promise.reject(error)
// })

export default request
