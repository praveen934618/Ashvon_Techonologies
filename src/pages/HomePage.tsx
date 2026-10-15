import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Bot,
  Cpu,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { Hero3DLogo } from "../components/Hero3DLogo";
import { BannerWatermark } from "../components/BannerWatermark";

export function HomePage() {
  return (
    <div className="page-wrapper">
      {/* HERO SECTION */}
      <section className="hero-section" aria-labelledby="hero-title">
        <BannerWatermark />
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow-badge">
              <span className="badge-pulse" />
              <span className="badge-text">ASHVON TECHNOLOGIES PVT LTD</span>
            </div>

            <h1 id="hero-title" className="hero-heading">
              Bridging Practical Technology Education &amp;{" "}
              <span className="gradient-royal-text">Industry-Standard IT</span>
            </h1>

            <p className="hero-lead">
              Democratizing hands-on AI, robotics, and STEM kits for schools, empowering
              engineering students with emerging tech, and engineering custom software solutions.
            </p>

            <div className="hero-cta-group">
              <Link to="/schools" className="btn btn-royal-glow">
                <Sparkles size={16} />
                <span>Explore School AI Labs</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/divisions" className="btn btn-royal-outline">
                <span>View All 5 Divisions</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-metrics-bar">
              <div className="metric-item">
                <div className="metric-number">5</div>
                <div className="metric-label">Specialized Divisions</div>
              </div>
              <div className="metric-divider" />
              <div className="metric-item">
                <div className="metric-number">Grades 4–9</div>
                <div className="metric-label">School STEM Labs</div>
              </div>
              <div className="metric-divider" />
              <div className="metric-item">
                <div className="metric-number">Phase 1</div>
                <div className="metric-label">AP &amp; Telangana Corridor</div>
              </div>
            </div>
          </div>

          {/* HERO 3D LOGO (Right Side) */}
          <div className="hero-visual-col">
            <Hero3DLogo />
          </div>
        </div>
      </section>

      {/* 3 CORE PILLARS OVERVIEW */}
      <section className="section section-pillars">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge center-badge">
              <Layers size={14} />
              <span>Core Ecosystem</span>
            </div>
            <h2 className="section-title">Three Integrated Ecosystem Pillars</h2>
            <p className="section-subtitle">
              Engineered to make practical learning accessible and technology solutions scalable.
            </p>
          </div>

          <div className="pillars-grid">
            {/* Pillar 1 */}
            <div className="card pillar-card">
              <div className="pillar-icon-wrap">
                <Bot size={24} />
              </div>
              <span className="pillar-tag">School Education</span>
              <h3 className="pillar-title">Offline AI &amp; Robotics Labs</h3>
              <p className="pillar-desc">
                Physical robotics kits, structured curriculum, and deployed trained faculty inside
                school classrooms for Grades 4 through 9.
              </p>
              <ul className="pillar-list">
                <li><CheckCircle2 size={16} className="text-cyan" /> Hands-on kit building</li>
                <li><CheckCircle2 size={16} className="text-cyan" /> Faculty on campus</li>
                <li><CheckCircle2 size={16} className="text-cyan" /> Zero capital burden</li>
              </ul>
              <Link to="/schools" className="pillar-link">
                <span>Learn about School Labs</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="card pillar-card">
              <div className="pillar-icon-wrap">
                <Cpu size={24} />
              </div>
              <span className="pillar-tag">Higher Education</span>
              <h3 className="pillar-title">College Emerging Tech Bootcamps</h3>
              <p className="pillar-desc">
                Intensive Python, Machine Learning, Embedded Systems, and IoT training designed to
                bridge the gap between textbooks and engineering industry demands.
              </p>
              <ul className="pillar-list">
                <li><CheckCircle2 size={16} className="text-cyan" /> B.Tech &amp; Degree focus</li>
                <li><CheckCircle2 size={16} className="text-cyan" /> Portfolio capstones</li>
                <li><CheckCircle2 size={16} className="text-cyan" /> Faculty Development (FDP)</li>
              </ul>
              <Link to="/divisions" className="pillar-link">
                <span>Explore Tech Bootcamps</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="card pillar-card">
              <div className="pillar-icon-wrap">
                <Code2 size={24} />
              </div>
              <span className="pillar-tag">Enterprise &amp; Startups</span>
              <h3 className="pillar-title">Custom Software &amp; AI Automations</h3>
              <p className="pillar-desc">
                Full-stack web application development, custom software engineering, intuitive
                UI/UX, and generative AI workflow automation for modern organizations.
              </p>
              <ul className="pillar-list">
                <li><CheckCircle2 size={16} className="text-cyan" /> Modern Web Applications</li>
                <li><CheckCircle2 size={16} className="text-cyan" /> Workflow AI Integration</li>
                <li><CheckCircle2 size={16} className="text-cyan" /> Technology Consulting</li>
              </ul>
              <Link to="/divisions" className="pillar-link">
                <span>View IT Services</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC CHESS KNIGHT TEASER */}
      <section className="section section-story-preview">
        <div className="container">
          <div className="story-preview-box">
            <div className="story-preview-text">
              <span className="preview-badge">The Ashvon Philosophy</span>
              <h2 className="preview-title">Strategic Thinking • Innovation • Growth</h2>
              <p className="preview-lead">
                Inspired by the Chess Knight, Ashvon equips learners and organizations with the
                critical ability to overcome obstacles, leap over conventional barriers, and master
                future technology with strategic foresight.
              </p>
              <div className="preview-actions">
                <Link to="/about" className="btn btn-royal-pill">
                  <span>Read Company Story &amp; Vision</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="story-preview-visual">
              <div className="preview-logo-plate">
                <img
                  src="/ashvon-logo.png"
                  alt="Ashvon 3D Emblem"
                  className="preview-emblem-img"
                  width="180"
                  height="160"
                />
                <div className="preview-promise">
                  <ShieldCheck size={16} className="text-cyan" />
                  <span>“Because Every Learner Matters.”</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE ACTION BANNER */}
      <section className="section section-cta-banner">
        <div className="container">
          <div className="cta-banner-card">
            <div>
              <h3 className="cta-banner-title">Ready to Transform Your Campus or Business?</h3>
              <p className="cta-banner-desc">
                Partner with Ashvon Technologies for school robotics labs, college workshops, or
                tailored software development.
              </p>
            </div>
            <Link to="/contact" className="btn btn-royal-glow cta-banner-btn">
              <span>Start an Enquiry</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
