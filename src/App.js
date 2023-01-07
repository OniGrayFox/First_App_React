import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Regform from "./RegForm"


function App() {
  return (
    <Regform/>
  );
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
