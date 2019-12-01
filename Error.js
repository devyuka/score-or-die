import React from "react";
import AppState from "./AppState";

const Error = error => {
  if (error) {
    return <span className="error-text">{error}</span>;
  } else {
    return null;
  }
};

export default Error;
