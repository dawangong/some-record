const { createStore } = require("./createStore");

// 和源码实现不同 主要学思想
const _createStore = (reducer, ...middleware) => {
  const exceptionMiddleware = (...middleware) => (getState, dispatch) => action => {
    try {
      middleware.forEach(_middleware => {
        _middleware(getState, action);
      });

      dispatch(action);
    } catch (err) {
      console.error('error: ', err)
    }
  };
  const _store = createStore(reducer);
  const getState = _store.getState;
  const _dispatch = _store.dispatch;
  // 中间件更改
  if (middleware) {
    _store.dispatch = exceptionMiddleware(...middleware)(getState, _dispatch);
  }
  return _store;
};

module.exports = {
  _createStore
};
