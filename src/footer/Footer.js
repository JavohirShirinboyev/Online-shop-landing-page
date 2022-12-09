import React from "react";
import { Col, Container, Row } from "reactstrap";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md="4" className="brand-box">
            <div className="brand">
              <img src={logo} alt="Footer Logo" />
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                inventore repellat quisquam debitis repudiandae iure repellendus
                voluptate soluta! Perspiciatis deserunt quisquam enim,
                voluptatem impedit minus!
              </p>
            </div>
          </Col>
          <Col md="8" className="links-box">
            <Row>
              <Col md="4" sm="12">
                <h4 className="theme">Products</h4>
                <ul className="links">
                  <li>
                    <a href="#">Trending</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Vendors</a>
                  </li>
                  <li>
                    <a href="#">Brands</a>
                  </li>
                  <li>
                    <a href="#">StoreFront</a>
                  </li>
                </ul>
              </Col>

              <Col md="4" sm="12">
                <h4 className="theme">Legals</h4>
                <ul>
                  <li>
                    <a href="#">License</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </Col>
              <Col md="4" sm="12">
                <h4 className="theme">Contacts</h4>
                <ul>
                  <li>
                    <a href="#">
                      Fell free get in touch with us via phone or send us a
                      message
                    </a>
                  </li>
                  <li>
                    <a href="#">+1 234 567 89 10</a>
                  </li>
                  <li>
                    <a href="#">javohirshirinboyev@gmail.com</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
