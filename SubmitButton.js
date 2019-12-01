import React from "react";
import AppState from "./AppState";

const SubmitButton = () => {
  let { onSubmit } = AppState.useContainer();

  return (
    <div className="submit-button">
      <input type="submit" value="Validate" onClick={onSubmit} />
    </div>
  );
};

export default SubmitButton;
