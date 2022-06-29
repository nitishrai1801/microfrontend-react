import React, {Suspense} from "react";
import ReactDOM from "react-dom";
// import Footer from "home/Footer";
// import Header from "home/Header";


//Lazy loading Header

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Product detail page content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
