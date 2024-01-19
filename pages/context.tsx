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

const CounterProvider = ({ value }) => {
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
// Utilisez le code avec précaution. En savoir plus
// This code defines a context called CounterContext that stores a count value and methods for incrementing and decrementing the count. It also defines a provider (CounterProvider) that wraps the child components and provides the context value. The useCounter hook is used to access the context value from any component.

// Here's an example of how to use the CounterContext and useCounter hook:

// TypeScript
import React from 'react';
import CounterProvider from './CounterProvider';
import useCounter from './useCounter';

const CounterApp = () => {
  const count = useCounter();

  return (
    <CounterProvider value={{ count: 10 }}>
      <div>
        <p>Current count: {count.count}</p>
        <button onClick={count.increment}>Increment</button>
        <button onClick={count.decrement}>Decrement</button>
      </div>
    </CounterProvider>
  );
};

export default CounterApp;