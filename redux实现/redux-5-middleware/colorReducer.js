const state = {
  color: "red"
};

const colorReducer = action => {
  switch (action) {
    case "red": state.color = "red";break;
    case "blue": state.color = "blue";break;
  }
  return state;
};

module.exports = {
  colorReducer
};
