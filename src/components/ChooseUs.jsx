import { Link } from "react-router-dom";
import { CiChat1 } from "react-icons/ci";
import { FaAward, FaUsers } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { PiClockCountdownLight } from "react-icons/pi";

import "./ChooseUs.css";

const benefits = [
  {
    title: "High Quality",
    description: "Premium materials",
    Icon: MdOutlineVerified,
  },
  {
    title: "Expert Team",
    description: "Skilled professionals",
    Icon: FaUsers,
  },
  {
    title: "Timely Delivery",
    description: "On schedule",
    Icon: PiClockCountdownLight,
  },
  {
    title: "10+",
    description: "Years of xperience",
    Icon: FaAward,
  },
];

function ChooseUs() {
  return (
    <section className="chooseus">
      <div className="chooseus-title">
        <span>Why Choose Us</span>
        <h2>Built on Quality. Backed by Trust.</h2>
      </div>

      <div className="chooseus-grid">
        {benefits.map(({ title, description, Icon }) => (
          <div className="chooseus-item" key={title}>
            <Icon className="chooseus-icon" />

            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}

        <Link to="/contact-us#quote" className="chooseus-quote">
          <CiChat1 className="chooseus-icon" />

          <div>
            <span>Have a project in mind?</span>
            <strong>Request a Quote Today</strong>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ChooseUs;
