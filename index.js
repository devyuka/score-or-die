import React from "react";
import ReactDOM from "react-dom";

import Title from "./Title";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Choices from "./Choices";
import Score from "./Score";
import Error from "./Error";

import AppState from "./AppState";

// let AppState = createContainer(useAppState);

const App = function() {
  let { error } = AppState.useContainer();

  return (
    <AppState.Provider>
      <div>
        <Title />
        <Input />
        <Error error={error} />
        <SubmitButton />
        <Choices />
        <Score />
      </div>
    </AppState.Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
