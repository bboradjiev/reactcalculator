import React from "react";

function Screen({ buttonValue }) {
  return (
    <div>
      <input
        className="calc__screen"
        value={buttonValue === "" ? "0" : buttonValue}
        readOnly
      />
    </div>
  );
}

export default Screen;
