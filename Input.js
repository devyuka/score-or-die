import React from "react";
import AppState from "./AppState";

const Input = () => {
  let { input, onInputChange } = AppState.useContainer();

  return (
    <div className="input">
      <span>A1.</span>
      <input type="text" value={input} onChange={onInputChange}></input>
    </div>
  );
};

export default Input;
