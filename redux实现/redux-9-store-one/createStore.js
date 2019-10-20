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


module.exports = {
  createStore
};
