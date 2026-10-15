export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/divisions", label: "Divisions" },
  { href: "/schools", label: "School Labs" },
  { href: "/contact", label: "Contact" },
];

export interface Division {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  audience: string;
  deliverable: string;
}

export const divisions: Division[] = [
  {
    id: "division-a",
    badge: "Division A",
    title: "School AI & Robotics Education",
    tagline: "Hands-on STEM & Robotics inside school classrooms",
    description:
      "Transforming school classrooms into high-energy technology innovation labs. We combine physical robotics kits, sequential curriculum, and deployed faculty to impart practical AI literacy, coding, and problem-solving.",
    iconName: "Bot",
    features: [
      "Offline AI & practical robotics classroom sessions",
      "Hands-on robotics hardware kits & engineering builds",
      "Computational thinking, coding & problem-solving sequence",
      "Structured curriculum aligned to grade levels & outcome assessments",
      "Dedicated trained faculty deployment to the school campus",
      "Inter-school robotics challenges, hackathons & innovation showcases",
    ],
    audience: "Grades 4–9 | Private & Mid-tier Schools",
    deliverable: "Complete Lab Setup + Kits + Trained Faculty + Assessments",
  },
  {
    id: "division-b",
    badge: "Division B",
    title: "AI & Technology Training",
    tagline: "Advanced emerging tech for colleges & young engineers",
    description:
      "Empowering intermediate, degree, and B.Tech engineering students with industry-relevant competencies. From Python architectures to autonomous AI models and IoT firmware, students gain portfolio-grade technical muscle.",
    iconName: "Cpu",
    features: [
      "Python programming fundamentals to advanced application logic",
      "Applied Artificial Intelligence, Machine Learning & Neural Networks",
      "Robotics, embedded systems, microcontrollers & IoT fundamentals",
      "Project-driven engineering bootcamps and intensive technical workshops",
      "Campus training programs & Faculty Development Programs (FDP)",
    ],
    audience: "B.Tech, Degree & Diploma Students | Engineering Colleges",
    deliverable: "Hands-on Workshops, Capstone Projects & Skill Certifications",
  },
  {
    id: "division-c",
    badge: "Division C",
    title: "IT & Software Services",
    tagline: "Enterprise software, AI automation & digital products",
    description:
      "Delivering high-performance digital products and workflow automations for startups, educational institutions, and growing businesses. We engineer robust modern web applications and AI integrations.",
    iconName: "Code2",
    features: [
      "Modern responsive websites & high-scale web application development",
      "Custom software engineering tailored to organizational workflows",
      "Intuitive UI/UX design, design systems & digital product prototypes",
      "Enterprise AI integration, generative models & workflow automation",
      "Data analytics, real-time dashboards & technology consulting",
      "End-to-end digital transformation solutions for institutions & SMEs",
    ],
    audience: "Startups, SMEs, Institutions & Educational Organizations",
    deliverable: "Production-ready Web Applications, AI Systems & Consulting",
  },
  {
    id: "division-d",
    badge: "Division D",
    title: "Robotics Kits & Learning Infrastructure",
    tagline: "Physical hardware, laboratory procurement & ecosystem support",
    description:
      "Providing the physical foundation for experiential education. We coordinate durable, safety-certified robotics kits, sensor suites, and modular learning workbenches with complete teaching guides.",
    iconName: "Boxes",
    features: [
      "Robotics kit procurement through accredited technology partners",
      "Curriculum mapping & comprehensive classroom teaching resources",
      "Faculty training, onboarding manuals & technical support",
      "School laboratory layout design & equipment maintenance guidance",
      "Co-branded educational kits (subject to institutional partner agreements)",
    ],
    audience: "Educational Institutions & STEM Labs",
    deliverable: "Hardware Kits, Lab Infrastructure & Instructor Resource Manuals",
  },
  {
    id: "division-e",
    badge: "Division E",
    title: "Faculty Network & Innovation Programs",
    tagline: "Empowering educators, hackathons & community competitions",
    description:
      "Building a decentralized, high-standard network of technology mentors while igniting student curiosity through dynamic innovation challenges, hackathons, and regional project showcases.",
    iconName: "Users",
    features: [
      "Rigorous faculty recruitment, qualification & pedagogy coordination",
      "City-based instructor network for seamless school coverage",
      "Regional school and college innovation hackathons",
      "Annual student technology showcases & live prototype demonstrations",
      "Strategic academic partnerships & industry technology collaborations",
    ],
    audience: "Educators, Young Innovators & Academic Communities",
    deliverable: "Vetted Mentor Network, Hackathons & Tech Festivals",
  },
];

export interface AudienceGroup {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  points: string[];
  ctaText: string;
}

export const audiences: AudienceGroup[] = [
  {
    id: "school-education",
    title: "School Education",
    subtitle: "Grades 4 to 9",
    description:
      "Designed specifically for private schools, mid-tier institutions, and budget-conscious schools wanting a world-class STEM & AI program without upfront capital friction.",
    iconName: "GraduationCap",
    points: [
      "Students from Grades 4–9 learning through hands-on kit assemblies",
      "Principals, school owners & management seeking NEP-aligned curriculum",
      "Zero equipment headache: kits and faculty provided directly by Ashvon",
      "Measurable student progress, parent showcase days & regional competitions",
    ],
    ctaText: "Request School Lab Demo",
  },
  {
    id: "higher-education",
    title: "Higher Education",
    subtitle: "Colleges & Engineering Students",
    description:
      "Bridging the crucial gap between academic syllabi and real-world technology demands for B.Tech, diploma, and undergraduate students.",
    iconName: "BookOpen",
    points: [
      "Intermediate, degree, and engineering (B.Tech) aspirants",
      "Engineering colleges wanting specialized AI, Robotics & IoT labs",
      "Project-centric learning that builds demonstrable technical portfolios",
      "Faculty Development Programs (FDP) to upskill institutional staff",
    ],
    ctaText: "Explore College Programs",
  },
  {
    id: "business-institutions",
    title: "Business & Institutions",
    subtitle: "Startups, SMEs & Organizations",
    description:
      "Empowering organizations, startups, and academic campuses with bespoke software development, AI integration, and workflow automation.",
    iconName: "Building2",
    points: [
      "Startups and SMEs modernizing operations or launching digital products",
      "Schools & universities requiring institutional portals and digital workflows",
      "Custom software, fullstack web platforms, and AI-assisted automations",
      "Strategic technology consulting and UI/UX modernization",
    ],
    ctaText: "Consult for IT Solutions",
  },
];

export const coreValues = [
  {
    title: "Innovation",
    desc: "Constantly pioneering progressive curriculum, smart kits, and industry-standard digital tools that prepare learners for tomorrow.",
    icon: "Lightbulb",
  },
  {
    title: "Accessibility",
    desc: "Democratizing high-caliber AI and robotics education for mid-tier and budget-conscious schools without prohibitive cost barriers.",
    icon: "Unlock",
  },
  {
    title: "Integrity",
    desc: "Unwavering commitment to genuine student learning outcomes, transparent institutional partnerships, and dependable delivery.",
    icon: "ShieldCheck",
  },
  {
    title: "Practical Learning",
    desc: "Moving beyond passive rote memorization to active, tactile building with real circuits, sensors, code, and physical mechanisms.",
    icon: "Wrench",
  },
  {
    title: "Collaboration",
    desc: "Working hand-in-hand with school managements, college faculties, and industry partners to create lasting educational value.",
    icon: "Handshake",
  },
  {
    title: "Growth & Impact",
    desc: "Empowering every learner with future-ready skills, strategic thinking, and the confidence to lead in an AI-driven global economy.",
    icon: "TrendingUp",
  },
];

export const geographicRoadmap = [
  {
    phase: "Phase 1",
    region: "Andhra Pradesh & Telangana",
    status: "Active Deployment",
    description:
      "Establishing primary educational corridors across Hyderabad, Vijayawada, Visakhapatnam, Tirupati, and Warangal with partner schools and college workshops.",
    highlight: "Primary Launch Corridor",
  },
  {
    phase: "Phase 2",
    region: "Karnataka & Tamil Nadu",
    status: "Expansion Pipeline",
    description:
      "Extending our school robotics labs and faculty network into Bengaluru, Chennai, Coimbatore, and Mysuru educational hubs.",
    highlight: "Regional Expansion",
  },
  {
    phase: "Pan-India",
    region: "National Technology Network",
    status: "Long-Term Vision",
    description:
      "Building a trusted, nationwide education and technology ecosystem empowering millions of learners across Indian states.",
    highlight: "Nationwide Ecosystem",
  },
];

export const implementationSteps = [
  {
    step: "01",
    title: "Needs & Infrastructure Discovery",
    desc: "We analyze your school's grade bands, schedule, lab spaces, and academic calendar to formulate a customized implementation plan.",
  },
  {
    step: "02",
    title: "Curriculum & Hardware Allocation",
    desc: "We align age-appropriate robotics kits, sensors, microcontrollers, and lesson sequences tailored to Grades 4–9.",
  },
  {
    step: "03",
    title: "Faculty Deployment & Onboarding",
    desc: "We deploy qualified, trained STEM instructors to conduct sessions, or thoroughly train existing school faculty with full teaching resources.",
  },
  {
    step: "04",
    title: "Hands-on Classroom Building",
    desc: "Students build, wire, program, and iterate physical projects every single week in a high-engagement, collaborative lab setting.",
  },
  {
    step: "05",
    title: "Assessments, Hackathons & Showcases",
    desc: "Students present their capstones at school science days, inter-school robotics challenges, and receive recognized milestone certifications.",
  },
];

export const faqs = [
  {
    q: "How does Ashvon Technologies help schools with AI and Robotics?",
    a: "Ashvon provides an end-to-end turnkey solution: we provide the physical robotics kits, sequential NEP-aligned curriculum, student project workbooks, and deploy trained faculty directly to your school campus so your management faces zero operational friction.",
  },
  {
    q: "What age groups or grades does the school program cover?",
    a: "Our core school program is tailored for students in Grades 4 through 9, structured into progressive modules from mechanical builds and basic sensors to block coding, microcontrollers, and introductory AI literacy.",
  },
  {
    q: "Does our school need to invest heavily in expensive lab equipment?",
    a: "No! One of Ashvon's founding pillars is Accessibility. We remove heavy capital expenditure barriers by providing kit procurement, shared kit models, and flexible laboratory implementation designed for mid-tier and budget-conscious schools.",
  },
  {
    q: "What offerings are available for colleges and engineering students?",
    a: "Division B provides intensive project-based bootcamps in Python, Applied Machine Learning, Embedded Systems, and IoT. We also conduct Faculty Development Programs (FDPs) and hackathons tailored to institutional departments.",
  },
  {
    q: "What IT and Software Services does Ashvon provide?",
    a: "Division C delivers custom web applications, responsive websites, UI/UX design, enterprise AI automations, and data analytics dashboards for startups, educational institutions, and businesses seeking digital transformation.",
  },
  {
    q: "Which states is Ashvon currently operating in?",
    a: "Phase 1 focuses on Andhra Pradesh and Telangana. Phase 2 extends into Karnataka and Tamil Nadu, building toward a comprehensive pan-India technology education and IT network.",
  },
  {
    q: "What does the chess knight in the Ashvon logo symbolize?",
    a: "The chess knight represents Strategic Thinking, Intellectual Agility, and Forward Vision. Just as the knight moves dynamically to overcome obstacles on the board, Ashvon empowers students and clients to think critically and navigate complex technological futures.",
  },
];
