import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Handle for development mode and standalone mode

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#app");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
