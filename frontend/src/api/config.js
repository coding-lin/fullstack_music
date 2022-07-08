// 配置请求对象
import axios from 'axios'

export const baseUrl = "http://localhost:3000"
// product 阶段
// https://www.fastmock.site/mock/3f112f6cb2f621fc9c2dd6a14be19f38/beers/banner
const axiosInstance = axios.create({
  baseURL: baseUrl
})
// 拦截器
// axiosInstance.interceptors.request.use(req => {
//   console.log('开始请求...')
//   req.code = '12312121';
//   request.headers['Authorization'] = 
//     "Bearer " + localToken
//   return req
// },
// err => {

// });

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误')
  }
)

export { axiosInstance }