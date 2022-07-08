// 当项目一旦复杂起来 数据管理变得重要
// 数据流
// compose 形成
import { createStore, compose } from "redux";
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
const store = createStore(reducer, composeEnhancers());
export default store