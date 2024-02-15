import React from 'react';

interface CounterContextValue {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = React.createContext<CounterContextValue>(
  {
    count: 0,
    increment: () => {},
    decrement: () => {},
  }
);

export const CounterProvider = ({ value,children }) => {
  const [count, setCount] = React.useState(value.count);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment: incrementCount, decrement: decrementCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error('CounterContext must be provided');
  }

  return context;
};

export default useCounter