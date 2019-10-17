const state = {
  number: {
    count: 1
  }
};

const numberReducer = action => {
  switch (action) {
    case "add": state.number.count += 1;break;
    case "reduce": state.number.count -= 1;break;
  }
  return state;
};

module.exports = {
  numberReducer
};
