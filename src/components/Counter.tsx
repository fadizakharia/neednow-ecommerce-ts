import React, { useState, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ThemeProvider } from "@material-ui/core";
import theme from "../theme";
function Counter(props: any) {
  const count = useSelector((state: any) => state.count);
  const [counter, setCounter] = useState<number | null>(null);
  const dispatch = useDispatch();
  function setCount(e: FormEvent) {
    e.preventDefault();
    dispatch({ type: "SET_COUNT", count: counter });
  }
  return (
    <div>
      the count is: {count}
      <Button
        variant="outlined"
        color="primary"
        onClick={() => dispatch({ type: "ADD_COUNT" })}
      >
        add counter
      </Button>
      <button onClick={() => dispatch({ type: "SUBTRACT_COUNT" })}>
        Subtract Counter
      </button>
      <form onSubmit={setCount}>
        <input
          onChange={(event) => setCounter(+event.target.value)}
          type="number"
        />
        <button type="submit">set counter</button>
      </form>
    </div>
  );
}
export default Counter;
