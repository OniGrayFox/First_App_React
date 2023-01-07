import React, { useState } from "react";
import ReactDOM from "react-dom";

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
            <input 
            type = "text" 
            value={value}
            onChange = {event => setValue(event.target.value)}
            />
            <button onClick = {increment}>Increment</button>
            <button onClick = {decriment}>Decriment</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CustomInput />, rootElement);
export default CustomInput;