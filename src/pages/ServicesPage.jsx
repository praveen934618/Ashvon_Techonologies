import { Link } from "react-router-dom";
import {
  Code2,
  Cpu,
  Layers,
  Database,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Rocket,
  Server,
} from "lucide-react";
import { itServicesOfferings, itDeliveryLifecycle } from "../content";
import { BannerWatermark } from "../components/BannerWatermark";

const serviceIcons = {
  "web-applications": Code2,
  "ai-automation": Cpu,
  "ui-ux-design": Layers,
  "data-analytics": Database,
};

export function ServicesPage() {
  return (
    <div className="page-wrapper">
      {/* PAGE HERO */}
      <section className="page-hero">
        <BannerWatermark />
        <div className="container text-center">
          <div className="section-badge center-badge">
            <Code2 size={14} />
            <span>Division C: Enterprise &amp; Institutional IT</span>
          </div>
          <h1 className="page-title">IT &amp; Software Services</h1>
          <p className="page-lead">
            Delivering high-performance digital products, custom software engineering, and AI
            workflow automations for startups, educational institutions, and growing businesses.
          </p>
        </div>
      </section>

      {/* CORE SERVICE OFFERINGS GRID */}
      <section className="section section-pillars">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge center-badge">
              <Server size={14} />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="section-title">End-to-End Digital Solutions</h2>
            <p className="section-subtitle">
              Engineered with rigorous technical standards, clean architecture, and intuitive user
              experiences.
            </p>
          </div>

          <div className="pillars-grid">
            {itServicesOfferings.map((service) => {
              const IconComponent = serviceIcons[service.id] || Code2;
              return (
                <div className="card pillar-card" key={service.id}>
                  <div className="pillar-icon-wrap">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="pillar-title">{service.title}</h3>
                  <p className="pillar-desc">{service.description}</p>

                  <ul className="pillar-list">
                    {service.capabilities.map((cap, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="text-cyan shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="meta-card" style={{ marginTop: "auto", marginBottom: "1.25rem" }}>
                    <span className="meta-label">Standard Deliverable:</span>
                    <span className="meta-value" style={{ fontWeight: 650 }}>{service.deliverable}</span>
                  </div>

                  <Link to="/contact" className="pillar-link">
                    <span>Enquire About This Service</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGINEERING STANDARDS & TECH STACK */}
      <section className="section section-story-detail">
        <div className="container">
          <div className="story-split-grid">
            <div>
              <div className="section-badge">
                <ShieldCheck size={14} />
                <span>Engineering Rigor</span>
              </div>
              <h2 className="section-title">Built for Performance, Security &amp; Scale</h2>
              <p className="story-paragraph">
                Every software solution and digital platform engineered by Ashvon Technologies adheres
                to modern web standards, type-safe architectures, and rigorous quality assurance
                practices.
              </p>
              <div className="story-highlight">
                “We combine modern frontend frameworks with robust backend systems and intelligent AI
                integrations to future-proof your digital operations.”
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <CheckCircle2 size={16} className="text-cyan shrink-0" />
                  <span>Modern Tech Stack: React 19, JavaScript, Vite, Node.js &amp; Python</span>
                </li>
                <li className="feature-item">
                  <CheckCircle2 size={16} className="text-cyan shrink-0" />
                  <span>Accessibility &amp; SEO: WCAG 2.1 AA compliance &amp; optimized meta architectures</span>
                </li>
                <li className="feature-item">
                  <CheckCircle2 size={16} className="text-cyan shrink-0" />
                  <span>Security &amp; Data Privacy: OWASP-aligned secure coding &amp; robust access control</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="chess-detail-card">
                <div className="chess-card-header">
                  <img
                    src={`${import.meta.env.BASE_URL}ashvon-logo.png`}
                    alt="Ashvon Logo"
                    className="chess-card-logo"
                  />
                  <div>
                    <h3 className="chess-card-title">Technology &amp; Delivery Ecosystem</h3>
                    <span className="chess-card-subtitle">Division C Standards</span>
                  </div>
                </div>
                <p className="chess-card-body">
                  Whether building an institutional campus portal or an AI-powered automation pipeline,
                  our engineering teams maintain full transparency and code ownership for our clients.
                </p>
                <ul className="chess-card-points">
                  <li>
                    <CheckCircle2 size={16} className="text-cyan shrink-0" />
                    <span>Iterative agile development sprints with regular milestones</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-cyan shrink-0" />
                    <span>Complete documentation and developer handover</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-cyan shrink-0" />
                    <span>Post-launch maintenance and technical support packages</span>
                  </li>
                </ul>
                <div className="brand-promise-block">
                  <span>Commitment</span>
                  <strong>Dependable Delivery &amp; Quality</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-STAGE IT DELIVERY PROCESS */}
      <section className="section section-blueprint">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge center-badge">
              <Rocket size={14} />
              <span>Execution Process</span>
            </div>
            <h2 className="section-title">The IT Delivery Lifecycle</h2>
            <p className="section-subtitle">
              A clear, collaborative 5-stage roadmap from initial discovery to successful production launch.
            </p>
          </div>

          <div className="steps-container">
            <div className="steps-progress-line" aria-hidden="true" />
            <div className="steps-grid">
              {itDeliveryLifecycle.map((step) => (
                <div className="step-card" key={step.step}>
                  <div className="step-number-circle">{step.step}</div>
                  <h3 className="step-card-title">{step.title}</h3>
                  <p className="step-card-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="section section-cta-banner">
        <div className="container">
          <div className="cta-banner-card">
            <div>
              <h3 className="cta-banner-title">Ready to Launch Your Next Digital Project?</h3>
              <p className="cta-banner-desc">
                Consult with Ashvon's IT engineering team for web development, custom software, or AI
                automations.
              </p>
            </div>
            <Link to="/contact" className="btn btn-royal-glow cta-banner-btn">
              <span>Request IT Consultation</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
