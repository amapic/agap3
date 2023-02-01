import { useRef, useEffect } from "react";

export default function Screen5() {
  return (
    <div className="h-screen">
      <div
        style={{
          height: "90%",
        }}
        className="bg-yellow mx-auto"
      >
        <h1
          className="bg-yellow mx-auto my-auto h-full"
          style={{
            width: "40%",
          }}
        >
          <div className="w-full flex">
            <div className="w-50 text-right flex-column">
              <div className="text-end">the world needs</div>
              <div className="text-right">you</div>
            </div>
            <div className="w-50"></div>
          </div>
        </h1>
      </div>
    </div>
  );
}
