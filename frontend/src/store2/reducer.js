// 不做具体的状态，分配工作
// redux 提供了 combineReducers 功能
// 多个模块的数据，合并到一起
import { combineReducers } from 'redux';
// 一个 reducer 文件放一类数据
import userReducer from './user';
// 每个人 reducer 文件负责返回一个函数
// 固定的返回值 页面需要的状态
// 页面不再管理数据
import singerReducer from './singer';
import recommendReducer from './recommend';
import rankReducer from './rank'
// combineReducers 接受对象配置
export default combineReducers({
  // key 取个名字 value 对应的 reducer 函数
  user: userReducer,
  singer: singerReducer,
  recommend: recommendReducer,
  rank: rankReducer
});