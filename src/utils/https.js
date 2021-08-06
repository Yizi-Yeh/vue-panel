// import { errorStyle } from '@/config/vue-sweetalert2'

// /**
//  * 請求失敗統一處理
//  * @param {Number} status 請求失敗的狀態碼
//  */

// export const statusHandler = (response) => {
//   const { status } = response
//   switch (status) {
//     // 400: 登入失敗, 可能是帳號密碼錯誤
//     case 400:
//       errorHandler(response)
//       break

//     // 401: backend session過期 => 移到checkLogin去判斷
//     case 401:
//       window.$toast.open({ ...errorStyle, message: 'HTTP_STATUS_CODE.401' })
//       setTimeout(() => {
//         toLoginPage()
//       }, 1000)
//       break

//     // 403: 權限不足
//     case 403:
//       to403Page()
//       break

//     // 404: 請求失敗
//     case 404:
//       errorHandler(response)
//       break

//     default:
//       console.error(`Unexpected Error: ${status}`)
//   }
// }

// export const errorHandler = (data) => {
//   // 帳號密碼錯誤
//   switch (data.code) {
//     case '01002':
//       break
//     default:
//       break
//   }
// }
