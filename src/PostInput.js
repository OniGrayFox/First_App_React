import React, { useState } from "react";




const PostInput = ({posts, title}) => {
    
  return (
    <form>
        <input type = "text" placeholder="Название дела"/>
        <input type = "text" placeholder="Описание"/>
        <button type="submit">Создать пост</button>
    </form>
   
    

  );
}
export default PostInput;

