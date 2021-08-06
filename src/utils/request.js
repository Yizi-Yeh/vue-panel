import axios from 'axios'

import { errorHandler } from './https'
import { errorStyle } from '@/config/vue-sweetalert2'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 50000
})

// instance.interceptors.request.use(
//   (config) => {
//     const token = store.getters.token
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log('err: ' + error) // for debug
    const { response } = error
    if (response) {
      errorHandler(response.data)
      return Promise.reject(error)
    } else {
      if (!window.navigator.onLine) {
        // 網路斷線
        window.$toast.open({ ...errorStyle, message: 'ERROR.NETWORK' })
      } else {
        // 可能是跨域或程式問題
        return Promise.reject(error)
      }
    }
  }
)

export default instance
