const { numberReducer } = require("./numberReducer");
const { colorReducer } = require("./colorReducer");
const { logMiddleware } = require("./middleware");
const { timeMiddleware } = require("./middleware");
const { createStore, combineReducers } = require("./redux-9");

// 创建带中间件的store
const store = createStore(combineReducers({
  number: numberReducer,
  color: colorReducer
}), logMiddleware, timeMiddleware);

// 订阅
store.subscribe(() => {
  console.log("state", store.getState());
});

// 触发
store.dispatch({type: "reduce"});
store.dispatch({type: "add"});
store.dispatch({type: "add"});
store.dispatch({type: "blue"});
