const { numberReducer } = require("./numberReducer");
const { colorReducer } = require("./colorReducer");
const { timeMiddleware, logMiddleware, exceptionMiddleware } = require("./middleware");

const createStore = reducer => {
  let state =  {};
  const listeners= [];

  // 发布订阅模式
  const subscribe = listener => listeners.push(listener);
  const dispatch = action => {
    state = reducer(action.type);
    listeners.forEach(listener => listener());
  };

  dispatch({type: Symbol()});

  const getState = () => {
    return state;
  };

  return {
    subscribe,
    dispatch,
    getState
  }
};

// 合并reducer
const combineReducers = reducers => {
  return action => {
    let resultState = {};
    for(let key in reducers) {
      const reducer = reducers[key];
      // 记录上次的state
      const lastState = JSON.parse(JSON.stringify(reducer({ type: Symbol() })));
      const nextState = reducer(action);

      if (JSON.stringify(lastState) !== JSON.stringify(nextState)) {
        resultState = nextState;
      }
    }
    if (JSON.stringify(resultState) === "{}") {
      for(let key in reducers) {
        const reducer = reducers[key];
        resultState = {...resultState, ...reducer({ type: Symbol() })}
      }
    }
    return resultState;
  };
};

const store = createStore(combineReducers({
  number: numberReducer,
  color: colorReducer
}));
const _dispatch = store.dispatch;
// 中间件更改
store.dispatch = exceptionMiddleware(logMiddleware, timeMiddleware)(store, _dispatch);

// 订阅
store.subscribe(() => {
  console.log("state", store.getState());
});

// 触发
store.dispatch({type: "reduce"});
store.dispatch({type: "add"});
store.dispatch({type: "add"});
store.dispatch({type: "blue"});


