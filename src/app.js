import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Regform from '../src/layouts/Header/Header';
import "./styles.css";
import Regform from "./RegForm"


export default function App() {
  return (
    <Regform/>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Regform/>, rootElement);
