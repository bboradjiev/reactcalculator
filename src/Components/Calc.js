import React from "react";
import ToggleSwitch from "./ToggleSwitch";

function Calc({ handleTheme, theme }) {
  return (
    <div className="header">
      <h1 className="calc">Calculator</h1>
      <ToggleSwitch handleTheme={handleTheme} theme={theme} />
    </div>
  );
}

export default Calc;
