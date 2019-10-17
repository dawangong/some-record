const state = {
  number: 3
};

const createStore = (initState, reducer) => {
  let state =  initState;
  const listeners= [];

  // 发布订阅模式
  const subscribe = listener => listeners.push(listener);
  const dispatch = action => {
    state = reducer(initState, action.type);
    listeners.forEach(listener => listener());
  };

  const getState = () => {
    return state;
  };

  return {
    subscribe,
    dispatch,
    getState
  }
};

// 行为规范
const reducer = (state, action) => {
  switch (action) {
    case "one": state.number = 1;break;
    case "two": state.number = 2;break;
    default: console.log("return old");
  }
  return state;
};
const store = createStore(state, reducer);

// 订阅
store.subscribe(() => {
  console.log(store.getState());
});

// 触发
store.dispatch({type: "one"});
store.dispatch({type: "two"});

