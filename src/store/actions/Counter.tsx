export const addCount = () => {
  return {
    type: "ADD_COUNT",
  };
};
export const subtractCount = () => {
  return {
    type: "SUBTRACT_COUNT",
  };
};

export const setCount = (count: number) => {
  return {
    type: "SET_COUNT",
    count: count,
  };
};
