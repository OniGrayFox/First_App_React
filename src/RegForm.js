import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

export default function RegForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  // const [data, setValue] = useState('')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="firstName" {...register("firstName")} />
      <input placeholder="lastName" {...register("lastName")} />
     
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">chupanya-mynuanya</option>
      </select>
      
      <input type="submit" />
    </form>
  );
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RegForm />, rootElement);

