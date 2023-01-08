import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Regform from "./RegForm"
import CustomInput from "./CustomInput";
import PostItem from "./PostItems";
import PostList from "./PostList";
import PostForm from "./PostForm";





function App() {

  const [posts , setPosts] = useState([])

  const createPost = (newPost) =>{
    setPosts(...posts, newPost )
  }





 
  return (
   
    <div>
      <PostForm create= {createPost}/>
      <PostList posts={posts} title = "Можно динамически создавать списки без обновлений!"/>

    </div>

  );
};
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
