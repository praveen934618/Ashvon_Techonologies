import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Building, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export interface EnquiryFields {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  location: string;
  role: string;
  interest: string;
  message: string;
}

type Errors = Partial<Record<keyof EnquiryFields, string>>;

const initialFields: EnquiryFields = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  location: "Telangana (Hyderabad)",
  role: "School Principal / Management",
  interest: "Division A - School AI & Robotics Education",
  message: "",
};

function validate(fields: EnquiryFields): Errors {
  const errors: Errors = {};
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

export function EnquiryForm() {
  const [fields, setFields] = useState<EnquiryFields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update(key: keyof EnquiryFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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
      <div className="card enquiry-success-card">
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
        <label className="field-group">
          <span className="field-label">Full Name *</span>
          <input
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
            <span id="name-error" className="field-error">
              <AlertCircle size={14} /> {errors.name}
            </span>
          )}
        </label>

        <label className="field-group">
          <span className="field-label">Phone Number *</span>
          <div className="input-with-icon">
            <Phone size={16} className="input-icon" />
            <input
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
            <span id="phone-error" className="field-error">
              <AlertCircle size={14} /> {errors.phone}
            </span>
          )}
        </label>
      </div>

      <div className="form-grid-2">
        <label className="field-group">
          <span className="field-label">Work / Institutional Email *</span>
          <div className="input-with-icon">
            <Mail size={16} className="input-icon" />
            <input
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
            <span id="email-error" className="field-error">
              <AlertCircle size={14} /> {errors.email}
            </span>
          )}
        </label>

        <label className="field-group">
          <span className="field-label">School / Institution Name *</span>
          <div className="input-with-icon">
            <Building size={16} className="input-icon" />
            <input
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
            <span id="org-error" className="field-error">
              <AlertCircle size={14} /> {errors.organisation}
            </span>
          )}
        </label>
      </div>

      <div className="form-grid-2">
        <label className="field-group">
          <span className="field-label">Primary Region / State</span>
          <div className="input-with-icon">
            <MapPin size={16} className="input-icon" />
            <select
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
        </label>

        <label className="field-group">
          <span className="field-label">Your Role</span>
          <select
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
        </label>
      </div>

      <label className="field-group">
        <span className="field-label">Division / Area of Interest</span>
        <select
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
      </label>

      <label className="field-group">
        <span className="field-label">Tell Us About Your Requirements *</span>
        <textarea
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
          <span id="message-error" className="field-error">
            <AlertCircle size={14} /> {errors.message}
          </span>
        )}
      </label>

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
