import { useState } from "react";
import { createContainer } from "unstated-next";
import { sum, validateZip, validateName } from "./utils.js";

const useAppState = () => {
  let [input, setInput] = useState("");
  let [error, setError] = useState("");
  let onInputChange = e => setInput(e.currentTarget.value);

  const onSubmit = () => {
    const isValid = validateName(input);
    if (!isValid) {
      setError("it's invalid");
    } else {
      setError("");
    }
  };

  return { input, onInputChange, error, onSubmit };
};

let AppState = createContainer(useAppState);

export default AppState;
