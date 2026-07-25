import { FaBath } from "react-icons/fa";
import { GiFireplace } from "react-icons/gi";
import { GoStack } from "react-icons/go";
import { LuGrid3X3, LuHouse, LuMountain, LuSun } from "react-icons/lu";

import ImageWithLoader from "../components/ImageWithLoader";
import ChooseUs from "../components/ChooseUs";

import bathroomTile from "../assets/images/work/bathroomtile.jpg";
import fireplaceTiling from "../assets/images/work/fireplace-tiling.jpeg";
import floorTiling from "../assets/images/work/floor-tiling.jpg";
import kitchenBacksplash from "../assets/images/work/kitchen-backsplash.jpg";
import marble from "../assets/images/work/marble.jpg";
import outdoorTiling from "../assets/images/work/outdoor.jpg";
import porcelain from "../assets/images/work/porcelain.jpg";

import "./Services.css";

const services = [
  {
    title: "Bathroom Tiling",
    image: bathroomTile,
    Icon: FaBath,
    description:
      "Elegant and durable tiling solutions for bathrooms, showers, walls, floors, and wet areas.",
  },
  {
    title: "Kitchen Backsplash",
    image: kitchenBacksplash,
    Icon: LuHouse,
    description:
      "Custom backsplash installation that protects your walls and elevates the look of your kitchen.",
  },
  {
    title: "Floor Tiling",
    image: floorTiling,
    Icon: LuGrid3X3,
    description:
      "Precision floor tile installation for a flawless finish, professional leveling, and lasting durability.",
  },
  {
    title: "Fireplace Tiling",
    image: fireplaceTiling,
    Icon: GiFireplace,
    description:
      "Transform your fireplace with porcelain, marble, or natural stone installed with expert craftsmanship.",
  },
  {
    title: "Outdoor Tiling",
    image: outdoorTiling,
    Icon: LuSun,
    description:
      "Weather-resistant tile installation for patios, balconies, steps, walkways, and outdoor living areas.",
  },
  {
    title: "Porcelain Slab Installation",
    image: porcelain,
    Icon: GoStack,
    description:
      "Large-format porcelain slab installation for seamless walls, kitchens, bathrooms, and custom surfaces.",
  },
  {
    title: "Natural Stone & Marble Installation",
    image: marble,
    Icon: LuMountain,
    description:
      "Timeless natural stone and marble installation completed with precision, care, and premium finishing.",
  },
];

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <div>
            <h1>
              Our <span>Services</span>
            </h1>

            <div className="services-title-line" />
          </div>

          <p>
            Expert installation. Premium materials. Beautiful results that last.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map(({ title, image, Icon, description }) => (
            <article className="service-grid-card" key={title}>
              <div className="service-card-image">
                <ImageWithLoader
                  src={image}
                  alt={title}
                  wrapperClassName="service-card-image-wrapper"
                  className="service-card-image"
                />
              </div>

              <div className="service-card-body">
                <Icon className="service-card-icon" />

                <h2>{title}</h2>

                <div className="service-card-line" />

                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="services-chooseus">
        <ChooseUs />
      </div>
    </main>
  );
}

export default Services;
