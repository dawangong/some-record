const logMiddleware = (getState, action) => {
  console.log('action', action);
  console.log('last state', getState());
};

const timeMiddleware  = (getState, action) => {
  console.log('time', Date.now());
  // console.log('last state', getState());
};

module.exports = {
  logMiddleware,
  timeMiddleware
};
