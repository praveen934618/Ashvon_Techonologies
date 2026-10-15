import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Compass,
  TrendingUp,
  Lightbulb,
  Unlock,
  Wrench,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Target,
} from "lucide-react";
import { coreValues, geographicRoadmap } from "../content";
import { BannerWatermark } from "../components/BannerWatermark";

const valueIcons = {
  Innovation: Lightbulb,
  Accessibility: Unlock,
  Integrity: ShieldCheck,
  "Practical Learning": Wrench,
  Collaboration: Handshake,
  "Growth & Impact": TrendingUp,
};

export function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* PAGE HEADER */}
      <section className="page-hero">
        <BannerWatermark />
        <div className="container text-center">
          <div className="section-badge center-badge">
            <Target size={14} />
            <span>Company Profile &amp; Mission</span>
          </div>
          <h1 className="page-title">The Story Behind Ashvon</h1>
          <p className="page-lead">
            Democratizing hands-on technology education and empowering the next generation of
            strategic innovators across India.
          </p>
        </div>
      </section>

      {/* STORY & GENESIS */}
      <section className="section section-story-detail">
        <div className="container">
          <div className="story-split-grid">
            <div className="story-text-col">
              <span className="sub-badge">Our Genesis</span>
              <h2 className="section-title">Bridging the Practical Learning Gap</h2>
              <p className="story-paragraph">
                Ashvon Technologies was established with a vision to make practical technology
                education accessible and help bridge the gap between traditional learning and the
                rapidly evolving world of AI, robotics, and technology.
              </p>
              <p className="story-paragraph">
                Many schools face challenges in providing hands-on technology education due to high
                equipment costs, limited access to trained faculty, and a lack of practical
                learning opportunities.
              </p>
              <div className="story-highlight">
                Ashvon directly addresses this gap by coordinating <strong>robotics hardware kits</strong>,{" "}
                <strong>structured sequential curriculum</strong>, <strong>trained faculty deployment</strong>, and{" "}
                <strong>hands-on learning programs directly inside schools</strong>.
              </div>
              <p className="story-paragraph">
                Beyond school education, Ashvon provides advanced emerging-tech bootcamps for college
                students and software &amp; AI solutions for growing businesses and institutions.
              </p>
            </div>

            {/* Chess Knight Philosophy Card */}
            <div className="chess-detail-card">
              <div className="chess-card-header">
                <img
                  src={`${import.meta.env.BASE_URL}ashvon-logo.png`}
                  alt="Ashvon 3D Emblem"
                  className="chess-card-logo"
                  width="70"
                  height="62"
                />
                <div>
                  <h3 className="chess-card-title">Strategic Thinking</h3>
                  <span className="chess-card-subtitle">The Chess Knight Concept</span>
                </div>
              </div>

              <p className="chess-card-body">
                The modern geometric <strong>“A”</strong> symbol represents technology,
                intelligence, and upward progress. Centered within it is the{" "}
                <strong>Chess Knight</strong>, symbolizing:
              </p>

              <ul className="chess-card-points">
                <li>
                  <CheckCircle2 size={16} className="text-cyan shrink-0" />
                  <span>
                    <strong>Intellectual Agility:</strong> Moving beyond simple memorization into
                    deep algorithmic problem-solving.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-cyan shrink-0" />
                  <span>
                    <strong>Leaping Over Obstacles:</strong> Navigating budget, hardware, and
                    pedagogy barriers for mid-tier schools.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-cyan shrink-0" />
                  <span>
                    <strong>Tactical Leadership:</strong> Inspiring learners to build, innovate, and
                    lead in an automated global economy.
                  </span>
                </li>
              </ul>

              <div className="brand-promise-block">
                <span>Our Brand Promise</span>
                <strong>“Because Every Learner Matters.”</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section section-mv">
        <div className="container">
          <div className="mv-grid">
            <div className="card mv-card">
              <div className="mv-icon-wrap">
                <Compass size={22} />
              </div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-text">
                To make practical technology education accessible and equip learners and
                organizations with the skills and solutions needed to succeed in a technology-driven
                world.
              </p>
            </div>

            <div className="card mv-card">
              <div className="mv-icon-wrap">
                <TrendingUp size={22} />
              </div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-text">
                To build a trusted, nationwide education and technology network that empowers
                millions of learners with future-ready skills and promotes continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section section-values">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge center-badge">
              <ShieldCheck size={14} />
              <span>Foundational Pillars</span>
            </div>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The 6 core values that guide our curriculum, partner schools, and institutional delivery.
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((val) => {
              const IconComp = valueIcons[val.title as keyof typeof valueIcons] || Lightbulb;
              return (
                <div className="card value-card" key={val.title}>
                  <div className="value-icon-box">
                    <IconComp size={22} />
                  </div>
                  <h3 className="value-card-title">{val.title}</h3>
                  <p className="value-card-desc">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GEOGRAPHIC ROADMAP */}
      <section className="section section-roadmap">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge center-badge">
              <Compass size={14} />
              <span>Expansion Timeline</span>
            </div>
            <h2 className="section-title">Geographic Footprint &amp; Growth</h2>
            <p className="section-subtitle">
              Beginning with deep roots in Andhra Pradesh and Telangana, expanding systematically
              into southern educational corridors and pan-India scale.
            </p>
          </div>

          <div className="roadmap-grid">
            {geographicRoadmap.map((item, idx) => (
              <div className={`card roadmap-card phase-${idx + 1}`} key={item.phase}>
                <div className="roadmap-phase-header">
                  <span className="phase-pill">{item.phase}</span>
                  <span className="status-badge">
                    <span className="status-ping" />
                    {item.status}
                  </span>
                </div>
                <h3 className="roadmap-region">{item.region}</h3>
                <div className="roadmap-highlight-text">{item.highlight}</div>
                <p className="roadmap-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "2.5rem" }}>
            <Link to="/contact" className="btn btn-royal-glow">
              <span>Partner with Ashvon in Your City</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

