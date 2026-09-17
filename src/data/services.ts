export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  heroHeadline: string;
  heroDescription: string;
  whatWeDeliver: {
    title: string;
    description: string;
  }[];
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
  applications: string[];
  technicalCapabilities: string[];
  deliverablesList: string[];
  icon: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "structural-steel-detailing",
    number: "01",
    title: "Structural Steel Detailing",
    shortDescription:
      "Detailed steel models and drawings prepared around project specifications and fabrication requirements.",
    heroHeadline: "Structural Steel Detailing Built Around Fabrication",
    heroDescription:
      "Kenz Engineering develops accurate, fabrication-ready steel detailing packages for commercial, industrial, and complex structures. We translate structural engineering drawings into precise digital models and actionable workshop drawings.",
    whatWeDeliver: [
      {
        title: "Comprehensive Erection Plans",
        description: "Clear general arrangement drawings, anchor bolt plans, and field erection schematics with clear piece marking.",
      },
      {
        title: "Detailed Shop Drawings",
        description: "Fabrication sheets for every individual assembly, single part, stiffener, gusset, and base plate with exact tolerances.",
      },
      {
        title: "Bills of Materials & Schedules",
        description: "Accurate material take-offs, bolt lists, cut lists, and shipping schedules structured for fabrication management.",
      },
      {
        title: "CNC & Production Data Files",
        description: "Automated NC, DXF, and DSTV files ready for direct integration into computerized cutting and drilling machinery.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Drawing & Specification Audit",
        description: "Thorough review of structural, architectural, and design notes to log RFIs and identify missing data.",
      },
      {
        step: "02",
        title: "Anchor Bolt & Foundation Coordination",
        description: "Early release of anchor bolt layout drawings, base plate details, and foundation coordination drawings.",
      },
      {
        step: "03",
        title: "Full Structural 3D Detailing",
        description: "Detailed modelling of main members, secondary framing, bracing systems, and connection geometry.",
      },
      {
        step: "04",
        title: "Drawing Generation & Internal QA",
        description: "Extraction of shop sheets, multi-tier QA checking against design documents, and dimension verification.",
      },
      {
        step: "05",
        title: "Final Delivery & Fabrication Support",
        description: "Issue of fabrication packages, CNC data sets, and prompt response to shop or site RFIs during construction.",
      },
    ],
    applications: [
      "Industrial manufacturing plants and warehouses",
      "Commercial office towers and mixed-use complexes",
      "Pipe racks, conveyor galleries, and utility bridges",
      "Pre-engineered buildings and warehouse expansions",
      "Architectural steel canopies, stairs, and handrails",
    ],
    technicalCapabilities: [
      "Detailing in accordance with AISC, Eurocode, BS, and IS standards",
      "Automated NC/DSTV data generation for robotic coping/drilling",
      "Complex moment, shear, and seismic connection incorporation",
      "Clash management with MEP, civil, and architectural disciplines",
    ],
    deliverablesList: [
      "Anchor Bolt Setting Plans",
      "Erection GA Drawings",
      "Assembly & Single-Part Drawings",
      "Advance Bill of Materials (ABM)",
      "Shop Bolt & Field Bolt Lists",
      "NC / DSTV / DXF Machine Files",
    ],
    icon: "Boxes",
  },
  {
    slug: "3d-steel-modelling",
    number: "02",
    title: "3D Steel Modelling",
    shortDescription:
      "Detailed 3D structural models supporting visualization, coordination, and automated downstream workflows.",
    heroHeadline: "Precision 3D Structural Steel Modelling",
    heroDescription:
      "We build intelligent 3D structural models containing comprehensive geometric, material, and connection data. Our digital models serve as a single source of truth for engineering teams, steel fabricators, and general contractors.",
    whatWeDeliver: [
      {
        title: "Parametric 3D Structural Models",
        description: "Rich BIM-compliant structural models incorporating exact member dimensions, bevels, copes, and weld preparations.",
      },
      {
        title: "Interdisciplinary Coordination",
        description: "Direct clash detection and spatial resolution against architectural, HVAC, piping, and equipment models.",
      },
      {
        title: "Visual Constructability Models",
        description: "Interactive 3D model exports (IFC, 3D PDF) enabling fabricators and erection teams to preview assembly sequences.",
      },
      {
        title: "Automated Data Feeds",
        description: "Seamless transfer of model geometry into fabrication management software and production tracking systems.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Grid & Level Establishment",
        description: "Setting up spatial coordinates, elevations, and structural grids exactly aligning with master project datum.",
      },
      {
        step: "02",
        title: "Primary Frame Modelling",
        description: "Modelling columns, girders, beams, trusses, and major transfer framing with accurate section profiles.",
      },
      {
        step: "03",
        title: "Secondary & Connection Modelling",
        description: "Integrating purlins, girts, sag rods, bracing, connection plates, bolts, and welds into the complete assembly.",
      },
      {
        step: "04",
        title: "Clash & Clearance Verification",
        description: "Running automated clash checks to verify bolt-tightening tool access, erection clearances, and discipline conflicts.",
      },
      {
        step: "05",
        title: "Federated Model Exchange",
        description: "Exporting IFC and multi-format coordination files for general contractor review and downstream detailing.",
      },
    ],
    applications: [
      "Heavy industrial processing facilities and smelters",
      "Multi-level commercial buildings with complex geometric geometry",
      "Sports arenas, airport terminals, and long-span trusses",
      "BIM-mandated projects requiring Level of Development (LOD) 350-400",
    ],
    technicalCapabilities: [
      "Level of Development (LOD) 300 to LOD 400 structural steel modelling",
      "IFC, DWG, and multi-discipline model federation",
      "Complex curved steel, cambered beams, and faceted geometries",
      "Digital verification of bolt tightening clearances and erection paths",
    ],
    deliverablesList: [
      "Native & IFC 3D Structural Model Files",
      "Navisworks Coordination Files (NWD/NWC)",
      "Clash Detection & Resolution Matrix",
      "3D PDF Interactive Assembly Models",
      "Material Take-Off Summary Reports",
    ],
    icon: "Layers",
  },
  {
    slug: "fabrication-drawings",
    number: "03",
    title: "Shop & Fabrication Drawings",
    shortDescription:
      "Clear fabrication documentation including member, assembly, and relevant production information.",
    heroHeadline: "Fabrication Drawings Built for the Workshop Floor",
    heroDescription:
      "Our fabrication drawings are engineered for the shop floor. We eliminate guesswork with uncluttered dimensions, unambiguous weld symbols, exact plate developments, and standardized callouts that keep fabrication running smoothly.",
    whatWeDeliver: [
      {
        title: "Assembly Shop Drawings",
        description: "Detailed fabrication sheets for every welded assembly, showing all attached fittings, cut lengths, and weld specifications.",
      },
      {
        title: "Single Part / Fitting Sheets",
        description: "Dedicated drawings for shear tabs, base plates, cap plates, stiffeners, and clip angles with hole coordinates.",
      },
      {
        title: "Gather Sheets & Part Nesting Data",
        description: "Standardized group sheets for high-volume plate and angle components to optimize material usage and cutting cycles.",
      },
      {
        title: "Surface Preparation & Paint Schedules",
        description: "Clear callouts for primer types, galvanizing vent holes, masking zones, and faying surface requirements.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Fabricator Standards Alignment",
        description: "Adapting drawing borders, sheet sizes, weld symbols, dimension styles, and part-numbering schemes to shop standards.",
      },
      {
        step: "02",
        title: "Assembly & Single-Part Generation",
        description: "Extracting 2D shop drawings directly from the verified 3D structural model to guarantee geometric consistency.",
      },
      {
        step: "03",
        title: "Drafting Cleanup & Dimension Optimization",
        description: "Arranging views, sections, bevel details, and annotations for maximum legibility and efficient workshop reading.",
      },
      {
        step: "04",
        title: "Senior Checker Verification",
        description: "Rigorous check against contract drawings, connection capacity notes, and fabricator shop equipment capacities.",
      },
      {
        step: "05",
        title: "Package Assembly & Issue",
        description: "Delivering organized, indexed PDF drawing packages alongside corresponding CNC data and bolt lists.",
      },
    ],
    applications: [
      "Structural steel fabrication workshops and service centers",
      "Miscellaneous metal fabricators (stairs, railings, ladders)",
      "Modular skid builders and industrial equipment fabricators",
      "Bridge component and heavy plate girder fabricators",
    ],
    technicalCapabilities: [
      "Customization to fabricator-specific CNC machinery and tooling limits",
      "Comprehensive weld callouts according to AWS D1.1 / EN ISO standards",
      "Galvanizing drain/vent hole detailing for hollow structural sections",
      "Plate nesting optimization and material utilization planning",
    ],
    deliverablesList: [
      "Assembly Fabrication Drawings (A3 / 11x17 / Arch D)",
      "Single Part Detail Drawings",
      "Punch / Drill Hole Pattern Sheets",
      "Galvanizing & Painting Schedules",
      "Cut Lists and Material Nesting Sheets",
    ],
    icon: "FileSpreadsheet",
  },
  {
    slug: "connection-detailing",
    number: "04",
    title: "Connection Detailing",
    shortDescription:
      "Detailed structural connection representation and documentation based on project requirements and engineering inputs.",
    heroHeadline: "Robust Connection Detailing & Practical Fabrication",
    heroDescription:
      "Connections represent a critical component of steel fabrication cost and structural integrity. Kenz Engineering details practical, cost-effective connections adhering strictly to structural design guidelines, load tables, and fabricator capabilities.",
    whatWeDeliver: [
      {
        title: "Shear & Moment Connections",
        description: "Standard shear tabs, end plates, seated connections, welded flange moment joints, and bolted splice assemblies.",
      },
      {
        title: "Bracing & Truss Connections",
        description: "Heavy gusset plate geometries, vertical and horizontal chevron bracing nodes, and wind truss node detailing.",
      },
      {
        title: "Base Plate & Anchor Rod Systems",
        description: "Pinned and moment base plates, leveling nuts, grout pockets, stiffener gussets, and anchor rod patterns.",
      },
      {
        title: "Standardized Joint Detailing",
        description: "Rationalized connection libraries designed to minimize plate thickness varieties and repetitive tooling changes.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Structural Design Criteria Review",
        description: "Extracting member design forces, axial loads, shear capacities, moment demands, and design engineer notes.",
      },
      {
        step: "02",
        title: "Fabricator Preference Assessment",
        description: "Identifying preferred bolt diameters, shop-weld vs. field-weld configurations, and hole tolerance standards.",
      },
      {
        step: "03",
        title: "Connection Layout & Geometry Setup",
        description: "Determining bolt gauges, edge distances, weld sizes, and plate thicknesses based on applicable code specifications.",
      },
      {
        step: "04",
        title: "Clearance & Tool Access Check",
        description: "Simulating impact wrench access, bolt insertion clearance, and crane hoist paths for field connections.",
      },
      {
        step: "05",
        title: "Detail Integration & Documentation",
        description: "Incorporating verified connection geometry into the master 3D model and extracting unambiguous joint details.",
      },
    ],
    applications: [
      "Seismic force resisting structural frames (SMF, IMF, OMF, CBF)",
      "Heavy industrial crane runways and transfer girders",
      "High-rise structural steel column splices and outrigger trusses",
      "Retrofit, expansion, and existing steel tie-in connections",
    ],
    technicalCapabilities: [
      "Detailing per AISC 360 / AISC 341 seismic provisions or Eurocode 3",
      "Bolted and welded structural joint configuration",
      "Gusset plate geometry optimization to minimize scrap waste",
      "Slotted hole detailing for thermal movement and erection adjustment",
    ],
    deliverablesList: [
      "Connection Detail Sheets",
      "Joint Geometry & Weld Schedules",
      "Bolt Schedule & Grip Length Calculations",
      "Splice Plate Detail Drawings",
      "Base Plate & Anchor Bolt Details",
    ],
    icon: "Network",
  },
  {
    slug: "bim-revit-modelling",
    number: "05",
    title: "BIM / Revit Modelling",
    shortDescription:
      "Building Information Modeling (BIM) services supporting multidisciplinary coordination and construction planning.",
    heroHeadline: "BIM & Revit Structural Steel Integration",
    heroDescription:
      "We deliver high-fidelity structural steel BIM models that integrate seamlessly into general contractor federated models. Our Revit and BIM workflows ensure zero spatial conflicts with architecture, MEP services, and building envelopes.",
    whatWeDeliver: [
      {
        title: "Revit Structural Modeling",
        description: "Accurate Revit structural families, parameter-rich framing elements, and disciplined model hierarchy.",
      },
      {
        title: "LOD 300 to LOD 400 BIM Assets",
        description: "Progressive model development matching design milestones, procurement gates, and fabrication release stages.",
      },
      {
        title: "Clash Detection & BIM Coordination",
        description: "Navisworks coordination, clash matrix reporting, and live spatial problem solving with multidisciplinary project teams.",
      },
      {
        title: "COBie & Asset Data Integration",
        description: "Embedding client-specified metadata, material codes, phasing tags, and asset parameters for facility lifecycle use.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "BIM Execution Plan (BEP) Alignment",
        description: "Adhering to project BEP standards, coordinate systems, worksharing protocols, and naming conventions.",
      },
      {
        step: "02",
        title: "Structural Frame Generation",
        description: "Authoring structural elements in Revit with correct structural usage tags, framing analytical lines, and constraints.",
      },
      {
        step: "03",
        title: "Model Federation & Clash Audits",
        description: "Importing architectural, mechanical, electrical, and plumbing models into Navisworks for automated clash analysis.",
      },
      {
        step: "04",
        title: "RFI Coordination & Resolution",
        description: "Generating visual clash callouts and coordinates to resolve spatial interferences prior to fabrication signoff.",
      },
      {
        step: "05",
        title: "IFC & Federated Export",
        description: "Delivering validated RVT, IFC, and NWD packages formatted for general contractor synthesis and site coordination.",
      },
    ],
    applications: [
      "BIM-mandated commercial, institutional, and healthcare projects",
      "Complex mixed-use developments requiring deep MEP coordination",
      "IPD (Integrated Project Delivery) and design-build joint ventures",
      "Prefabrication and modular construction coordination",
    ],
    technicalCapabilities: [
      "Revit structural family creation and parametric component customization",
      "Navisworks Manage clash detection, grouping, and viewpoint reporting",
      "OpenBIM / IFC schema export and interoperability management",
      "4D construction sequencing and erection phase tagging support",
    ],
    deliverablesList: [
      "Native Autodesk Revit (.RVT) Models",
      "Navisworks (.NWD / .NWC) Coordination Files",
      "Industry Foundation Classes (IFC) Export Files",
      "Clash Detection Reports with Visual Callouts",
      "BIM Coordination Meeting Action Sheets",
    ],
    icon: "Cuboid",
  },
  {
    slug: "structural-engineering",
    number: "06",
    title: "Structural Engineering Support",
    shortDescription:
      "Engineering support for structural steel projects based on project requirements and applicable standards.",
    heroHeadline: "Engineering Support for Practical Steel Solutions",
    heroDescription:
      "Kenz Engineering provides technical engineering support to help clients evaluate framing options, verify connection design intent, and resolve site coordination questions during the detailing and construction lifecycle.",
    whatWeDeliver: [
      {
        title: "Framing & Constructability Review",
        description: "Assessing structural steel framing systems for practical fabrication sequence, crane capacity, and shipping limits.",
      },
      {
        title: "Connection Design Coordination",
        description: "Assisting fabricators with connection configuration, geometry verification, and preparation of engineering submittals.",
      },
      {
        title: "Field Modification & Erection Support",
        description: "Technical evaluations and detailing solutions for unforeseen site conditions, field adjustments, and retrofit tie-ins.",
      },
      {
        title: "Material Substitution Analysis",
        description: "Assessing alternative section sizes, plate grades, or profile availability to mitigate material procurement delays.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Project Scope & Design Criteria Review",
        description: "Reviewing design drawings, geotechnical reports, specifications, and project-specific loading criteria.",
      },
      {
        step: "02",
        title: "Technical Constructability Assessment",
        description: "Identifying potential fabrication bottlenecks, excessive weld volumes, or tight erection constraints early.",
      },
      {
        step: "03",
        title: "Detailing Coordination & Documentation",
        description: "Developing practical detailing approaches that satisfy structural engineer of record (EOR) criteria.",
      },
      {
        step: "04",
        title: "Engineering Submittal Coordination",
        description: "Compiling calculation summaries, connection sketch proposals, and formal RFI requests for engineer approval.",
      },
      {
        step: "05",
        title: "On-Demand Shop & Site Support",
        description: "Providing responsive technical assistance when questions arise during steel cutting, assembly, or erection.",
      },
    ],
    applications: [
      "Industrial structures requiring custom connection considerations",
      "Structural steel building additions and vertical expansions",
      "Temporary erection bracing and stability planning support",
      "Fabricator value engineering and section rationalization",
    ],
    technicalCapabilities: [
      "Review against AISC 360, AISC 341, Eurocodes, and relevant regional codes",
      "Member rationalization to minimize distinct mill order sizes",
      "Assessment of bolt grip, edge distances, and shear plane interfaces",
      "Evaluation of transport dimensions and split-joint locations for long spans",
    ],
    deliverablesList: [
      "Technical Constructability Review Notes",
      "Connection Detailing Submittal Packages",
      "Formal Engineering RFI Documentation",
      "Value Engineering Recommendations Report",
      "Erection Stability & Splice Location Sketches",
    ],
    icon: "Compass",
  },
  {
    slug: "peb-detailing",
    number: "07",
    title: "PEB Design & Detailing",
    shortDescription:
      "Pre-Engineered Building (PEB) modelling and detailing for suitable industrial and commercial projects.",
    heroHeadline: "Precision Pre-Engineered Building (PEB) Detailing",
    heroDescription:
      "Pre-Engineered Buildings demand rigorous detailing for tapered built-up frames, cold-formed secondary members, sheeting, and accessories. Kenz Engineering delivers complete PEB detailing sets engineered for fast fabrication and rapid field erection.",
    whatWeDeliver: [
      {
        title: "Primary Framing Detailing",
        description: "Tapered built-up columns, rafter sections, interior rigid frames, splice joints, and portal frames with exact plate bevels.",
      },
      {
        title: "Secondary Framing & Cold-Formed Members",
        description: "Accurate detailing of cold-formed Z and C purlins, girts, eave struts, sag rods, bracing cables, and flange braces.",
      },
      {
        title: "Roof & Wall Cladding Layouts",
        description: "Sheeting layout drawings, corner flashings, ridge caps, gutters, downspouts, louvers, and translucent panel arrangements.",
      },
      {
        title: "Anchor Bolt & Foundation Plans",
        description: "Precise anchor bolt patterns, embedment plates, reaction tables, and foundation coordination drawings.",
      },
    ],
    workflow: [
      {
        step: "01",
        title: "Design Summary & Building Geometry Input",
        description: "Analyzing clear spans, bay spacing, roof slopes, crane loads, mezzanine levels, and accessory specifications.",
      },
      {
        step: "02",
        title: "3D Parametric Model Construction",
        description: "Modelling tapered built-up members, cold-formed purlins/girts, and structural bracing in a coordinated 3D space.",
      },
      {
        step: "03",
        title: "Secondary Framing & Cladding Generation",
        description: "Automating purlin cleat locations, lap lengths, fastener schedules, and envelope sheet layouts.",
      },
      {
        step: "04",
        title: "Quality Review & Fabrication Output",
        description: "Checking flanges, web thicknesses, hole punches, weld callouts, and generating individual shop fabrication sheets.",
      },
      {
        step: "05",
        title: "Erection Drawings & Shipping Lists",
        description: "Issuing comprehensive field erection manuals, phase-tagged shipping bundles, and complete fastener bills of material.",
      },
    ],
    applications: [
      "Industrial manufacturing units and heavy fabrication sheds",
      "Logistics warehouses, distribution hubs, and cold storage",
      "Aircraft hangars, sports arenas, and agricultural shelters",
      "Commercial showrooms, retail big-box stores, and PEB expansions",
    ],
    technicalCapabilities: [
      "Built-up tapered section profiling with web-to-flange welding details",
      "Cold-formed Z/C purlin overlap and cleat connection detailing per MBMA standards",
      "Crane runway beam and bracket integration with PEB columns",
      "Mezzanine floor beam and deck plate detailing within PEB shells",
    ],
    deliverablesList: [
      "Anchor Bolt Foundation Layout Plans",
      "Primary Frame Shop Fabrication Drawings",
      "Secondary Purlin & Girt Punching Schedules",
      "Roof & Wall Sheeting Layout Drawings",
      "Flashing & Trim Detail Drawings",
      "Comprehensive Fastener & Accessory Bill of Quantities",
    ],
    icon: "Warehouse",
  },
];
