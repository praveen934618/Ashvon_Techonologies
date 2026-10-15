import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  Cpu,
  Code2,
  Boxes,
  Users,
  CheckCircle2,
  ArrowRight,
  Layers,
} from "lucide-react";
import { divisions } from "../content";
import { BannerWatermark } from "../components/BannerWatermark";

const divisionIcons = {
  "division-a": Bot,
  "division-b": Cpu,
  "division-c": Code2,
  "division-d": Boxes,
  "division-e": Users,
};

export function DivisionsPage() {
  const [selectedId, setSelectedId] = useState(divisions[0].id);
  const activeDiv = divisions.find((d) => d.id === selectedId) || divisions[0];

  return (
    <div className="page-wrapper">
      {/* PAGE HEADER */}
      <section className="page-hero">
        <BannerWatermark />
        <div className="container text-center">
          <div className="section-badge center-badge">
            <Layers size={14} />
            <span>Structured Capabilities</span>
          </div>
          <h1 className="page-title">5 Specialized Divisions</h1>
          <p className="page-lead">
            Select any division below to view comprehensive curriculum, deliverables, and institutional scope.
          </p>
        </div>
      </section>

      {/* TOP DIVISION SELECTOR CARDS (MOVED UP, STRIP REMOVED) */}
      <section className="section section-divisions-showcase">
        <div className="container">
          {/* Top 5 Division Selector Cards */}
          <div className="divisions-top-selector-grid" role="tablist" aria-label="Select Division">
            {divisions.map((div) => {
              const IconComp = divisionIcons[div.id as keyof typeof divisionIcons] || Bot;
              const isSelected = div.id === selectedId;
              return (
                <div
                  key={div.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isSelected}
                  className={`division-selector-card ${isSelected ? "is-selected" : ""}`}
                  onClick={() => setSelectedId(div.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedId(div.id);
                    }
                  }}
                >
                  <div className="selector-icon-wrap">
                    <IconComp size={20} />
                  </div>
                  <span className="selector-badge">{div.badge}</span>
                  <h3 className="selector-title">{div.title}</h3>
                  <p className="selector-tagline">{div.tagline}</p>
                  <div className="selector-indicator">
                    {isSelected ? (
                      <span className="active-tag">Active Selection</span>
                    ) : (
                      <span className="click-tag">Click to View Details →</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ACTIVE DIVISION DETAILED PANEL (CHANGES BASED ON CLICKED TOP CARD) */}
          <div className="division-panel-card" key={activeDiv.id}>
            <div className="division-panel-header">
              <span className="division-badge-pill">{activeDiv.badge}</span>
              <h2 className="division-title">{activeDiv.title}</h2>
              <p className="division-tagline">{activeDiv.tagline}</p>
            </div>

            <p className="division-description">{activeDiv.description}</p>

            <div className="division-body-grid">
              <div className="division-features-col">
                <h3 className="features-heading">Curriculum, Offerings &amp; Focus</h3>
                <ul className="features-list">
                  {activeDiv.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <CheckCircle2 size={16} className="text-royal-blue shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="division-meta-col">
                <div className="meta-card">
                  <span className="meta-label">Target Audience</span>
                  <strong className="meta-value">{activeDiv.audience}</strong>
                </div>

                <div className="meta-card">
                  <span className="meta-label">Deliverables &amp; Outcomes</span>
                  <strong className="meta-value">{activeDiv.deliverable}</strong>
                </div>

                <div className="meta-cta-card">
                  <p>Ready to deploy {activeDiv.badge}?</p>
                  <Link to="/contact" className="btn btn-royal-glow btn-full">
                    <span>Enquire for {activeDiv.badge}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section section-cta-banner">
        <div className="container">
          <div className="cta-banner-card">
            <div>
              <h3 className="cta-banner-title">Need a Custom Educational or IT Package?</h3>
              <p className="cta-banner-desc">
                We design bundled solutions combining robotics lab hardware, teacher recruitment,
                and digital portals.
              </p>
            </div>
            <Link to="/contact" className="btn btn-royal-glow cta-banner-btn">
              <span>Request Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
