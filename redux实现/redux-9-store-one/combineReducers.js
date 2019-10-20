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
        resultState = {...resultState, ...nextState};
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

module.exports = {
  combineReducers
};
