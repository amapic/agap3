import { createContext, useContext, useState } from "react";

const PageNameContext = createContext({
  count: 0,
  setCount1: () => {},
  setCount2: () => {},
});

function ParentPage() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <PageNameContext.Provider value={{ count: count, incrementCount,decrementCount }}>
      <h1>Parent page title</h1>
      <ChildComponent />
    </PageNameContext.Provider>
  );
}

const ChildComponent = () => {
  const { count, incrementCount,decrementCount } = useContext(PageNameContext);
  const changeHandler1 = event => incrementCount(3);
  const changeHandler2 = event => decrementCount(4);
  // const { userName, setUserName } = useContext(UserContext);

  return (
    <>
      <button onClick={changeHandler1}>AAAAAA</button>
      <br />
      <button onClick={changeHandler2}>B</button>
      <p>This a sub-component, nested in the {count} page</p>
    </>
  );
};

export default ParentPage;
