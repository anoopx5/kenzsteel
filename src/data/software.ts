export interface SoftwareTool {
  id: string;
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  enabled: boolean;
}

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    id: "tekla",
    name: "Tekla Structures",
    category: "3D Structural Modelling & Detailing",
    description:
      "Advanced 3D structural BIM software capable of modeling complex steel structures with high precision, generating automated shop drawings, and producing CNC data.",
    capabilities: [
      "High-density LOD 400 structural steel modeling",
      "Direct NC / DSTV machine code generation for CNC fabrication",
      "Automated assembly and single-part fabrication drawings",
      "Advanced clash checking and constructability verification",
    ],
    enabled: true,
  },
  {
    id: "revit",
    name: "Autodesk Revit",
    category: "BIM & Multidisciplinary Coordination",
    description:
      "Parametric building modeling platform supporting seamless model federation, architectural synchronization, and project-wide BIM workflows.",
    capabilities: [
      "Multidisciplinary BIM coordination with MEP and architecture",
      "Custom structural parametric family generation",
      "Model exchange via IFC and OpenBIM standards",
      "Phased construction scheduling and tag tracking",
    ],
    enabled: true,
  },
  {
    id: "autocad",
    name: "Autodesk AutoCAD",
    category: "Engineering Drafting & Documentation",
    description:
      "Standard industry platform for 2D drafting, anchor bolt layouts, custom geometry detailing, and review of client DWG/DXF drawings.",
    capabilities: [
      "Precision 2D general arrangement and layout drawings",
      "Standardized drafting sheets and detail drafting views",
      "Conversion and preparation of DWG/DXF client contract files",
      "Site clearance sketches and geometric cross-sections",
    ],
    enabled: true,
  },
  {
    id: "navisworks",
    name: "Autodesk Navisworks",
    category: "Clash Detection & Project Review",
    description:
      "Model review and coordination software enabling clash detection across all project trades, timeline simulation, and interactive 3D navigation.",
    capabilities: [
      "Automated hard and soft spatial clash detection matrices",
      "Federation of multiple CAD and BIM native formats",
      "Interference reporting with localized 3D viewpoints",
      "Pre-construction spatial walkthrough verification",
    ],
    enabled: true,
  },
  {
    id: "sds2",
    name: "SDS2",
    category: "Steel Detailing & Connection Automation",
    description:
      "Steel detailing software featuring intelligent connection automation, load-based joint calculations, and automated fabrication drawing creation.",
    capabilities: [
      "Automated connection design based on structural member load values",
      "Erection plan generation and shop drawing detailing",
      "Automated bolt clearance and tool access verification",
      "Material management and fabrication data export",
    ],
    enabled: true,
  },
];

export const SOFTWARE_DISCLAIMER =
  "Software platforms and digital tools referenced reflect industry-standard engineering capabilities and are utilized according to specific project requirements and client execution workflows. Product names, logos, and trademarks belong to their respective owners; no official endorsement, certified dealership, or software partnership is implied.";
