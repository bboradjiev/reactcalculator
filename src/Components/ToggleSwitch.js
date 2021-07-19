import React from "react";
function ToggleSwitch({ handleTheme, theme }) {
  return (
    <div className="toggle__switch">
      <h1 className="theme">THEME</h1>
      <div className="theme__container">
        <div className="theme__option">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="theme_switch" onClick={handleTheme}>
          <div className={`dot option_${theme}`}></div>
        </div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
