import React from "react";
import ReactDOM from "react-dom";

import Title from "./Title";
import Input from "./Input";
import Choices from "./Choices";
import Score from "./Score";
import Error from "./Error";

import AppState from "./AppState";

// let AppState = createContainer(useAppState);

const App = function() {
  return (
    <AppState.Provider>
      <div>
        <Title />
        <Input />
        <Error />
        <Choices />
        <Score />
      </div>
    </AppState.Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
