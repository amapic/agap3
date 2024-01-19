import React, { useEffect, FC, useRef, RefObject, ReactElement,useState } from "react";

// type EnhancedComponentProps<T> = {
//   children: React.ReactNode;
//   extraInfo: T;
// };

type EnhancedComponentProps<T> = {
  children: React.ReactNode;
  extraInfo: T;
};

function Kaka({
  props,
  haha,
}: {
  props: React.ReactNode;
  haha: string;
}): JSX.Element {
  const jj = useRef<HTMLDivElement>();
  useEffect(() => {}, []);
  return <div ref={jj}>AA</div>;
}

function Rr({
  Yy,
}: {
  Yy: React.FC<EnhancedComponentProps<{ ahah: string }>>;
}): ReactElement {
  return <Yy haha={"ttt"} />;
}


function withExtraInfo<T>(
  WrappedComponent: React.FC<EnhancedComponentProps<T>>
) {
  const [extraInfo, setExtraInfo] = useState<T>();

  const ComponentWithExtraInfo = (props: EnhancedComponentProps<T>) => {
    return <WrappedComponent {...props} extraInfo={extraInfo} />;
  };

  return ComponentWithExtraInfo;
}

export default withExtraInfo("rr");
