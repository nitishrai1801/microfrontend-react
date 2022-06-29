import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <Home />
    </div>
    <Footer />
  </div>
);
// ReactDOM.render(<App />, document.getElementById("app"));

export default App;
