export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  qaGate: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Project Review",
    shortDesc: "Review architectural, structural and project documentation.",
    fullDesc:
      "Upon project initiation, our engineering team audits the contract documents, architectural plans, structural engineering drawings, project specifications, and local code requirements. Any discrepancies, missing dimensions, or ambiguous connections are logged into formal Requests for Information (RFIs) to establish a resolved baseline before modeling begins.",
    deliverables: [
      "Contract drawing audit report",
      "Formal RFI schedule",
      "Advance Bill of Materials (ABM) for preliminary mill ordering",
      "Detailing schedule and milestone agreement",
    ],
    qaGate: "Scope Verification & RFI Log Clearance",
  },
  {
    number: "02",
    title: "3D Modelling",
    shortDesc: "Develop the structural steel model from approved project information.",
    fullDesc:
      "Using high-precision 3D modeling environments, we construct the structural model starting from the master project grid, foundation levels, and anchor bolt coordinates. Primary columns, transfer trusses, floor beams, secondary framing, and initial connection points are modeled to exact dimensional tolerances.",
    deliverables: [
      "Anchor bolt layout plan & foundation coordinate sheets",
      "Core 3D parametric structural steel model",
      "Preliminary member list and tonnage verification",
      "Early erection geometry preview",
    ],
    qaGate: "Grid & Primary Framing Alignment Check",
  },
  {
    number: "03",
    title: "Coordination",
    shortDesc: "Identify clashes, inconsistencies and coordination issues.",
    fullDesc:
      "We execute thorough clash detection against architectural elements, mechanical ductwork, piping routes, and electrical trays. Our team verifies tool clearances for bolt insertion, impact wrench access, and site crane hook paths to prevent costly field interferences.",
    deliverables: [
      "Multi-discipline clash matrix",
      "Navisworks / IFC coordination viewpoints",
      "Resolution notes for design team sign-off",
      "Clearance verification for erection tooling",
    ],
    qaGate: "Interdisciplinary Clash Audit & Tool Clearance Signoff",
  },
  {
    number: "04",
    title: "Detailing",
    shortDesc: "Prepare fabrication and erection documentation.",
    fullDesc:
      "Once model geometry and connections are verified, we extract comprehensive 2D shop drawings and erection plans. Every assembly drawing, single-part detail, bevel, weld symbol, hole pattern, and coating instruction is cleanly drafted to match fabricator shop conventions.",
    deliverables: [
      "Shop assembly fabrication drawings",
      "Single-part fitting sheets and gather sheets",
      "General arrangement (GA) and erection plans",
      "Automated NC, DSTV, and DXF machine files",
    ],
    qaGate: "Lead Checker Drawing Audit & Dimensions Verification",
  },
  {
    number: "05",
    title: "Quality Check & Delivery",
    shortDesc: "Review outputs and deliver project documentation according to agreed requirements.",
    fullDesc:
      "Before release, drawing packages pass through our multi-tiered QA/QC checklist. Senior checkers verify part marks, quantities, bolt lengths, weld sizes, and shipping bundle allocations against the master contract. The validated package is securely delivered with full transmittal records.",
    deliverables: [
      "Final signed fabrication drawing packages (PDF & DWG)",
      "Verified NC / DSTV machine code datasets",
      "Comprehensive bolt, material, and shipping lists",
      "Formal project transmittal documentation",
    ],
    qaGate: "Final Quality Review & Transmittal Release",
  },
];

export const PROCESS_FLOW = [
  "Drawings",
  "Project Review",
  "3D Model",
  "Coordination",
  "Detailing",
  "QA/QC",
  "Fabrication",
];
