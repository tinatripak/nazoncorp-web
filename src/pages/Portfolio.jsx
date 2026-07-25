import { useMemo, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { FaArrowRight } from "react-icons/fa6";

import ChooseUs from "../components/ChooseUs";
import { projects } from "../data/projects";

import "photoswipe/style.css";
import "./Portfolio.css";
import ImageWithLoader from "../components/ImageWithLoader";

const filters = [
  "All",
  "Bathrooms",
  "Backsplashes",
  "Floor Tiling",
  "Fireplace Tiling",
  "Outdoor",
];

const previewLimit = 8;

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(({ category }) => category.includes(activeFilter));
  }, [activeFilter]);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, previewLimit);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  return (
    <main className="portfolio-section">
      <div className="portfolio-container">
        <header className="portfolio-heading">
          <h1>
            Our <span>Recent</span> Projects
          </h1>

          <div className="portfolio-heading-line" />
        </header>

        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`portfolio-filter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => handleFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <Gallery>
          <div className="gallery-grid">
            {displayedProjects.map(({ id, src, title, width, height }) => (
              <Item
                key={id}
                original={src}
                thumbnail={src}
                width={width}
                height={height}
                caption={title}
              >
                {({ ref, open }) => (
                  <article className="gallery-card">
                    <button
                      ref={ref}
                      type="button"
                      className="gallery-image-button"
                      onClick={open}
                      aria-label={
                        title ? `Open ${title}` : "Open project image"
                      }
                    >
                      <ImageWithLoader
                        src={src}
                        alt={title || "Tiling project"}
                        wrapperClassName="portfolio-image-wrapper"
                        className="portfolio-image"
                        width={width}
                        height={height}
                      />

                      <span className="gallery-image-overlay" />
                    </button>

                    {title && (
                      <div className="gallery-card-content">
                        <h2>{title}</h2>
                      </div>
                    )}
                  </article>
                )}
              </Item>
            ))}
          </div>
        </Gallery>

        {filteredProjects.length > previewLimit && (
          <div className="portfolio-button-wrapper">
            <button
              type="button"
              className="portfolio-view-button"
              onClick={() => setShowAll((current) => !current)}
            >
              {showAll ? "Show Less" : "Show All Projects"}

              <FaArrowRight
                className={showAll ? "rotate-arrow" : ""}
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </div>

      <div className="portfolio-chooseus">
        <ChooseUs />
      </div>
    </main>
  );
}

export default Portfolio;
