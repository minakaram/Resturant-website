import React from "react";
import "./style/NewsHead.css";
function NewsHead(props) {
  return (
    <div className="NewsHead">
      <h1>{props.h1}</h1>
      <div className="inner  ">
        <div className="box-left-side">
          <p>Featured</p>
          <h1>Healthy Lifestyle And Happy Living Tips</h1>
        </div>
        <div className="box-right-side">
          <p>Featured</p>
          <h1>How To Make A Healthy Meal</h1>
        </div>
      </div>
    </div>
  );
}

export default NewsHead;
