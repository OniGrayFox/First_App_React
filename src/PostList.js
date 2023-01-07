import React, { useState } from "react";
import ReactDOM from "react-dom";



const PostItem = (props) => {
    const [posts , setPosts] = useState([
        {id:1 , title: "Js" , body: "Jaba Script"},
        {id:1 , title: "Js" , body: "Jaba Script"},
        {id:1 , title: "Js" , body: "Jaba Script"},
      ])
  return (
    <div className="post">
    <h1 style = {{textAlign: 'center'}}>
        Список постов
      </h1>
      {posts.map((post ) => <PostItem post = {post} key = {post.id}/>)}

    </div>
   
    

  );
}
export default PostItem;
const rootElement = document.getElementById("root");
ReactDOM.render(<PostItem/>, rootElement);
