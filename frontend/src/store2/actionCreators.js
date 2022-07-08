// 组件不可以染指数据请求，页面级别组件中看不到 api
// 在 action 中，redux 指定可以数据流动开始的地方
// redux 之后，UI 更纯粹
// 应用开发分成 UI + 数据管理

import { getBannerRequest, getRankListRequest, getSingerRequest } from "../api/request"

// store reducer defaultState -> action api -> reducer
// 重新计算 -> 通知 connect UI 更新
// action 函数
export const changeBannerList = (data) => ({
  type: 'CHANGE_BANNER',
  data
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      const action = changeBannerList(data.banners)
      dispatch(action)
    })
  }
}

export const changeRankList = (data) => ({
  // 修改 Tag, data
  type: 'CHANGE_RANKLIST',
  data
})

export const getRankList = () => {
  // api 请求 异步
  return (dispatch) => {
    getRankListRequest().then(data => {
      const action = changeRankList(data.list)
      console.log(action)
      // dispatch 这种格式的对象，才能触发 reducer 重新计算
      dispatch(action)
    })
  }
}

export const changeSingerList = (data) => ({
  type: 'CHANGE_SINGERLIST',
  data
})

export const getSingerList = () => {
  return (dispatch) => {
    getSingerRequest().then(data => {
      const action = changeSingerList(data.artists)
      console.log(action)
      dispatch(action)
    })
  }
}