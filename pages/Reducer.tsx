import React, { useReducer, FunctionComponent, useEffect } from "react";

// An enum with all the types of actions to use in our reducer
enum CountActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

// An interface for our actions
interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
interface CountState {
  count: number;
}

// Our reducer function that uses a switch statement to handle our actions
function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        value: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        value: state.count - payload,
      };
    default:
      return state;
  }
}

// An example of using the `useReducer` hooks with our reducer function and an initial state
const Counter: FunctionComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      Count: {state.count}
      {/* Calling our actions on button click */}
      <button
        onClick={() => {
        //   alert("sf");
          dispatch({ type: CountActionKind.INCREASE, payload: 5 });
        }}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}
      >
        +
      </button>
    </div>
  );
};

// Interface for our state
interface LoadingState {
  loaded: boolean;
  loading: boolean;
  error: Error | null;
}

// The example component that use the `useReducer` hook with our state
const LoadingComponent: FunctionComponent = () => {
  /** 
     See here that we are using `newState: Partial<LoadingState>` in our reducer
     so we can provide only the properties that are updated on our state
     */
  const [state, setState] = useReducer(
    (state: LoadingState, newState: Partial<LoadingState>) => ({
      ...state,
      ...newState,
    }),
    {
      loaded: false,
      loading: false,
      error: null,
    }
  );

  useEffect(() => {
    // And here we provide only properties that are updating on the state
    setState({ loading: true });
    setState({ loading: false, loaded: true });
    setState({ loading: false, loaded: true, error: new Error() });
  }, []);

  if (state.loading) {
    return <p>Loading</p>;
  }

  return <p>AA</p>;
};

const Aa: FunctionComponent = () => {
  return (
    <>
      {/* <LoadingComponent /> */}
      <Counter />
    </>
  );
};

export default Aa;
