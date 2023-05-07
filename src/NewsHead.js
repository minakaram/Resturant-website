import React from "react";
import "./style/NewsHead.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
function NewsHead() {
  return (
    <div className="NewsHead">
      <h1 className="head-prop">News And Events</h1>
      <Container fluid className="head-fluid">
        <Row className="inner">
          <Col lg={5} sm={11} className="box-left-side mb-4">
            <p>Featured</p>
            <h1>Healthy Lifestyle And Happy Living Tips</h1>
          </Col>
          <Col lg={5} sm={11} className="box-right-side mb-4">
            <p>Featured</p>
            <h1>How To Make A Healthy Meal</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsHead;
