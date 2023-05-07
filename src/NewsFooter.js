import React from "react";
import "./style/NewsFooter.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import img1 from "./images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg";
import img2 from "./images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg";
import img3 from "./images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
function NewsFooter() {
  return (
    <Container>
      <Row className="NewsFooter">
        <Col lg={4} sm={11} className="mb-4">
          <Card className="news-footer-left-side">
            <div className="img-cover">
              <img src={img1} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <button type="button" className="btn btn-primary">
                Promotions
              </button>
              <span>8 April 2022</span>
              <h5 className="card-title">Is Coconut Good For You?</h5>
            </div>
          </Card>
        </Col>
        <Col lg={4} sm={11} className="mb-4">
          <Card className="news-footer-center-side">
            <div className="img-cover">
              <img src={img2} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <button type="button" className="btn btn-dark">
                News
              </button>
              <h5 className="card-title">Salmon Steak Noodle</h5>
            </div>
          </Card>
        </Col>
        <Col lg={4} sm={11} className="mb-4">
          <Card className="news-footer-right-side ">
            <div className="img-cover">
              <img src={img3} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <button type="button" className="btn btn-primary">
                Meeting
              </button>
              <span>8 April 2022</span>
              <h5 className="card-title">Making A Healthy Salad</h5>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsFooter;
