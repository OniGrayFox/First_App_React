import React from "react";
import classess from "./UI/Components/MyButton"
const PostItem = (props) => {

  console.log(props)
  return (
    <div className="post">
         <div className="post__content">
            <strong>{props.post.id}</strong>
            <div>{props.post.body}</div>
        </div>
        <div className="post__btn">
            <button>Delete</button>

        </div>
    </div>
   
    

  );
};
export default PostItem;

