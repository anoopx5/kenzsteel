export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyStructures: string[];
  detailingFocus: string[];
  icon: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "industrial",
    name: "Industrial & Manufacturing",
    tagline: "Heavy structural steel built for operating plant loads and machinery",
    description:
      "Heavy industrial facilities require structural detailing that accommodates extreme dynamic loads, crane vibration, high-temperature operations, and aggressive chemical environments. We deliver robust detailing for manufacturing plants, mills, processing sheds, and crane gantries.",
    keyStructures: [
      "Overhead crane runway girders and gantry columns",
      "Equipment support frames and furnace platforms",
      "Conveyor bridges, transfer towers, and silo structures",
      "Heavy manufacturing high-bay industrial buildings",
    ],
    detailingFocus: [
      "Dynamic fatigue considerations on crane rail splices",
      "Thermal expansion joints and slotted connection details",
      "High-capacity moment and braced frame connections",
      "Direct integration of machinery anchor bolt layouts",
    ],
    icon: "Factory",
  },
  {
    id: "commercial",
    name: "Commercial & High-Rise",
    tagline: "Coordinated structural steel framing for modern commercial developments",
    description:
      "Modern commercial developments demand tight multidisciplinary coordination between structural steelwork, concrete core walls, and MEP distribution. We provide high-LOD models and shop packages that ensure uncompromised construction schedules.",
    keyStructures: [
      "Multi-storey commercial office buildings and towers",
      "Retail shopping malls and multi-screen cinema complexes",
      "Hospitality developments and mixed-use podiums",
      "Multi-level structured parking facilities",
    ],
    detailingFocus: [
      "Pre-coordinated MEP service web openings in composite beams",
      "Complex transfer trusses and column splice details",
      "Floor beam camber schedules for dead-load deflection control",
      "Field erection sequencing for urban site constraints",
    ],
    icon: "Building2",
  },
  {
    id: "peb",
    name: "Pre-Engineered Buildings (PEB)",
    tagline: "Rapid-fabrication detailing for large-span industrial and logistics shells",
    description:
      "PEB detailing demands exceptional speed, material efficiency, and precision in tapered built-up frames and cold-formed secondary members. Our detailing packages enable fast workshop production and hassle-free on-site assembly.",
    keyStructures: [
      "Logistics distribution centers and automated fulfillment hubs",
      "Manufacturing workshops and assembly sheds",
      "Aircraft hangars and sports complexes",
      "Agricultural storage, grain sheds, and cold storage units",
    ],
    detailingFocus: [
      "Tapered built-up primary frames with automated web/flange welding details",
      "Optimized cold-formed Z/C purlin nesting and punch patterns",
      "Accurate cladding and flashings layout drawings",
      "Complete fastener and hardware bills of materials",
    ],
    icon: "Warehouse",
  },
  {
    id: "infrastructure",
    name: "Infrastructure & Transportation",
    tagline: "Heavy civil steel detailing adhering to strict public works standards",
    description:
      "Transportation and infrastructure structures require rigorous adherence to specialized bridge codes, fatigue parameters, and weather-resistant detailing. We model and detail plate girders, trusses, and pedestrian overpasses with uncompromising precision.",
    keyStructures: [
      "Highway overpasses and railway flyover steel spans",
      "Pedestrian footbridges and skywalks",
      "Airport terminal concourses and gate canopy structures",
      "Transit station framing and train shed enclosures",
    ],
    detailingFocus: [
      "Horizontally curved and variable-depth plate girder camber profiles",
      "High-strength friction grip (HSFG) bolted field splices",
      "Weathering steel and hot-dip galvanizing drainage detailing",
      "Comprehensive trial assembly geometry verification",
    ],
    icon: "TrainFront",
  },
  {
    id: "architectural-steel",
    name: "Architectural & Exposed Steel (AESS)",
    tagline: "High-finish detailing where structural members serve as visual architecture",
    description:
      "Architecturally Exposed Structural Steel (AESS) leaves no room for raw workshop approximations. We provide meticulous detailing where weld contouring, bolt orientation, flush splices, and aesthetic clean lines are paramount.",
    keyStructures: [
      "Atrium roof canopies and glazed skylight structures",
      "Monumental helical and spiral architectural staircases",
      "Exposed space frames and diagrid structural facades",
      "Feature entrance porticos and sculptural steel landmarks",
    ],
    detailingFocus: [
      "Concealed internal fasteners and countersunk pin connections",
      "Strict weld finishing callouts matching AESS matrix criteria",
      "Unfolded CNC sheet metal patterns for complex 3D curved plates",
      "Sub-millimeter coordination with glass facade spiders and curtain walls",
    ],
    icon: "Landmark",
  },
  {
    id: "special-structures",
    name: "Special Structures & Offshore/Modular",
    tagline: "Custom engineered steelwork for specialized processing and modular assemblies",
    description:
      "From multi-tier industrial pipe racks and conveyor galleries to modular containerized equipment skids, we handle unique framing challenges that require non-standard geometries and high transportation coordination.",
    keyStructures: [
      "Multi-tier refinery and chemical plant pipe racks",
      "Overland bulk material conveyor galleries and bents",
      "Modular process skids and electrical equipment enclosures",
      "Communications towers and flare stack support structures",
    ],
    detailingFocus: [
      "Modular transport splices and road-clearance envelope verification",
      "Lifting lug calculations and center-of-gravity coordination",
      "Grating, ladder, and cage safety detailing per OSHA standards",
      "Dynamic load connection detailing for vibrating screening equipment",
    ],
    icon: "Boxes",
  },
];
