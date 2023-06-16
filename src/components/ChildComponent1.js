import React from "react";

const ChildComponent1 = (props) => {
  const { setOption } = props;
  return (
    <div className="childone">
      <h2>Child Component 1</h2>
      <button
        onClick={(e) => {
          setOption(e.target.innerHTML);
        }}
      >
        {" "}
        Option 1
      </button>
    </div>
  );
};

export default ChildComponent1;
