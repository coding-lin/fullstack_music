import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSingerList } from '@/store/actionCreators'

function Singers(props) {
  const { singerList, getSingerListDispatch } = props
  
  useEffect(() => {
    getSingerListDispatch()
  }, [])
  
  return (
    <div>
      Singers
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    singers: state.singer.singers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingerListDispatch() {
      dispatch(getSingerList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Singers)