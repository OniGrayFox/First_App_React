import React from "react";
import ReactDOM from "react-dom";



const PostItem = (props) => {
  console.log(props)
  return (
    <div className="post">
         <div className="post__content">
            <strong>{}Заголовок</strong>
            <div>Длинное большое подробное описание чего либо</div>
        </div>
        <div className="post__btn">
            <button>Delete</button>

        </div>
    </div>
   
    

  );
}
export default PostItem;
const rootElement = document.getElementById("root");
ReactDOM.render(<PostItem/>, rootElement);
