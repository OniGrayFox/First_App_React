import React, { useState } from "react";
import ReactDOM from "react-dom";
import MyButton from "./UI/Components/MyButton";



function CustomInput(){
    const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('Text')
    function increment(){
        setLikes(likes + 1)
    }
    function decriment(){
        setLikes(likes - 1)
    }

    return(
        <div className="App">
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <textarea 
            type = "text" 
            value={value}
            onChange = {event => setValue(event.target.value)}
            />
            <MyButton  onClick = {increment}>Increment</MyButton>
            <MyButton onClick = {decriment}>Decriment</MyButton>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CustomInput />, rootElement);
export default CustomInput;