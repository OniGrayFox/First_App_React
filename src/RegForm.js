import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

export default function RegForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
   
      <input type="datetime" placeholder="date" {...register("date", {})} />
     
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

