import React from "react";
import "./style/contact.css";
import Location from "./component/Location";
import HomeFooter from "./HomeFooter";
import { Col, Row } from "react-bootstrap";
function Contact() {
  return (
    <div>
      {/* header */}
      <div className="contact-header">
        <h1>Say Hi</h1>
        <p>we are happy to get in touch with you</p>
      </div>
      {/* login form */}
      <div className="contact-content">
        <h1>Leave a message</h1>
        <Row className="contact-inner">
          <Col md={5} xs={11} className="contact-inner-left mb-5">
            {/* info */}
            <div className="info">
              {/* full name */}
              <div className="full-name">
                <label>Full Name</label>
                <br />
                <input placeholder="Your Name"></input>
              </div>
              {/* phone number */}
              <div className="phone-number">
                <label>Phone Number</label>
                <br />
                <input placeholder="123-456-789"></input>
              </div>
            </div>
            {/* email */}
            <label>Email</label>
            <br />
            <input placeholder="Your Email"></input>
            <br />
            <label>Message</label>
            <br />
            <textarea placeholder="Your Message"></textarea>
            <div className="form-btn">
              <button>Send</button>
            </div>
          </Col>
          <Col md={5} xs={12} className="contact-inner-right">
            <div className="contact-inner-right-container">
              <h3>Week Days</h3>
              <div className="opening-time">
                <div className="text-muted">Montday to Friday</div>
                <div className="text-muted">10:00 AM to 08:00 PM</div>
              </div>
            </div>
            <div className="contact-inner-right-container">
              <h3>Week Ends</h3>
              <div className="opening-time">
                <div className="text-muted">Saturday and Sunday</div>
                <div className="text-muted">11:00 AM to 11:00 PM</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Location />
      <HomeFooter />
    </div>
  );
}

export default Contact;
