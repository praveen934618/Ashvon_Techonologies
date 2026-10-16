import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Building, Mail, Phone, MapPin, Sparkles } from "lucide-react";

const initialFields = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  location: "Telangana (Hyderabad)",
  role: "School Principal / Management",
  interest: "Division A - School AI & Robotics Education",
  message: "",
};

/**
 * Check required enquiry fields and return error messages keyed by field name.
 * @param {Object<string, string>} fields - Current enquiry field values.
 * @returns {Object<string, string>} Validation errors, or an empty object if valid.
 */
function validate(fields) {
  const errors = {};
  if (fields.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!fields.email.trim().includes("@") || !fields.email.trim().includes(".")) {
    errors.email = "Please enter a valid email address.";
  }
  if (fields.phone.trim().length < 10) {
    errors.phone = "Please enter a valid 10-digit contact number.";
  }
  if (fields.organisation.trim().length < 2) {
    errors.organisation = "Please enter your school, college, or organization name.";
  }
  if (fields.message.trim().length < 10) {
    errors.message = "Please include a brief note regarding your student count or requirements.";
  }
  return errors;
}

/**
 * Render an enquiry form with field validation and a simulated submission flow.
 * @returns {React.JSX.Element}
 */
export function EnquiryForm() {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /**
   * Update a field value and clear its existing validation error.
   * @param {string} key - Name of the enquiry field to update.
   * @param {string} value - New field value.
   * @returns {void}
   */
  function update(key, value) {
    setFields((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  }

  /**
   * Prevent native submission, validate fields, and simulate a successful response.
   * @param {import("react").FormEvent<HTMLFormElement>} event - Form submission event.
   * @returns {void}
   */
  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="card enquiry-success-card" role="region" aria-live="polite">
        <div className="success-icon-wrap">
          <CheckCircle2 size={48} className="text-royal-blue" />
        </div>
        <h3>Enquiry Successfully Received!</h3>
        <p className="success-msg">
          Thank you, <strong>{fields.name}</strong>. Our academic and technical coordination team for{" "}
          <strong>{fields.location}</strong> will review your request for{" "}
          <strong>{fields.organisation}</strong> and reach out to you within 24 business hours.
        </p>
        <div className="submitted-summary">
          <div>
            <span>Selected Program:</span>
            <strong>{fields.interest}</strong>
          </div>
          <div>
            <span>Contact Details:</span>
            <strong>{fields.phone} • {fields.email}</strong>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setFields(initialFields);
            setSubmitted(false);
          }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="card form enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-header-badge">
        <Sparkles size={16} />
        <span>Priority Coordination Response</span>
      </div>

      <div className="form-grid-2">
        <div className="field-group">
          <label htmlFor="enquiry-name" className="field-label">
            Full Name *
          </label>
          <input
            id="enquiry-name"
            type="text"
            name="name"
            placeholder="e.g. Dr. Ramesh Kumar"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && (
            <span id="name-error" className="field-error" role="alert">
              <AlertCircle size={14} /> {errors.name}
            </span>
          )}
        </div>

        <div className="field-group">
          <label htmlFor="enquiry-phone" className="field-label">
            Phone Number *
          </label>
          <div className="input-with-icon">
            <Phone size={16} className="input-icon" aria-hidden="true" />
            <input
              id="enquiry-phone"
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              autoComplete="tel"
              value={fields.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={errors.phone ? "input-error" : ""}
            />
          </div>
          {errors.phone && (
            <span id="phone-error" className="field-error" role="alert">
              <AlertCircle size={14} /> {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="form-grid-2">
        <div className="field-group">
          <label htmlFor="enquiry-email" className="field-label">
            Work / Institutional Email *
          </label>
          <div className="input-with-icon">
            <Mail size={16} className="input-icon" aria-hidden="true" />
            <input
              id="enquiry-email"
              type="email"
              name="email"
              placeholder="principal@yourschool.edu.in"
              autoComplete="email"
              value={fields.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={errors.email ? "input-error" : ""}
            />
          </div>
          {errors.email && (
            <span id="email-error" className="field-error" role="alert">
              <AlertCircle size={14} /> {errors.email}
            </span>
          )}
        </div>

        <div className="field-group">
          <label htmlFor="enquiry-org" className="field-label">
            School / Institution Name *
          </label>
          <div className="input-with-icon">
            <Building size={16} className="input-icon" aria-hidden="true" />
            <input
              id="enquiry-org"
              type="text"
              name="organisation"
              placeholder="e.g. Hyderabad Public School"
              autoComplete="organization"
              value={fields.organisation}
              onChange={(e) => update("organisation", e.target.value)}
              aria-invalid={Boolean(errors.organisation)}
              aria-describedby={errors.organisation ? "org-error" : undefined}
              className={errors.organisation ? "input-error" : ""}
            />
          </div>
          {errors.organisation && (
            <span id="org-error" className="field-error" role="alert">
              <AlertCircle size={14} /> {errors.organisation}
            </span>
          )}
        </div>
      </div>

      <div className="form-grid-2">
        <div className="field-group">
          <label htmlFor="enquiry-location" className="field-label">
            Primary Region / State
          </label>
          <div className="input-with-icon">
            <MapPin size={16} className="input-icon" aria-hidden="true" />
            <select
              id="enquiry-location"
              name="location"
              value={fields.location}
              onChange={(e) => update("location", e.target.value)}
            >
              <option value="Telangana (Hyderabad & Districts)">Telangana (Hyderabad & Districts)</option>
              <option value="Andhra Pradesh (Amaravati, Vizag, Vijayawada)">Andhra Pradesh (Amaravati, Vizag, Vijayawada)</option>
              <option value="Karnataka (Bengaluru & Hubs)">Karnataka (Bengaluru & Hubs)</option>
              <option value="Tamil Nadu (Chennai & Hubs)">Tamil Nadu (Chennai & Hubs)</option>
              <option value="Other Pan-India Location">Other Pan-India Location</option>
            </select>
          </div>
        </div>

        <div className="field-group">
          <label htmlFor="enquiry-role" className="field-label">
            Your Role
          </label>
          <select
            id="enquiry-role"
            name="role"
            value={fields.role}
            onChange={(e) => update("role", e.target.value)}
          >
            <option value="School Owner / Trustee">School Owner / Trustee</option>
            <option value="School Principal / Academic Director">School Principal / Academic Director</option>
            <option value="STEM / Computer Science Coordinator">STEM / Computer Science Coordinator</option>
            <option value="College HOD / Dean / Placement Officer">College HOD / Dean / Placement Officer</option>
            <option value="College Engineering Student">College Engineering Student</option>
            <option value="Business Executive / Startup Founder">Business Executive / Startup Founder</option>
            <option value="Other Partner / Investor">Other Partner / Investor</option>
          </select>
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="enquiry-interest" className="field-label">
          Division / Area of Interest
        </label>
        <select
          id="enquiry-interest"
          name="interest"
          value={fields.interest}
          onChange={(e) => update("interest", e.target.value)}
        >
          <option value="Division A - School AI & Robotics Education (Grades 4-9)">
            Division A – School AI & Robotics Education (Grades 4–9 Classroom Lab)
          </option>
          <option value="Division B - AI & Technology Training (Colleges & B.Tech)">
            Division B – AI & Technology Training (Colleges & Engineering Bootcamps)
          </option>
          <option value="Division C - IT & Software Services (Web, AI Automations)">
            Division C – IT & Software Services (Custom Web Apps, AI & Consulting)
          </option>
          <option value="Division D - Robotics Kits & Lab Infrastructure Procurement">
            Division D – Robotics Kits & Learning Infrastructure Procurement
          </option>
          <option value="Division E - Faculty Network & Hackathon Collaboration">
            Division E – Faculty Network, School Hackathons & Innovation Contests
          </option>
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="enquiry-message" className="field-label">
          Tell Us About Your Requirements *
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={3}
          placeholder="Please share your estimated student strength, target grades, existing lab setup, or specific software objectives..."
          value={fields.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={errors.message ? "input-error" : ""}
        />
        {errors.message && (
          <span id="message-error" className="field-error" role="alert">
            <AlertCircle size={14} /> {errors.message}
          </span>
        )}
      </div>

      <button className="btn btn-royal-glow btn-submit" type="submit" disabled={submitting}>
        {submitting ? (
          <span>Transmitting Enquiry...</span>
        ) : (
          <>
            <Send size={18} />
            <span>Submit Institutional Enquiry</span>
          </>
        )}
      </button>

      <p className="privacy-microcopy">
        🔒 We respect your institutional data. Information submitted is strictly used for educational coordination by Ashvon Technologies.
      </p>
    </form>
  );
}
