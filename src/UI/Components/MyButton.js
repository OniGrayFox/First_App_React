import React, { useState } from "react";
import classes from "./MyButton.module.css"



const MyButton = ({children, ...props}) => {
    
  return (
    <button {...props} className={classes.newBtn}>
        {children}

    </button>
   
    

  );
};
export default MyButton;

