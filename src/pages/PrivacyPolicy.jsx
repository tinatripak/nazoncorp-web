import { Link } from "react-router-dom";

import "./PrivacyPolicy.css";

const policySections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    content: (
      <p>
        We respect your privacy and are committed to protecting the personal
        information you share with us. This Privacy Policy explains how we
        collect, use, store, and protect information obtained through our
        website and contact forms.
      </p>
    ),
  },
  {
    id: "information",
    number: "02",
    title: "Information We Collect",
    content: (
      <>
        <p>When you contact us through our website, we may collect:</p>

        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your phone number</li>
          <li>Your project type and location</li>
          <li>Information included in your message</li>
          <li>
            Technical information, such as your browser type, device, IP
            address, and pages visited
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    number: "03",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We may use your personal information to:</p>

        <ul>
          <li>Respond to your questions and project inquiries</li>
          <li>Provide estimates or service information</li>
          <li>Discuss, plan, or schedule your project</li>
          <li>Improve our website and services</li>
          <li>Maintain the security of our website</li>
          <li>Comply with applicable legal requirements</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    number: "04",
    title: "Cookies and Analytics",
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to improve its
          performance and understand how visitors use the website.
        </p>

        <p>
          Cookies are small files stored on your device. You can disable or
          restrict cookies through your browser settings. Some website features
          may not work correctly when cookies are disabled.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    number: "05",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Our website may use third-party services such as website hosting,
          analytics, maps, spam protection, or email services.
        </p>

        <p>
          These providers may process limited information according to their own
          privacy policies. We recommend reviewing the privacy policies of any
          third-party services you use through our website.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    number: "06",
    title: "Information Sharing",
    content: (
      <>
        <p>We do not sell, rent, or trade your personal information.</p>

        <p>
          We may share limited information with trusted service providers when
          necessary to operate our website, communicate with you, provide our
          services, or comply with legal obligations.
        </p>
      </>
    ),
  },
  {
    id: "security",
    number: "07",
    title: "Data Security",
    content: (
      <p>
        We use reasonable administrative and technical measures to protect your
        personal information. However, no method of transmission over the
        internet or electronic storage system can be guaranteed to be completely
        secure.
      </p>
    ),
  },
  {
    id: "retention",
    number: "08",
    title: "Data Retention",
    content: (
      <p>
        We retain personal information only for as long as reasonably necessary
        to respond to your inquiry, provide services, maintain business records,
        or meet legal requirements.
      </p>
    ),
  },
  {
    id: "rights",
    number: "09",
    title: "Your Privacy Rights",
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>

        <ul>
          <li>Request access to your personal information</li>
          <li>Correct inaccurate or incomplete information</li>
          <li>Request deletion of your information</li>
          <li>Withdraw consent where consent is the legal basis</li>
          <li>Request information about how your data is used</li>
        </ul>

        <p>
          To make a privacy request, contact us using the information below.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    number: "10",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        published on this page, together with a revised “Last updated” date.
      </p>
    ),
  },
];

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-container privacy-hero-inner">
          <nav className="privacy-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Privacy Policy</span>
          </nav>

          <span className="privacy-eyebrow">Your information matters</span>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <div className="privacy-title-line" />

          <p className="privacy-hero-description">
            This policy explains how we collect, use, and protect your personal
            information when you visit our website or contact us about a
            project.
          </p>
        </div>
      </section>

      <section className="privacy-main">
        <div className="privacy-container privacy-layout">
          <aside className="privacy-sidebar">
            <p className="privacy-sidebar-title">On this page</p>

            <nav className="privacy-navigation" aria-label="Policy sections">
              {policySections.map(({ id, title }) => (
                <a key={id} href={`#${id}`}>
                  {title}
                </a>
              ))}

              <a href="#contact">Contact Us</a>
            </nav>
          </aside>

          <div className="privacy-content">
            <p className="privacy-updated">Last updated: July 24, 2026</p>

            {policySections.map(({ id, number, title, content }) => (
              <section className="privacy-section" id={id} key={id}>
                <h2>
                  <span>{number}</span>
                  {title}
                </h2>

                <div className="privacy-section-content">{content}</div>
              </section>
            ))}

            <section
              className="privacy-section privacy-contact-section"
              id="contact"
            >
              <h2>
                <span>11</span>
                Contact Us
              </h2>

              <div className="privacy-contact-card">
                <p>
                  For questions about this Privacy Policy or your personal
                  information, contact us using the details below.
                </p>

                <div className="privacy-contact-details">
                  <p>
                    <strong>Company:</strong> NAZCONCORP
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:nazconcorp@gmail.com">
                      nazconcorp@gmail.com
                    </a>
                  </p>

                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+13658858602">+1 (365) 885-8602</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
