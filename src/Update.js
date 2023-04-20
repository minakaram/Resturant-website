import React from "react";
import "./style/update.css";
import NewsHead from "./NewsHead";
import NewsFooter from "./NewsFooter";
import HomeFooter from "./HomeFooter";
import video2 from "./images/slide/pexels-cristian-rojas-7772228.mp4";
function Update() {
  return (
    <div className="update">
      <div className="update-header">
        <h1>News & Events</h1>
        <p>our latest update, news, events and special promotions</p>
      </div>
      <div className="update-box1">
        <h1>Latest Updates</h1>
        <NewsHead />
      </div>

      <div className="video-header">
        <div className="video-text">
          <h1>Crispy Kitchen</h1>
        </div>
        <video autoPlay loop muted>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
      <div className="update-box2">
        <h1>Latest & Updates</h1>
        <NewsFooter />
      </div>
      <HomeFooter />
    </div>
  );
}

export default Update;
