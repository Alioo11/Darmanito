import React, { useState } from "react";
import "./Test.css";

function Test() {
  const [isAvtive, setIsActive] = useState(true);
  return (
    <div>
      <div
        onClick={() => {
          setIsActive(!isAvtive);
        }}
        className={`demo  ${isAvtive ? "" : "isDeActive"}`}
      >
        hello
      </div>
    </div>
  );
}

export default Test;
