import { useState, useRef, type MouseEvent } from "react";
import { Sparkles, Bot, ShieldCheck, Zap } from "lucide-react";

export function Hero3DLogo() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation between -15 and +15 degrees
    const rY = ((x - centerX) / centerX) * 14;
    const rX = -((y - centerY) / centerY) * 14;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className="hero-3d-stage"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      {/* Background ambient royal orbs */}
      <div className="hero-orb hero-orb-cyan" aria-hidden="true" />
      <div className="hero-orb hero-orb-blue" aria-hidden="true" />

      {/* 3D Perspective Card */}
      <div
        className={`hero-3d-card ${isHovered ? "is-active" : ""}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? 20 : 0}px)`,
        }}
      >
        {/* Geometric Glass Card Background */}
        <div className="hero-glass-plate">
          <div className="glass-grid-pattern" />
          <div className="glass-shimmer" />

          {/* Central 3D Logo Display */}
          <div className="logo-3d-display">
            <div className="logo-halo-glow" />
            <img
              src={`${import.meta.env.BASE_URL}ashvon-logo.png`}
              alt="Ashvon Technologies 3D Royal Logo"
              className="hero-logo-img"
              width="380"
              height="308"
              loading="eager"
            />
          </div>

          {/* 3D Floating Interactive Badges */}
          <div className="floating-badge badge-top-right">
            <div className="badge-icon-box">
              <Bot size={18} className="badge-icon" />
            </div>
            <div>
              <div className="badge-tag">School STEM Labs</div>
              <div className="badge-title">Grades 4â€“9 Robotics Kits</div>
            </div>
          </div>

          <div className="floating-badge badge-bottom-left">
            <div className="badge-icon-box pulse-icon">
              <Sparkles size={18} className="badge-icon" />
            </div>
            <div>
              <div className="badge-tag">Strategic Intelligence</div>
              <div className="badge-title">Chess Knight Concept</div>
            </div>
          </div>

          <div className="floating-badge badge-bottom-right">
            <div className="badge-icon-box">
              <Zap size={18} className="badge-icon" />
            </div>
            <div>
              <div className="badge-tag">Industry Grade</div>
              <div className="badge-title">AI & Custom IT Solutions</div>
            </div>
          </div>

          <div className="badge-top-left-status">
            <span className="live-status-dot" />
            <span>Phased Expansion â€¢ AP & TG</span>
          </div>
        </div>
      </div>

      {/* Floating Brand Promise Pill */}
      <div className="brand-promise-pill">
        <ShieldCheck size={16} className="text-cyan" />
        <span>Brand Promise: <strong>Because Every Learner Matters.</strong></span>
      </div>
    </div>
  );
}

