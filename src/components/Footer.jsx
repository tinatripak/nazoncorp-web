import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Logo from "../assets/images/logo/logo.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id="footer">
      <Container>
        <Row className="justify-content-lg-between justify-content-center">
          <Col className="col-12 col-md-4 col-lg-3 text-center mb-4 mb-md-0">
            <img src={Logo} alt="NazConCorp Logo" className="img-fluid mb-3" />
            <div className="social">
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="mx-2">
                  <Link to="https://www.instagram.com/nazconcorp/">
                    <InstagramIcon />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="mailto:nazconcorp@gmail.com">
                    <EmailIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col className="col-12 col-md-4 col-lg-2 mb-4 mb-md-0 px-xl-5">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <h6>
                  <a href="/">Home</a>
                </h6>
              </li>
              <li>
                <h6>
                  <a href="/services">Services</a>
                </h6>
              </li>
              <li>
                <h6>
                  <a href="/portfolio">Portfolio</a>
                </h6>
              </li>
              <li>
                <h6>
                  <a href="/about-us">About Us</a>
                </h6>
              </li>
              <li>
                <h6>
                  <a href="/contact-us">Contact Us</a>
                </h6>
              </li>
            </ul>
          </Col>

          <Col className="col-12 col-md-4 col-lg-3 ">
            <h5>Contact Us</h5>
            <p>
              <LocalPhoneIcon />{" "}
              <a href="tel:+13658858602">+1 (365) 885-8602</a>
            </p>
            <p>
              <EmailIcon />
              <a href="mailto:nazconcorp@gmail.com">nazconcorp@gmail.com</a>
            </p>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col md={8} className="copyright">
            <p>&copy; {currentYear} NazConCorp. All rights reserved.</p>
          </Col>
          <Col md={4} className="copyright links text-md-end">
            <p>
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
