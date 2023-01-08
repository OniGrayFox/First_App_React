import React, { useState } from "react";




const PostForm = ({create}) => {
  const [post, setPost] = useState([{title: '' , body: '' }])
  const [titles, setState] = useState('')  
  const [body, setBody] = useState('')

  const addNewPost = (e) =>{
    e.preventDefault()
    
    const newPost = {
      ...post , id: Date.now()
    }
    create(newPost)
    setPost([{title: '' , body: '' }])
    }
   
  return (
    <form>
    <input  type = "text" placeholder="Название поста"
    value={post.titles}
    onChange = {e => setPost({...post,title:e.target.value})}
    />
    <input type = "text" placeholder="Содержание поста"
    value={post.body}
    onChange = {e => setPost({...post,body:e.target.value})}
    />
    <button type="submit" onClick = {addNewPost}>Создать пост</button>
</form>
   
    

  );
};
export default PostForm;

