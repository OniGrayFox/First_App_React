import React, { useState } from "react";
import ReactDOM from "react-dom";
import PostItem from "./PostItems";



const PostList = ({posts, title}) => {
    
  return (
    <div >
    <h1 style = {{textAlign: 'center'}}>
        {title}
      </h1>
    <h5 style = {{color: "white",textAlign: 'center'}}>Это было пиздец как муторно, особенно когда не шибко шаришь тут просто адище </h5>
      {...posts.map((post, index ) => <PostItem number = {index + 1} post = {post} key = {post.id}/>)}

    </div>
   
    

  );
}
export default PostList;

