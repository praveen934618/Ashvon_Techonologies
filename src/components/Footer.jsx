import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top-grid">
        <div className="footer-brand-col">
          <div className="footer-brand-header">
            <img
              src={`${import.meta.env.BASE_URL}ashvon-logo.png`}
              alt="Ashvon Technologies Emblem"
              className="footer-logo-img"
              width="44"
              height="38"
            />
            <div>
              <span className="footer-company-name">ASHVON TECHNOLOGIES</span>
              <span className="footer-tagline">Learn • Build • Lead</span>
            </div>
          </div>
          <p className="footer-mission-snippet">
            Bridging practical technology education and industry-standard IT solutions. Empowering
            schools, colleges, and enterprises with hands-on robotics, AI training, and custom
            software engineering.
          </p>
          <div className="footer-promise-tag">
            Brand Promise: <em>Because Every Learner Matters.</em>
          </div>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Pages &amp; Explore</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/">Home Overview</Link>
            </li>
            <li>
              <Link to="/about">About &amp; Story</Link>
            </li>
            <li>
              <Link to="/divisions">5 Specialized Divisions</Link>
            </li>
            <li>
              <Link to="/services">IT &amp; Software Services</Link>
            </li>
            <li>
              <Link to="/schools">School &amp; College Labs</Link>
            </li>
            <li>
              <Link to="/contact">Contact &amp; Enquiry</Link>
            </li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">5 Key Divisions</h4>
          <ul className="footer-links-list">
            <li>
              <Link to="/divisions#div-a">Division A: School AI &amp; Robotics</Link>
            </li>
            <li>
              <Link to="/divisions#div-b">Division B: AI &amp; Tech Training</Link>
            </li>
            <li>
              <Link to="/divisions#div-c">Division C: IT &amp; Software Services</Link>
            </li>
            <li>
              <Link to="/divisions#div-d">Division D: Robotics Kits &amp; Labs</Link>
            </li>
            <li>
              <Link to="/divisions#div-e">Division E: Faculty Network &amp; Contests</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact-col">
          <h4 className="footer-col-title">Regional Footprint</h4>
          <p className="footer-presence-text">
            <strong>Phase 1:</strong> Andhra Pradesh &amp; Telangana
            <br />
            <strong>Phase 2:</strong> Karnataka &amp; Tamil Nadu
            <br />
            <strong>Vision:</strong> Pan-India Network
          </p>
          <Link to="/contact" className="btn btn-royal-pill footer-cta-btn">
            <span>Institutional Enquiry</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © {currentYear} ASHVON TECHNOLOGIES PVT LTD. All rights reserved.
          </p>
          <div className="footer-sub-links">
            <span>Strategic Thinking • Innovation • Practical Learning</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
