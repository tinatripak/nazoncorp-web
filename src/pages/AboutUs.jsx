import { Link } from "react-router-dom";
import { LuClock3, LuHammer, LuShieldCheck, LuUserRound } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

import AboutBg from "../assets/images/about-us-bg.png";
import AboutSecond from "../assets/images/bathroomtile.png";

import "./AboutUs.css";

const values = [
  {
    title: "Quality First",
    description: "Premium materials and workmanship you can count on.",
    Icon: LuShieldCheck,
  },
  {
    title: "Customer Focused",
    description:
      "We listen, collaborate, and deliver results that exceed expectations.",
    Icon: LuUserRound,
  },
  {
    title: "Craftsmanship",
    description: "Attention to detail and pride in every cut, set, and finish.",
    Icon: LuHammer,
  },
  {
    title: "On Time, Every Time",
    description:
      "Reliable service, organized processes, and respect for your time.",
    Icon: LuClock3,
  },
];

function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <img
          className="about-hero-image"
          src={AboutBg}
          alt="Luxury living room with marble fireplace"
        />

        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <div className="about-section-label">
            <span />
            About Us
            <span />
          </div>

          <h1>
            Built on Quality.
            <br />
            <span>Driven</span> by Passion.
          </h1>

          <div className="about-heading-line" />

          <p>
            We are a team of skilled professionals specializing in tile and
            stone installation. With years of experience and a commitment to
            excellence, we transform spaces into timeless works of art.
          </p>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-container">
          <div className="about-values-heading">
            <span />
            <p>Our Values</p>
            <span />
          </div>

          <div className="about-values-grid">
            {values.map(({ title, description, Icon }) => (
              <article className="about-value-card" key={title}>
                <Icon className="about-value-icon" />
                <h2>{title}</h2>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-commitment">
        <div className="about-commitment-content">
          <div className="about-section-label about-commitment-label">
            Our Commitment
            <span />
          </div>

          <h2>
            Elevating Spaces.
            <br />
            <span>Creating Lasting Value.</span>
          </h2>

          <div className="about-heading-line" />

          <p>
            From concept to completion, we bring precision, integrity, and care
            to every project. Our goal is simple—your complete satisfaction.
          </p>
        </div>

        <div className="about-commitment-image">
          <img src={AboutSecond} alt="Premium bathroom tile installation" />
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-cta">
          <div>
            <h2>Have a Project in Mind?</h2>
            <p>Let&apos;s bring your vision to life.</p>
          </div>

          <Link to="/contact-us#quote">
            Request a Quote Today
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
