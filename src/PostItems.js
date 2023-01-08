import React from "react";

import MyButton from "./UI/Components/MyButton";






const PostItem = (props) => {

 
  return (
    <div className="post">
         <div className="post__content">
            <strong>{props.number}. {props.post.title} </strong>
            <div>{props.post.body}</div>
        </div>
        <div className="post__btn">
            <MyButton onClick = {() => props.remove(props.post)}>X
            
            </MyButton>

        </div>
    </div>
   
    

  );
};
export default PostItem;

