const state = {
  number: {
    count: 1
  },
  color: {
    color: "red"
  }
};

const createStore = (initState, reducer) => {
  let state =  initState;
  const listeners= [];

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
const numberReducer = (state, action) => {
  switch (action) {
    case "add": state.number.count += 1;break;
    case "reduce": state.number.count -= 1;break;
    default: console.log("return old");
  }
  return state;
};
const colorReducer = (state, action) => {
  state.color.color = action;
  return state;
};

// 合并reducer
const combineReducers = (reducers) => {
  return (state, action) => {
    let resultState = {};
    for(let key in reducers) {
      if (JSON.stringify(resultState) !== "{}") {
        state = resultState;
      }
      const reducer = reducers[key];
      resultState = reducer(state, action);
    }
    return resultState;
  };
};

const store = createStore(state, combineReducers({
  number: numberReducer,
  color: colorReducer
}));

// 订阅
store.subscribe(() => {
  console.log(store.getState());
});

// 触发
store.dispatch({type: "reduce"});
store.dispatch({type: "add"});
store.dispatch({type: "add"});
store.dispatch({type: "blue"});


