import { Sparkles, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import { EnquiryForm } from "../components/EnquiryForm";
import { faqs } from "../content";
import { BannerWatermark } from "../components/BannerWatermark";

export function ContactPage() {
  return (
    <div className="page-wrapper">
      {/* PAGE HERO */}
      <section className="page-hero">
        <BannerWatermark />
        <div className="container text-center">
          <div className="section-badge center-badge">
            <Sparkles size={14} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h1 className="page-title">Institutional Consultation</h1>
          <p className="page-lead">
            Connect directly with Ashvon Technologies to schedule an on-campus demonstration,
            inquire about robotics labs, or discuss enterprise IT solutions.
          </p>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="section section-enquiry">
        <div className="container enquiry-layout">
          <div className="enquiry-intro">
            <span className="sub-badge">Direct Access</span>
            <h2 className="enquiry-main-title">
              Bring Practical AI &amp; Robotics to Your Campus
            </h2>
            <p className="enquiry-lead">
              Fill out the priority enquiry form. Our academic and technical coordination team will
              review your student batch or requirements and schedule a tailored walkthrough.
            </p>

            <div className="contact-perks-list">
              <div className="perk-item">
                <CheckCircle2 size={18} className="text-royal-blue shrink-0" />
                <div>
                  <strong>Curriculum Assessment:</strong> Complimentary review of grade bands,
                  lab setup, and school timetable.
                </div>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={18} className="text-royal-blue shrink-0" />
                <div>
                  <strong>Hardware Demonstrations:</strong> Hands-on presentation of educational
                  robotics kits and student capstone projects.
                </div>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={18} className="text-royal-blue shrink-0" />
                <div>
                  <strong>Fast Coordination:</strong> Priority response for Andhra Pradesh,
                  Telangana, Karnataka, and Tamil Nadu institutions.
                </div>
              </div>
            </div>

            <div className="enquiry-direct-info">
              <div className="direct-info-card">
                <div className="info-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="info-label">Active Corridors</span>
                  <span className="info-value">Hyderabad, Vijayawada, Visakhapatnam &amp; Bengaluru</span>
                </div>
              </div>
              <div className="direct-info-card">
                <div className="info-icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <span className="info-label">Corporate Entity</span>
                  <span className="info-value">ASHVON TECHNOLOGIES PVT LTD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="enquiry-form-container">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section section-faq">
        <div className="container faq-container">
          <div className="section-header text-center">
            <div className="section-badge center-badge">
              <Sparkles size={14} />
              <span>Clarity &amp; Answers</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common inquiries regarding school lab implementation, college training, and IT offerings.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((item, idx) => (
              <details className="faq-item card" key={idx} open={idx === 0}>
                <summary className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-arrow" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
