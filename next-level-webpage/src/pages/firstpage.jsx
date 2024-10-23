import React from "react";
import "./firstpages.css";

function FirstPage() {
  return (
    <div className="firstpages">
      <div className="content">
        <h1>This is The New <span style={{color:"yellow"}}>World</span> </h1>
        <div className="firstpage-btn">
          <button className="btn">Enroll</button>
          <button className="btn">See More</button>
        </div>
        <div className="video-sec">
        <iframe
            className="media"
            src="https://www.youtube.com/embed/EqRIYpaUP_g?controls=0&mute=1&autoplay=1"
            title="YouTube Video 2"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
