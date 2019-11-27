const { numberReducer } = require("./numberReducer");
const { colorReducer } = require("./colorReducer");
const { logMiddleware, timeMiddleware } = require("./middleware");
const { createStore, combineReducers } = require("./redux-10");

// 创建带中间件的store
const store = createStore(combineReducers({
  number: numberReducer,
  color: colorReducer
}), timeMiddleware, logMiddleware);

// reducer 替换
store.replaceReducer(numberReducer);

// 订阅
store.subscribe(() => {
  console.log("state", store.getState());
});

// 触发
store.dispatch({type: "reduce"});
store.dispatch({type: "add"});
store.dispatch({type: "add"});
store.dispatch({type: "blue"});
