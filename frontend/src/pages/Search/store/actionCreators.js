import * as actionTypes from './constants'

import {
  getHotKeywordsRequest,
  getSuggestListRequest,
  getResultSongsListRequest
} from '@/api/request'

const changeHotKeywords = (data) => ({
  type: actionTypes.SET_HOT_KEYWORDS,
  data
})

const changeSuggestList = (data) => ({
  type: actionTypes.SET_SUGGEST_LIST,
  data
})

const changeResultSongs = (data) => ({
  type: actionTypes.SET_RESULT_SONGS_LIST,
  data
})

export const changeEnterLoading = (data) => ({
  type: actionTypes.SET_ENTER_LOADING,
  data
})

export const getHotKeywords = () => {
  return (dispatch) => {
    getHotKeywordsRequest()
      .then(data => {
        let list = data.result.hots;
        dispatch(changeHotKeywords(list))
      })
  }
}