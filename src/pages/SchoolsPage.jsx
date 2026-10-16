import { Link } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Rocket,
  Users,
} from "lucide-react";
import { audiences, implementationSteps } from "../content";
import { BannerWatermark } from "../components/BannerWatermark";

const audienceIcons = {
  "school-education": GraduationCap,
  "higher-education": BookOpen,
  "business-institutions": Building2,
};

export function SchoolsPage() {
  return (
    <div className="page-wrapper">
      {/* PAGE HERO */}
      <section className="page-hero">
        <BannerWatermark />
        <div className="container text-center">
          <div className="section-badge center-badge">
            <GraduationCap size={14} />
            <span>Turnkey Institutional Labs</span>
          </div>
          <h1 className="page-title">School &amp; Higher Education Labs</h1>
          <p className="page-lead">
            Physical robotics hardware kits, sequential NEP-aligned curriculum, and dedicated
            trained faculty deployed directly into your classrooms.
          </p>
        </div>
      </section>

      {/* WHY SCHOOLS CHOOSE ASHVON */}
      <section className="section section-why-schools">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge center-badge">
              <ShieldCheck size={14} />
              <span>Zero Operational Friction</span>
            </div>
            <h2 className="section-title">Solving the Core Classroom Challenges</h2>
            <p className="section-subtitle">
              Many schools struggle with expensive hardware purchases and finding qualified tech
              teachers. Ashvon provides the complete end-to-end framework.
            </p>
          </div>

          <div className="school-highlight-banner">
            <div className="banner-icon-side">
              <ShieldCheck size={32} className="text-cyan" />
            </div>
            <div className="banner-text-side">
              <h4>Zero Capex Burden for Private &amp; Mid-Tier Schools</h4>
              <p>
                We coordinate curriculum kits, hardware components, faculty onboarding, and
                classroom resources so your school can offer a state-of-the-art Robotics and AI
                Lab without heavy capital investments.
              </p>
            </div>
            <div className="banner-action-side">
              <Link to="/contact" className="btn btn-royal-glow">
                <span>Book a School Demo</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5-STAGE IMPLEMENTATION BLUEPRINT */}
      <section className="section section-blueprint">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge center-badge">
              <Rocket size={14} />
              <span>The 5-Stage Blueprint</span>
            </div>
            <h2 className="section-title">How We Put Programs in Place</h2>
            <p className="section-subtitle">
              A structured implementation sequence designed with your school timetable, age
              groups, and academic calendar in mind.
            </p>
          </div>

          <div className="steps-container">
            <div className="steps-progress-line" aria-hidden="true" />
            <div className="steps-grid">
              {implementationSteps.map((step) => (
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

      {/* TARGET AUDIENCES (WHO WE SERVE) */}
      <section className="section section-audiences-detail">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-badge center-badge">
              <Users size={14} />
              <span>Customized Programs</span>
            </div>
            <h2 className="section-title">Target Audience Scope</h2>
            <p className="section-subtitle">
              Detailed breakdown for schools, engineering colleges, and institutional partners.
            </p>
          </div>

          <div className="audience-grid">
            {audiences.map((group) => {
              const IconComp = audienceIcons[group.id] || GraduationCap;
              return (
                <div className="card audience-card" key={group.id}>
                  <div className="audience-card-top">
                    <div className="audience-icon-box">
                      <IconComp size={22} />
                    </div>
                    <span className="audience-tag">{group.subtitle}</span>
                  </div>

                  <h3 className="audience-card-title">{group.title}</h3>
                  <p className="audience-card-desc">{group.description}</p>

                  <div className="audience-points-wrap">
                    <h4 className="points-title">Key Beneficiaries &amp; Scope:</h4>
                    <ul className="audience-points-list">
                      {group.points.map((pt, i) => (
                        <li key={i}>
                          <CheckCircle2 size={15} className="text-cyan shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="audience-card-bottom">
                    <Link to="/contact" className="btn btn-royal-outline btn-full">
                      <span>{group.ctaText}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
