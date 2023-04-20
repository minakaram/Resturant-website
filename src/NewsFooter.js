import React from "react";
import "./style/NewsFooter.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import img1 from "./images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg";
import img2 from "./images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg";
import img3 from "./images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg";
function NewsFooter() {
  return (
    <div className="NewsFooter">
      <div className="news-footer-left-side card">
      <div className="img-cover">
          <img src={img1} claseName="card-img-top" alt="..." />
        </div>
        <div claseName="card-body">
          <button type="button" className="btn btn-primary">
            Promotions
          </button>
          <span>8 April 2022</span>
          <h5 claseName="card-title">Is Coconut Good For You?</h5>
        </div>
      </div>
      <div className="news-footer-center-side card">
        <div className="img-cover">
          <img src={img2} claseName="card-img-top" alt="..." />
        </div>
        <div claseName="card-body">
          <button type="button" className="btn btn-dark">
            News
          </button>
          <h5 claseName="card-title">Salmon Steak Noodle</h5>
        </div>
      </div>
      <div className="news-footer-right-side card">
      <div className="img-cover">
          <img src={img3} claseName="card-img-top" alt="..." />
        </div>
        <div claseName="card-body">
          <button type="button" className="btn btn-primary">
            Meeting
          </button>
          <span>8 April 2022</span>
          <h5 claseName="card-title">Making A Healthy Salad</h5>
        </div>
      </div>
    </div>
  );
}

export default NewsFooter;
