import React, { useState } from "react";
import ReactDOM from "react-dom";
import PostItem from "./PostItems";



const PostList = ({posts, title}) => {
    
  return (
    <div className="post">
    <h1 style = {{textAlign: 'center'}}>
        {title}
      </h1>
      {posts.map((post ) => <PostItem post = {post} key = {post.id}/>)}

    </div>
   
    

  );
}
export default PostList;

