// 初始化仓库
// compose 形成
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducer from './reducer'
// 用来激活 redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// store 物流仓库  数据状态仓库
// 1. 上京东官网，或 APP  UI 组件开发
// 2. 后端提供接口
// 3. 仓库
// 实例化一个仓库
// reducer ? Array.reduce 名词
// 第二个参数
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));
export default store