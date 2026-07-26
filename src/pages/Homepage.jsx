import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { MdOutlineArchitecture, MdOutlineChair } from "react-icons/md";
import { PiPaintRollerLight, PiWallLight } from "react-icons/pi";

import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";

const services = [
  {
    title: "Pre-Construction",
    description: "Planning & Consultation",
    Icon: MdOutlineArchitecture,
  },
  {
    title: "Residential & Commercial",
    description: "Construction & Renovation",
    Icon: MdOutlineChair,
  },
  {
    title: "Tile Installation",
    description: "Precision & Detailing",
    Icon: PiWallLight,
  },
  {
    title: "Interior Finishing",
    description: "Quality You Can See",
    Icon: PiPaintRollerLight,
  },
  {
    title: "Custom Projects",
    description: "Tailored to Your Vision",
    Icon: MdOutlineArchitecture,
  },
];

function Homepage() {
  return (
    <main>
      <Banner />

      <section className="services-overview-section">
        <Container>
          <div className="services-heading">
            <span />
            <h2>Our Services</h2>
            <span />
          </div>

          <div className="services-primary-grid">
            {services.map(({ title, description, Icon }) => (
              <Link
                to="/services"
                className="service-overview-item"
                key={title}
              >
                <Icon className="service-overview-icon" />

                <div className="service-overview-content">
                  <h3 className="section-title">{title}</h3>
                  <p className="section-description">{description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="services-divider" />

          <ChooseUs />
        </Container>
      </section>
    </main>
  );
}

export default Homepage;
