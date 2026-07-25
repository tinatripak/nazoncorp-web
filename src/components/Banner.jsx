import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeBg from "../assets/images/home-bg.png";

const Banner = () => {
  return (
    <section className="hero-slider d-sm-block">
      <div className="hero-slide">
        <img
          className="d-block w-100 hero-slide-image"
          src={HomeBg}
          alt="NazConCorp background"
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-title">
            Built with
            <br />
            precision.
            <span>Finished with pride.</span>
          </h1>

          <div className="hero-line" />

          <p className="hero-description">
            Premium installation of tile, stone, slabs, and hardwood floors for
            residential and commercial spaces.
          </p>

          <div className="hero-buttons">
            <Link to="/contact-us#quote" className="hero-btn hero-btn-primary">
              Request a Quote
              <ArrowForwardIcon />
            </Link>

            <Link to="/portfolio" className="hero-btn hero-btn-secondary">
              View Portfolio
              <ArrowForwardIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
