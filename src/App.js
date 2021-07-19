import React, { useState } from "react";
import Buttons from "./Components/Buttons";
import Calc from "./Components/Calc";
import Screen from "./Components/Screen";
import "./Scss/App.scss";

function App() {
  let [theme, setTheme] = useState(1);
  const [buttonValue, setButtonValue] = useState("");

  const handleTheme = () => {
    if (theme >= 3) {
      setTheme(1);
    } else {
      setTheme(++theme);
    }
  };

  const getButtonValue = (arg) => {
    setButtonValue(buttonValue + arg);
  };

  const calculation = (operation) => {
    try {
      if (operation === "=") {
        setButtonValue(eval(buttonValue));
      } else if (operation === "RESET") {
        setButtonValue("");
      } else if (operation === "DEL") {
        setButtonValue(buttonValue.slice(0, -1));
      }
    } catch (error) {
      setButtonValue("Invalid Operation");
    }
  };

  return (
    <article className={`App_${theme}`}>
      <div className="App__body">
        <Calc handleTheme={handleTheme} theme={theme} />
        <Screen buttonValue={buttonValue} />
        <Buttons getButtonValue={getButtonValue} calculation={calculation} />
      </div>
    </article>
  );
}

export default App;
