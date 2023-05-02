import React from "react";
import "./style/story.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import img1 from "./images/team/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import img2 from "./images/team/nicolas-horn-MTZTGvDsHFY-unsplash.jpg";
import img3 from "./images/team/rc-cf-FMh5o5m5N9E-unsplash.jpg";
import img4 from "./images/charles-deluvio-FdDkfYFHqe4-unsplash.jpg";
import HomeFooter from "./HomeFooter";
function Story() {
  return (
    <div>
      <div className="kitchen-story">
        <h1>Kitchen's Story</h1>
        <p>This Is How Our Kitshen Evolved In New Digital Era</p>
      </div>
      <div className="story-content">
        <div className="story-content-left">
          <p>
            Crispy kitchen is the latest Bootstrap 5 Html Template Provided by
            the Company.
          </p>
          <button type="button" class="btn btn-dark">
            Check Out News
          </button>
          <button type="button" class="btn btn-danger">
            Say Hi
          </button>
        </div>
        <div className="story-content-right">
          <p>
            Since this website template 100% free to use, you can edit and apply
            it for you commercial resturant websites There are 6 HTML pages
            included in the template. please
            <span> click "Reservation" button</span> on the top right to se the
            pop-up reservation form.
          </p>
          <p>
            you are NOT allowed to redistribute the template zip file on any
            template download website. please{" "}
            <span className="cont">Contact Us</span> for more information.
          </p>
        </div>
      </div>
      <div className="team-members">
        <h1>Team Members</h1>
        <div className="members">
          <div className="member">
            <div className="card">
              <div className="img-cover">
                <img src={img1} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text">
                  <h3>Sohpie</h3>
                  <p>CEO & Founder</p>
                </p>
              </div>
            </div>
          </div>
          <div className="member">
            <div className="card">
              <div className="img-cover">
                <img src={img2} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text">
                  <h3>Benjamin W.</h3>
                  <p>Resturant Manager</p>
                </p>
              </div>
            </div>
          </div>
          <div className="member">
            <div className="card">
              <div className="img-cover">
                <img src={img3} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text">
                  <h3>Benjamin W.</h3>
                  <p>Resturant Chef</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-letter">
        <div className="news-letter-left">
          <img src={img4} alt="..." />
        </div>
        <div className="news-letter-right">
          <h3>Our Newsletter</h3>
          <p className="text-muted mb-5">The Food News Everyday</p>
          <input
            type="text"
            className="form-control"
            placeholder="Your Email Address"
            aria-label="Username"
          ></input>
          <button type="button" className="form-control btn btn-dark">
            Sign Up
          </button>
          <p className="text-muted mt-3">
            By signing up, you agree our Privacy Notice and the data Policy
          </p>
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default Story;
