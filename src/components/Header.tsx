import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "../content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        {/* Brand Left Top */}
        <Link to="/" className="brand" aria-label="Ashvon Technologies - Home">
          <div className="brand-logo-wrap">
            <img
              src={`${import.meta.env.BASE_URL}ashvon-logo.png`}
              alt="Ashvon Technologies 3D Logo"
              className="brand-logo-img"
              width="40"
              height="36"
              loading="eager"
            />
            <div className="logo-glow" aria-hidden="true" />
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <span className="brand-name">ASHVON</span>
              <span className="brand-pill">Pvt Ltd</span>
            </div>
            <span className="brand-tagline">Learn • Build • Lead</span>
          </div>
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Navigation panel */}
        <nav
          id="site-nav"
          className={`nav-panel ${open ? "is-open" : ""}`}
          aria-label="Primary Navigation"
        >
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "is-current" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-royal-glow nav-cta">
              <span>Enquire Now</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

