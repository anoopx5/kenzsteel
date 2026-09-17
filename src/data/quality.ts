export interface QualityStep {
  step: string;
  name: string;
  action: string;
  focus: string;
}

export const QUALITY_FLOW: QualityStep[] = [
  {
    step: "01",
    name: "Project Input",
    action: "Contract Drawing & Specification Audit",
    focus: "Verification of design intent, standard specifications, revision tags, and RFI tracking.",
  },
  {
    step: "02",
    name: "Model Review",
    action: "Parametric Geometry & Grid Audit",
    focus: "Confirmation of structural grids, levels, member orientations, and camber alignments.",
  },
  {
    step: "03",
    name: "Coordination",
    action: "Clash Detection & Constructability Review",
    focus: "Spatial verification against MEP, architecture, bolt tool clearances, and erection paths.",
  },
  {
    step: "04",
    name: "Detailing",
    action: "Drawing Generation & Part Mark Assignment",
    focus: "Extraction of shop sheets, connection details, and automated NC/DSTV data files.",
  },
  {
    step: "05",
    name: "Drawing Review",
    action: "Independent Senior Checker Audit",
    focus: "100% check of dimensions, weld callouts, hole gauges, plate thicknesses, and quantities.",
  },
  {
    step: "06",
    name: "Final Delivery",
    action: "Controlled Transmittal & Release",
    focus: "Indexed delivery of PDF packages, cut lists, bolt schedules, and CNC data sets.",
  },
];

export interface StandardReference {
  code: string;
  region: string;
  title: string;
  scope: string;
}

export const APPLICABLE_STANDARDS: StandardReference[] = [
  {
    code: "AISC",
    region: "United States / North America",
    title: "American Institute of Steel Construction",
    scope: "AISC 360 Specification for Structural Steel Buildings, AISC 341 Seismic Provisions, and AISC Detailing Manual guidelines.",
  },
  {
    code: "Eurocodes",
    region: "Europe / International",
    title: "EN 1993 (Eurocode 3)",
    scope: "Design of steel structures, structural joint detailing, fabrication execution standard EN 1090-2.",
  },
  {
    code: "British Standards",
    region: "United Kingdom / Commonwealth",
    title: "BS 5950 & BS EN Standards",
    scope: "Structural use of steelwork in building, member sizing, and connection joint detailing.",
  },
  {
    code: "Indian Standards",
    region: "India / Middle East",
    title: "IS 800 & Related BIS Codes",
    scope: "General construction in steel — Code of Practice, welding standards (IS 816), and structural bolting.",
  },
  {
    code: "Australian Standards",
    region: "Australia / New Zealand",
    title: "AS 4100 & ASI Guidelines",
    scope: "Steel structures standard and Australian Steel Institute (ASI) standardized connection detailing.",
  },
];

export const STANDARDS_COMPLIANCE_NOTE =
  "Projects can be detailed according to applicable client, project and regional requirements. Kenz Engineering configures drawing standards, bolt designations, weld symbols, and design criteria to match the governing jurisdiction and fabricator shop preferences specified for each contract.";
