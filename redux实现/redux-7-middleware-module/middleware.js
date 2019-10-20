const logMiddleware = store => action => {
  console.log('action', action);
  console.log('last state', store.getState());
};

const timeMiddleware  = store => action => {
  console.log('time', Date.now());
  console.log('last state', store.getState());
};

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

module.exports = {
  exceptionMiddleware,
  logMiddleware,
  timeMiddleware
};
