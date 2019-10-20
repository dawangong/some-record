const numberReducer = require("./numberReducer").numberReducer;
const colorReducer = require("./colorReducer").colorReducer;
const combineReducers = require("./combineReducers").combineReducers;
const logMiddleware = require("./middleware").logMiddleware;
const timeMiddleware = require("./middleware").timeMiddleware;
const createNewStore = require("./createNewStore").createNewStore;

// 中间件的拓展封装
const store = createNewStore(combineReducers({
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


