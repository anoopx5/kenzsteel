export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    country: string;
    display: string;
  };
  workingHours: string;
  timeZone: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  standardsSupported: string[];
  socials: {
    linkedin: string;
    facebook: string;
    instagram: string;
  };
}

export const COMPANY: CompanyInfo = {
  name: "Kenz Engineering",
  legalName: "Kenz Engineering",
  tagline: "Precision Structural Steel Detailing & Engineering Solutions",
  shortDescription:
    "Professional structural steel detailing, 3D modelling and fabrication documentation supporting steel fabricators, contractors, and engineering teams worldwide.",
  fullDescription:
    "Kenz Engineering provides specialized structural steel detailing, 3D modelling, and engineering solutions designed to support accurate fabrication, efficient construction, and reliable project delivery. Our workflows bridge the gap between engineering design and workshop fabrication.",
  phone: "[PHONE NUMBER]",
  phoneDisplay: "[PHONE NUMBER]",
  whatsapp: "[WHATSAPP NUMBER]",
  whatsappDisplay: "[WHATSAPP NUMBER]",
  email: "[EMAIL ADDRESS]",
  address: {
    line1: "[OFFICE ADDRESS]",
    line2: "[SUITE / BUILDING]",
    city: "[CITY, STATE]",
    country: "[COUNTRY]",
    display: "[OFFICE ADDRESS, CITY, COUNTRY]",
  },
  socials: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  workingHours: "[WORKING HOURS — e.g. Monday to Friday: 8:00 AM – 6:00 PM]",
  timeZone: "UTC/International Coordination",
  capabilities: [
    {
      title: "Fabrication Readiness",
      description: "Drawings formatted specifically to reduce workshop questions and fabrication re-work.",
    },
    {
      title: "Model Coordination",
      description: "Proactive clash detection across structural, architectural, and MEP disciplines before steel cutting.",
    },
    {
      title: "Standards Adaptability",
      description: "Drawings prepared according to applicable regional and project-specific design codes.",
    },
    {
      title: "Structured QA/QC",
      description: "Rigorous multi-stage check processes to verify connectivity, member clearances, and bolt schedules.",
    },
  ],
  standardsSupported: [
    "AISC (American Institute of Steel Construction)",
    "Eurocodes (EN 1993)",
    "British Standards (BS 5950)",
    "Indian Standards (IS 800)",
    "Australian Standards (AS 4100)",
  ],
};
