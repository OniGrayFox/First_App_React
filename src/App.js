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
    setPosts([...posts, newPost] )
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


 
  return (
   
    <div>
      <br/>
      <Regform/>
      <br/>
      <CustomInput/>
      <br/>
      <PostForm create= {createPost}/>
      {posts.length !== 0
        ?<PostList remove = {removePost} posts={posts} title = "Можно динамически создавать списки без обновлений!"/>
        :<div style = {{color:'white'}}>Тут ничего нет, пока что</div>
      }
      

    </div>

  );
};
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
