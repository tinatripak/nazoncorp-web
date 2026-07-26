import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";
import "./ContactUs.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  message: "",
};

const projectTypes = [
  "Bathroom Tiling",
  "Kitchen Backsplash",
  "Floor Tiling",
  "Fireplace Tiling",
  "Outdoor Tiling",
  "Porcelain Slab Installation",
  "Natural Stone and Marble",
  "Other",
];

function ContactUs() {
  const { hash } = useLocation();

  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!hash) return;

    const timeout = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => window.clearTimeout(timeout);
  }, [hash]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      console.log(process.env.REACT_APP_FORMSPREE_ENDPOINT);
      const response = await fetch(process.env.REACT_APP_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          projectLocation: formData.location,
          _subject: `New quote request from ${formData.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error("The form could not be submitted.");
      }

      setFormData(initialForm);
      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay" />

        <div className="contact-hero-content">
          <div className="contact-label">
            <span />
            Contact Us
            <span />
          </div>

          <h1>
            Let&apos;s Bring Your
            <br />
            <span>Vision to Life.</span>
          </h1>

          <div className="contact-title-line" />

          <p>
            Contact us to discuss your tile, stone, slab, or flooring project.
            We proudly serve homeowners and businesses across Ontario.
          </p>

          <a href="#quote" className="contact-hero-button">
            Request a Quote
            <LuSend />
          </a>
        </div>
      </section>

      <section id="contact" className="contact-info-section">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span />
            <p>Get in Touch</p>
            <span />
          </div>

          <h2>We&apos;re Ready to Discuss Your Project</h2>

          <div className="contact-info-grid">
            <a href="tel:+16471234567" className="contact-info-card">
              <LuPhone className="contact-info-icon" />
              <h3>Phone</h3>
              <strong>(365) 885-8602</strong>
              <p>Call us to discuss your project.</p>
            </a>

            <a href="mailto:info@nazconcorp.com" className="contact-info-card">
              <LuMail className="contact-info-icon" />
              <h3>Email</h3>
              <strong>nazconcorp@gmail.com</strong>
              <p>We&apos;ll respond as soon as possible.</p>
            </a>

            <div className="contact-info-card">
              <LuMapPin className="contact-info-icon" />
              <h3>Service Area</h3>
              <strong>Ontario</strong>
              <p>
                Residential and commercial projects throughout the province.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="quote-section">
        <div className="contact-container quote-layout">
          <div className="quote-intro">
            <div className="contact-label">
              Request a Quote
              <span />
            </div>

            <h2>
              Tell Us About
              <br />
              <span>Your Project.</span>
            </h2>

            <div className="contact-title-line" />

            <p>
              Share a few details about your project and we&apos;ll contact you
              to discuss the next steps.
            </p>

            <div className="quote-contact-links">
              <a href="tel:+16471234567">
                <LuPhone />

                <span>
                  <small>Call Us</small>
                  (365) 885-8602
                </span>
              </a>

              <a href="mailto:info@nazconcorp.com">
                <LuMail />

                <span>
                  <small>Email Us</small>
                  nazconcorp@gmail.com
                </span>
              </a>
            </div>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="quote-form-row">
              <div className="quote-field">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="quote-field">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="quote-form-row">
              <div className="quote-field">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="quote-field">
                <label htmlFor="location">Project Location *</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Ontario"
                  autoComplete="address-level2"
                  required
                />
              </div>
            </div>

            <div className="quote-field">
              <label htmlFor="projectType">Project Type *</label>

              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>

                {projectTypes.map((projectType) => (
                  <option value={projectType} key={projectType}>
                    {projectType}
                  </option>
                ))}
              </select>
            </div>

            <div className="quote-field">
              <label htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, preferred timeline, approximate size, and materials..."
                required
              />
            </div>

            <button
              type="submit"
              className="quote-submit-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Quote Request"}
              <LuSend />
            </button>

            {status === "success" && (
              <p className="quote-form-status success" role="status">
                Thank you! Your quote request has been sent. We&apos;ll contact
                you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="quote-form-status error" role="alert">
                Something went wrong. Please try again or contact us by phone or
                email.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
