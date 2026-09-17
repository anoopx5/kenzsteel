export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Industrial" | "Commercial" | "PEB" | "Infrastructure" | "Architectural Steel" | "Special Structures";
  projectType: string;
  location: string;
  image?: string;
  scope: string;
  shortDescription: string;
  overview: string;
  structuralSystem: string;
  softwareUsed: string;
  tonnageOrSize: string;
  challenges: string[];
  approach: string[];
  deliverables: string[];
  galleryCaptions: string[];
}

export const PROJECT_CATEGORIES = [
  "All",
  "Industrial",
  "Commercial",
  "PEB",
  "Infrastructure",
  "Architectural Steel",
  "Special Structures",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-01",
    slug: "industrial-manufacturing-facility",
    title: "Heavy Industrial Manufacturing Facility",
    category: "Industrial",
    projectType: "Heavy Industrial Steelwork & Crane Gantry",
    location: "[PROJECT LOCATION]",
    image: "/images/project-industrial.jpg",
    scope: "3D Steel Modelling, Connection Detailing, Shop Drawings & CNC Data",
    shortDescription:
      "Full detailing package for a heavy industrial plant including stepped crane runway columns, equipment platforms, and heavy plate girders.",
    overview:
      "This project encompassed the complete structural steel detailing for a primary heavy manufacturing plant. The structure required rigorous coordination between high-capacity overhead crane runways, heavy equipment platforms, mezzanine floors, and roof truss systems subject to dynamic machinery loads.",
    structuralSystem: "Heavy built-up plate girders, braced rigid moment frames, and overhead crane runway rails with tie-back surge girders.",
    softwareUsed: "Tekla Structures / Autodesk Navisworks",
    tonnageOrSize: "[PROJECT TONNAGE / CAPACITY]",
    challenges: [
      "Mitigating cyclic crane runway fatigue through precision-detailed bolted runway splices and wheel-stop assemblies.",
      "Managing complex clash conditions with overhead piping racks, heavy ductwork, and electrical cable trays.",
      "Strict mill tolerance requirements on heavy flange plate thickness variations requiring stepped bevels.",
    ],
    approach: [
      "Developed a complete 3D structural model with clash-detection integration against mechanical equipment vendor files.",
      "Standardized connection details across crane columns to minimize fabrication plate variations.",
      "Issued sequenced shop drawing submittals aligned with the fabricator's shop bay capacity and delivery schedule.",
    ],
    deliverables: [
      "Erection GA drawings and anchor bolt setting templates",
      "Assembly shop fabrication drawings for crane columns and girders",
      "NC / DSTV automated cutting and drilling machine data",
      "Field bolt schedules, erection sequencing plans, and cut lists",
    ],
    galleryCaptions: [
      "3D Model overview of heavy industrial crane gantry framing",
      "Crane bracket and surge girder connection isometric detail",
      "Workshop fabrication drawing sheet for multi-step column",
    ],
  },
  {
    slug: "commercial-mixed-use-development",
    id: "proj-02",
    title: "Multi-Tier Commercial Complex",
    category: "Commercial",
    projectType: "Multi-Storey Commercial & Office Tower Framing",
    location: "[PROJECT LOCATION]",
    image: "/images/project-commercial.jpg",
    scope: "Structural Steel 3D Modelling, BIM Coordination & Fabrication Documentation",
    shortDescription:
      "Comprehensive detailing for a multi-storey steel-framed commercial building featuring transfer trusses and cantilevered facades.",
    overview:
      "A flagship multi-level commercial development demanding structural steel detailing integrated with reinforced concrete cores. The project involved floor composite beams with web penetrations for services, transfer trusses at podium levels, and perimeter cantilevered architectural steel.",
    structuralSystem: "Composite steel beams, castellated beams with MEP web openings, bolted moment frames, and podium transfer trusses.",
    softwareUsed: "Tekla Structures / Autodesk Revit",
    tonnageOrSize: "[PROJECT TONNAGE / AREA]",
    challenges: [
      "High-density web openings required in floor beams to accommodate large HVAC ducts without structural member overstress.",
      "Complex transfer connections between steel podium columns and lower reinforced concrete foundation walls.",
      "Strict deflection tolerances and camber calculations across large open-span office floor bays.",
    ],
    approach: [
      "Created federated BIM models in Revit and Tekla to audit every service opening against mechanical duct lines.",
      "Detailed reinforced web sleeve stiffeners directly within the 3D model according to design engineer guidelines.",
      "Generated phased erection packages to enable vertical steel erection concurrently with lower-level concrete deck pouring.",
    ],
    deliverables: [
      "Comprehensive structural BIM model (LOD 350)",
      "Shop fabrication drawings for floor beams, columns, and transfer trusses",
      "Advance Bill of Materials (ABM) for procurement lead time management",
      "Erection marking plans and bolt placement schedules",
    ],
    galleryCaptions: [
      "Podium level transfer truss connection 3D node",
      "Floor beam layout with pre-coordinated MEP web penetrations",
      "Erection sequence model for multi-tier framing",
    ],
  },
  {
    slug: "pre-engineered-logistics-hub",
    id: "proj-03",
    title: "Pre-Engineered Logistics & Distribution Center",
    category: "PEB",
    projectType: "Large-Span Pre-Engineered Building (PEB)",
    location: "[PROJECT LOCATION]",
    image: "/images/project-logistics.jpg",
    scope: "PEB Modelling, Tapered Frame Detailing, Sheeting Layouts & Fastener BOQ",
    shortDescription:
      "Turnkey PEB detailing for an extensive logistics fulfillment center with clear-span bays, interior mezzanine, and dock levelers.",
    overview:
      "A high-throughput logistics facility spanning multiple clear-span bays. The project called for detailing of tapered built-up frames, continuous cold-formed roof purlins, wall girts, loading dock canopies, and integrated office mezzanine steel framing.",
    structuralSystem: "Continuous tapered built-up primary frames, cold-formed Z-purlins, rod bracing, and insulated sandwich panel envelope.",
    softwareUsed: "Tekla Structures / AutoCAD",
    tonnageOrSize: "[PROJECT ENVELOPE AREA / TONNAGE]",
    challenges: [
      "Coordinating dozens of loading dock leveler framing pockets and overhead door frames into the primary sidewall girt system.",
      "Fast turnaround required to support expedited fabrication cycles and scheduled building dry-in milestones.",
      "Optimizing cold-formed purlin nesting and lap lengths to eliminate jobsite waste.",
    ],
    approach: [
      "Utilized specialized PEB parametric tools to model tapered rafters, interior columns, and purlin overlaps accurately.",
      "Produced standardized secondary framing punched schedules for automated roll-forming equipment.",
      "Supplied color-coded erection phase drawings allowing erection crews to sort bundles instantly on site.",
    ],
    deliverables: [
      "Anchor bolt layout drawings and foundation reaction tables",
      "Tapered frame fabrication shop sheets with web-to-flange weld specs",
      "Secondary purlin/girt cutting and punching schedules",
      "Roof and wall sheeting erection layouts with flashing detail sheets",
    ],
    galleryCaptions: [
      "Clear-span tapered PEB portal frame 3D wireframe",
      "Loading dock canopy and secondary framing connection assembly",
      "Roof sheeting layout plan with ridge and gutter details",
    ],
  },
  {
    slug: "highway-flyover-steel-overpass",
    id: "proj-04",
    title: "Highway Overpass & Steel Box Girder Bridge",
    category: "Infrastructure",
    projectType: "Heavy Infrastructure Steel Girder Framing",
    location: "[PROJECT LOCATION]",
    image: "/images/project-infrastructure.jpg",
    scope: "Curved Steel Girder Detailing, Splice Joint Modelling & Camber Documentation",
    shortDescription:
      "Detailing for a curved multi-span highway overpass featuring curved plate girders, cross-bracing diaphragms, and expansion joint systems.",
    overview:
      "A demanding infrastructure project involving curved steel plate girders spanning an active traffic corridor. Every girder required detailed dead-load camber calculations, staggered bolted splices, and cross-frame diaphragms oriented to curvature tangents.",
    structuralSystem: "Horizontally curved steel plate girders, K-type cross diaphragms, and elastomeric bearing connection details.",
    softwareUsed: "Tekla Structures / SDS2",
    tonnageOrSize: "[PROJECT TONNAGE / SPAN LENGTH]",
    challenges: [
      "Accounting for 3D geometric curvature, superelevation, and longitudinal grade across all cross-frame connections.",
      "Managing high-strength bolted field splices with stringent bolt hole alignment tolerances across 40mm thick flange plates.",
      "Detailed dead-load camber diagrams required to ensure final roadway deck elevations match highway design criteria.",
    ],
    approach: [
      "Modeled true 3D curved geometry with exact radius calculations and flange plate development layouts.",
      "Incorporated full camber profiles into individual fabrication sheets to guide workshop plate cutting.",
      "Delivered comprehensive virtual trial assembly models to confirm fit-up before girders shipped to the jobsite.",
    ],
    deliverables: [
      "Plate girder shop fabrication drawings with weld preparations",
      "Curved flange plate true development cutting DXF files",
      "Cross-frame diaphragm assembly details and connector plates",
      "Camber diagrams and virtual trial assembly reports",
    ],
    galleryCaptions: [
      "Curved steel plate girder 3D model alignment",
      "Intermediate K-type diaphragm bolted joint detail",
      "Flange splice plate detail showing staggered bolt pattern",
    ],
  },
  {
    slug: "architectural-atrium-canopy",
    id: "proj-05",
    title: "Architectural Atrium Steel Canopy & Feature Staircase",
    category: "Architectural Steel",
    projectType: "Exposed Architecturally Exposed Structural Steel (AESS)",
    location: "[PROJECT LOCATION]",
    image: "/images/hero-construction.jpg",
    scope: "AESS Detailing, Sculptural Steel Framing, Concealed Connections & 3D Coordination",
    shortDescription:
      "High-precision detailing for an architecturally exposed structural steel (AESS Category 4) entrance canopy and monumental spiral staircase.",
    overview:
      "Designed as the visual center of a prestigious public facility, this project demanded Architecturally Exposed Structural Steel (AESS) detailing. All welds, splices, and connection hardware required concealed detailing or ground-smooth finishes with strict visual tolerances.",
    structuralSystem: "Curved hollow structural sections (HSS), plate-stringer monumental spiral staircase, and glass canopy steel outriggers.",
    softwareUsed: "Autodesk Revit / Tekla Structures",
    tonnageOrSize: "[PROJECT SCOPE / SIZE]",
    challenges: [
      "All connections required internal concealed bolt sleeves or seamless full-penetration welded joints for visual purity.",
      "Three-dimensional helical stringer plates for the monumental staircase required true unfolded sheet metal development.",
      "Tight integration with structural glass spider fittings requiring sub-millimeter hole location precision.",
    ],
    approach: [
      "Engineered hidden connection brackets with internal pin assemblies to maintain clean exterior member lines.",
      "Unfolded helical curved stringer plates into flat CNC cutting templates with precise bend-line annotations.",
      "Coordinated directly with the glass facade fabricator to ensure hole tolerances matched hardware fittings exactly.",
    ],
    deliverables: [
      "AESS fabrication shop drawings with weld grind and surface finish notes",
      "True unfolded flat patterns for curved stringer plates (DXF)",
      "Anchor setting diagrams with precision glass outrigger coordinates",
      "Field erection sequencing guide ensuring scratch protection for exposed members",
    ],
    galleryCaptions: [
      "AESS entrance canopy curved structural pipe geometry",
      "Monumental helical staircase stringer unfolded plate layout",
      "Concealed pin connection 3D section detail",
    ],
  },
  {
    slug: "refinery-pipe-rack-gallery",
    id: "proj-06",
    title: "Industrial Pipe Rack & Conveyor Gallery",
    category: "Special Structures",
    projectType: "Multi-Tier Process Plant Steel Infrastructure",
    location: "[PROJECT LOCATION]",
    image: "/images/engineers-site.jpg",
    scope: "Multi-Tier Steel Detailing, Longitudinal Wind Trusses & Grating Walkways",
    shortDescription:
      "Detailed structural steelwork for a 4-tier process pipe rack, long-span conveyor trestle, and maintenance access walkways.",
    overview:
      "This project required structural steel detailing for a heavily loaded industrial pipe rack traversing an operating processing facility. The design incorporated multi-tier pipe sleeper beams, longitudinal wind bracing bents, stair towers, and OSHA-compliant catwalk walkways.",
    structuralSystem: "Standard structural W-shapes, HSS diagonal bracing bents, modular transportable frame sections, and serrated bar grating.",
    softwareUsed: "Tekla Structures / Navisworks",
    tonnageOrSize: "[PROJECT TONNAGE / LENGTH]",
    challenges: [
      "Integrating pipe anchor forces and thermal expansion friction loads into connection plate designs.",
      "Designing modular transport frames capable of being shop-assembled into 12-meter modules for rapid crane placement on site.",
      "Detailed coordination of hundreds of individual pipe clamp shoes, cable tray supports, and electrical ground bosses.",
    ],
    approach: [
      "Modeled all 4 tiers with modular transport splices clearly demarcated for shop assembly and shipping limits.",
      "Detailed standardized pipe tier beams with slotted holes and Teflon slide plate attachments where specified.",
      "Automated grating layout drawings and handrail kickplate schedules directly from the Tekla model.",
    ],
    deliverables: [
      "Shop fabrication drawings for modular pipe rack bents",
      "Walkway grating, stair tread, and handrail shop sheets",
      "Pipe anchor and guide attachment connection drawings",
      "Modular frame shipping center-of-gravity and lifting lug details",
    ],
    galleryCaptions: [
      "Multi-tier pipe rack 3D model with longitudinal bracing",
      "Modular frame transport splice connection detail",
      "Catwalk walkway and handrail fabrication sheet",
    ],
  },
];
