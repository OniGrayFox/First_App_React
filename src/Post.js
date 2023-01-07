import React from "react";
import ReactDOM from "react-dom";



function Post() {
  return (
    <div className="post">
         <div className="post__content">
            <strong>Заголовок</strong>
            <div>Длинное большое подробное описание чего либо</div>
        </div>
        <div className="post__btn">
            <button>Delete</button>

        </div>
    </div>
   
    

  );
}
export default Post;
const rootElement = document.getElementById("root");
ReactDOM.render(<Post/>, rootElement);
