import React, { useState } from "react";




const PostInput = ({posts, title}) => {
    
  return (
    <form>
        <input type = "text" placeholder="Название поста"/>
        <input type = "text" placeholder="Содержание поста"/>
        <button type="submit">Создать пост</button>
    </form>
   
    

  );
}
export default PostInput;

