import React, { useMemo, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import "photoswipe/style.css";
import "./Gallery.css";

import img1 from "../assets/images/work/IMG_0221.jpeg";
import img2 from "../assets/images/work/IMG_5375.jpeg";
import img3 from "../assets/images/work/IMG_5758.jpeg";
import img4 from "../assets/images/work/IMG_6339.jpeg";
import img5 from "../assets/images/work/IMG_6410.jpeg";
import img6 from "../assets/images/work/IMG_7077.jpeg";

const projects = [
  {
    src: img1,
    title: "Modern Bathroom Retreat",
    location: "Brampton, ON",
    category: "Bathrooms",
  },
  {
    src: img2,
    title: "Luxury Kitchen Backsplash",
    location: "Vaughan, ON",
    category: "Kitchens",
  },
  {
    src: img3,
    title: "Natural Stone Living Room",
    location: "Mississauga, ON",
    category: "Floors",
  },
  {
    src: img4,
    title: "Warm Wood Floors Home Design",
    location: "Oakville, ON",
    category: "Floors",
  },
  {
    src: img5,
    title: "Modern Bathroom Retreat",
    location: "Brampton, ON",
    category: "Bathrooms",
  },
  {
    src: img6,
    title: "Luxury Kitchen Backsplash",
    location: "Vaughan, ON",
    category: "Kitchens",
  },
  {
    src: img3,
    title: "Natural Stone Feature Wall",
    location: "Mississauga, ON",
    category: "Walls",
  },
  {
    src: img4,
    title: "Outdoor Patio Tiling",
    location: "Oakville, ON",
    category: "Outdoors",
  },
];

const filters = ["All", "Bathrooms", "Kitchens", "Floors", "Walls", "Outdoors"];

function GalleryPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-heading">
          <h2>
            Our <span>Recent</span> Projects
          </h2>

          <div className="portfolio-heading-line" />
        </div>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`portfolio-filter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => {
                setActiveFilter(filter);
                setShowAll(false);
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <Gallery>
          <div className="gallery-grid">
            {displayedProjects.map((project, index) => (
              <Item
                key={`${project.title}-${index}`}
                original={project.src}
                thumbnail={project.src}
                caption={`${project.title} — ${project.location}`}
              >
                {({ ref, open }) => (
                  <article className="gallery-card">
                    <button
                      ref={ref}
                      type="button"
                      className="gallery-image-button"
                      onClick={open}
                      aria-label={`Open ${project.title}`}
                    >
                      <img
                        src={project.src}
                        alt={project.title}
                        className="gallery-image"
                      />

                      <div className="gallery-image-overlay" />
                    </button>

                    <div className="gallery-card-content">
                      <h3>{project.title}</h3>

                      <p>
                        <FaLocationDot />
                        {project.location}
                      </p>
                    </div>
                  </article>
                )}
              </Item>
            ))}
          </div>
        </Gallery>

        {filteredProjects.length > 6 && (
          <div className="portfolio-button-wrapper">
            <button
              type="button"
              className="portfolio-view-button"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show Less" : "Show All Projects"}

              <FaArrowRight className={showAll ? "rotate-arrow" : ""} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GalleryPortfolio;
