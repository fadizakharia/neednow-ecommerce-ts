const initialState = {
  count: 1,
};
const Counter = (state = initialState, actions: any) => {
  switch (actions.type) {
    case "ADD_COUNT":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT_COUNT":
      return { ...state, count: state.count - 1 };
    case "SET_COUNT":
      return { ...state, count: actions.count };
    default:
      return state;
  }
};
export default Counter;
