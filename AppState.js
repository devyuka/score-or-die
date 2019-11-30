import { useState } from "react";
import { createContainer } from "unstated-next";

const useAppState = () => {
  let [input, setInput] = useState("");
  let onInputChange = e => setInput(e.currentTarget.value);

  return { input, onInputChange };
};

let AppState = createContainer(useAppState);

export default AppState;
