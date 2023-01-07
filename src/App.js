import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Regform from "./RegForm"
import CustomInput from "./CustomInput";
import Post from "./Post";

function App() {
  return (
    <Regform/>,
    <CustomInput/>,
    <Post/>
    

  );
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
