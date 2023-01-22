import React, {useState} from "react";

import MyButton from "./UI/Components/MyButton";






const PostItem = (props) => {
  const [likes, setLikes] = useState(0)

  function increment(){
      setLikes(likes + 1)
  }
  function decriment(){
      setLikes(likes - 1)
  }

  return (
    <div className="post">
         <div className="post__content">
            <strong>{props.number}. {props.post.title} </strong>
            <div>{props.post.body}</div>
            <div>Количество: {likes} / {props.post.count}</div>

        <MyButton  onClick = {increment}>+</MyButton>
        <MyButton  onClick = {decriment}>-</MyButton>
        </div>
        <div className="post__btn">
            <MyButton onClick = {() => props.remove(props.post)}>X</MyButton>

        </div>
    </div>



  );
};
export default PostItem;