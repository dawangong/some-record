const createStore = require("./createStore").createStore;

// 和源码实现不同 主要学思想
const createNewStore = (reducer, ...middleware) => {
  const exceptionMiddleware = (...middleware) => store => dispatch => action => {
    try {
      middleware.forEach(_middleware => {
        _middleware(store)(action);
      });

      dispatch(action);
    } catch (err) {
      console.error('error: ', err)
    }
  };
  const _store = createStore(reducer);
  const _dispatch = _store.dispatch;
  // 中间件更改
  if (middleware) {
    _store.dispatch = exceptionMiddleware(...middleware)(_store)(_dispatch);
  }
  return _store;
};

module.exports = {
  createNewStore
};
