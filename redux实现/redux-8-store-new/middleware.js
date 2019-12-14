const logMiddleware = (store, action) => {
  console.log('action', action);
  console.log('last state', store.getState());
};

const timeMiddleware  = (store, action) => {
  console.log('time', Date.now());
  console.log('last state', store.getState());
};

module.exports = {
  logMiddleware,
  timeMiddleware
};
