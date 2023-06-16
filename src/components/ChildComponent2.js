import React from "react";

const ChildComponent2 = (props) => {
  const { setOption } = props;
  return (
    <div className="childtwo">
      <h2>Child Component 2</h2>
      <button
        onClick={(e) => {
          setOption(e.target.innerHTML);
        }}
      >
        option 2
      </button>
    </div>
  );
};

export default ChildComponent2;
