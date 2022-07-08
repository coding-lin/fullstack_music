import { getBannerRequest, getRecommendRequest } from "@/api/request"
import * as actionTypes from './constants'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: data
})
// 处理 api 请求  一定放在 action 中
export const getBannerList = () => {
  // 高阶函数
  return (dispatch) => {
    getBannerRequest()
      .then(data => {
        const action = changeBannerList(data.banners)
        dispatch(action)
      })
  }
}

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: data
})

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendRequest()
      .then(data => {
        dispatch(changeRecommendList(data.result))
        dispatch(changeEnterLoading(false))
      })
  }
}

export const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data: data
})