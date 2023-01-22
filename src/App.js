
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Regform from "./RegForm"
import CustomInput from "./CustomInput";
import PostItem from "./PostItems";
import PostList from "./PostList";
import PostForm from "./PostForm";
import MySelect from "./UI/Components/MySelect";





function App() {

  const [posts , setPosts] = useState([])
  const [selectSort, setSelectedSort] = useState('')
  const createPost = (newPost) =>{
    setPosts([...posts, newPost] )
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost = (sort) =>{ 

    setSelectedSort(sort);
    console.log(sort)
    // setPosts([...posts].sort((a , b) => a[sort].localCompare(b[sort])));
  }
 
  return (
   
    <div>

      <PostForm create= {createPost}/>
      <hr style = {{margin: '15px 0px '}}/>
      <div>
        <h2 style={{color: 'white' , margin: '5px 0px'}}>Сортировка дел</h2>
        <MySelect 
        value = {selectSort}
        onChange = {sortPost}
        defaultValue="Сортировка"
        options = {[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'Описанию'},
       
        ]}
        />
      </div>
      {posts.length !== 0
        ?<PostList remove = {removePost} posts={posts} title = "Список дел"
       
        />
        :<div style = {{color:'white'}}>Тут нет дел, пока что</div>
      }
      

    </div>

  );
};
export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

