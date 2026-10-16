import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks } from "../content";

/**
 * Render site navigation with a collapsible mobile menu and scroll styling.
 * @returns {React.JSX.Element}
 */
export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);
  const navRef = useRef(null);

  // Close mobile menu on route change
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setOpen(false);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Escape key and body scroll lock when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        {/* Brand Left Top */}
        <Link to="/" className="brand" aria-label="Ashvon Technologies - Home" onClick={() => setOpen(false)}>
          <div className="brand-logo-wrap">
            <img
              src={`${import.meta.env.BASE_URL}ashvon-logo.png`}
              alt="Ashvon Technologies Emblem"
              className="brand-logo-img"
              width="42"
              height="38"
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
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Backdrop for mobile drawer */}
        {open && (
          <div
            className="mobile-backdrop"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Navigation panel */}
        <nav
          id="site-nav"
          ref={navRef}
          className={`nav-panel ${open ? "is-open" : ""}`}
          aria-label="Primary Navigation"
        >
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "is-current" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions">
            <Link
              to="/contact"
              className="btn btn-royal-glow nav-cta"
              onClick={() => setOpen(false)}
            >
              <span>Enquire Now</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
