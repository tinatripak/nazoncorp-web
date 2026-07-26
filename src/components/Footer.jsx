import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import Logo from "../assets/images/logo/logo.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer">
        <Container>
          <Row className="justify-content-lg-between justify-content-center">
            <Col className="col-12 col-md-4 col-lg-3 text-center mb-4 mb-md-0">
              <img
                src={Logo}
                alt="NazConCorp Logo"
                className="img-fluid mb-3"
              />

              <div className="social">
                <ul className="list-unstyled d-flex justify-content-center">
                  <li className="mx-2">
                    <a
                      href="https://www.instagram.com/nazconcorp/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="NazConCorp Instagram"
                    >
                      <InstagramIcon />
                    </a>
                  </li>

                  <li className="mx-2">
                    <a
                      href="mailto:nazconcorp@gmail.com"
                      aria-label="Email NazConCorp"
                    >
                      <EmailIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col className="col-12 col-md-4 col-lg-2 mb-4 mb-md-0 px-xl-5">
              <h5>Quick Links</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>

                <li>
                  <Link to="/about-us">About Us</Link>
                </li>

                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </Col>

            <Col className="col-12 col-md-4 col-lg-3">
              <h5>Contact Us</h5>

              <p className="footer-contact-item">
                <LocalPhoneIcon />

                <a href="tel:+13658858602">+1 (365) 885-8602</a>
              </p>

              <p className="footer-contact-item">
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
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="sticky-footer-actions">
        <a
          href="tel:+13658858602"
          className="sticky-footer-button sticky-footer-call"
        >
          <LocalPhoneIcon />
          <span>Call Now</span>
        </a>

        <Link
          to="/contact-us#quote"
          className="sticky-footer-button sticky-footer-quote"
        >
          <RequestQuoteIcon />
          <span>Free Quote</span>
        </Link>
      </div>
    </>
  );
};

export default Footer;
