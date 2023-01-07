import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Regform from "./RegForm"
import CustomInput from "./CustomInput";
import PostItem from "./PostItems";
import PostList from "./PostList";

function App() {
 const [posts , setPosts] = useState([
  {id: 1 , title: "JS", body: "Description"}
 ])
  return (
   
    <div>
      <PostList posts={posts} title = "Cписок постов"/>
    
    </div>

  );
}
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
