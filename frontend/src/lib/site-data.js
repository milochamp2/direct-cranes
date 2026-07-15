const IMGBASE = "https://static.prod-images.emergentagent.com/jobs/225fe1a1-55a4-4051-aa17-efc791cad668/images";

export const IMG = {
  at100: `${IMGBASE}/2cebc1ab40b10cccd4e816f1cf550b5046e0a8f99046c5a13114366e48022dbc.png`,
  franna: `${IMGBASE}/da1c2443835632d42995069d75531ed678f01f45b0651e0e2a807a19a7953084.png`,
  tower: `${IMGBASE}/d3a6f4f5961fc8a1f936055e36bd665cb41898d5a3c32864de8b2c2086b9fd72.png`,
  helicopter: `${IMGBASE}/d2aafb4467a0ca9c9112713e48118b2924855541dc41f1ecac944e69bd515676.png`,
  slew: `${IMGBASE}/2cfb78fa760b909ac073ab5c91648e6b2d012ad079107bbf3ec9ad8ba262666c.png`,
  transport: `${IMGBASE}/aa963c8f4eae013b5514908e2685deeb4e0a9262b358efec6c593cfb4d861814.png`,
  iconic: "https://customer-assets.emergentagent.com/job_heavy-lift-3d/artifacts/g6vjiy80_image.png",
  liftplan: "https://customer-assets.emergentagent.com/job_heavy-lift-3d/artifacts/33dv70nn_image.png",
  // Stock placeholder photos (Unsplash) — swap for real Direct Cranes site photos
  stockSite: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
  stockAerial: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80",
  stockLogistics: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  stockPlans: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
};

export const BRAND = {
  name: "DIRECT",
  full: "DIRECT CRANES HIRE",
  tagline: "Complete crane hire & lifting solutions",
  phone: "1300 272 637",
  phoneHref: "tel:1300272637",
  email: "hire@directcraneshire.com.au",
};

export const NAV_LINKS = [
  { label: "Mobile Cranes", to: "/mobile-cranes" },
  { label: "Tower Cranes", to: "/tower-cranes" },
  { label: "Helicopter Lifting", to: "/helicopter-lifting" },
  { label: "Heavy Haulage", to: "/heavy-haulage" },
  { label: "Lift Studies", to: "/lift-studies" },
  { label: "Locations", to: "/locations" },
  { label: "About Us", to: "/about" },
];

export const SERVICES = [
  {
    slug: "mobile-cranes",
    chapter: "01",
    title: "Mobile Cranes",
    short: "All-terrain cranes to 250T, 25T Frannas and crawlers 40T – 250T — wet hire with certified crews.",
    lede: "From tight-access 25T Frannas to 250T all-terrains and 40T – 250T crawler cranes — road-legal machines supplied wet with experienced operators, dogmen and riggers.",
    body: [
      "Our mobile fleet covers every lift. Frannas pick and carry through tight yards with zero setup. All-terrains arrive, rig in under 30 minutes and get your load in the air the same day. And when the job is heavy, long or high, our slew cranes to 250T deliver with luffing jibs, superlift and full engineering behind every pick.",
      "Every hire includes a certified operator and rigging crew, site inspection, SWMS and lift plans. Short-term lifts or long-term project hire — one call, one company, complete lift.",
    ],
    capabilities: ["All-terrain cranes to 250T", "25T Franna pick & carry", "Crawler cranes 40T – 250T", "Wet hire — operator, dogman, rigger", "Same-day & emergency mobilisation", "Multi-crane tandem lifts"],
    specs: [
      { k: "Range", v: "25T – 250T" },
      { k: "Setup time", v: "0 – 30 min" },
      { k: "Hire type", v: "Wet · ST & LT" },
    ],
    image: IMG.stockSite,
    machines: ["AT-250", "AT-100", "FR-25", "SL-250"],
  },
  {
    slug: "tower-cranes",
    chapter: "02",
    title: "Tower Cranes",
    short: "Supply, erection and ongoing support for long-duration commercial builds.",
    lede: "Tower crane supply, erection, servicing and dismantle for major commercial construction — maximum reach from a minimum footprint.",
    body: [
      "For long-duration builds, nothing beats a tower crane. We supply, erect and support tower cranes for commercial and residential high-rise, with climbing and recovery handled by our own crews.",
      "Erection and dismantle are planned alongside our mobile fleet — one company managing the full lifecycle from base bolts to final recovery.",
    ],
    capabilities: ["Supply, erection & dismantle", "Long-duration project support", "Commercial & high-rise builds", "Climbing & recovery crews", "Servicing & breakdown response", "Integrated mobile crane support"],
    specs: [
      { k: "Type", v: "Supply + support" },
      { k: "Duration", v: "Long-term" },
      { k: "Jib", v: "Up to 65 m" },
    ],
    image: IMG.stockAerial,
    machines: ["TWR-65"],
  },
  {
    slug: "helicopter-lifting",
    chapter: "03",
    title: "Helicopter Lifting",
    short: "Aerial lifting for remote and difficult-access sites no ground crane can reach.",
    lede: "When no crane can reach, we fly. Helicopter lifting for remote sites, rooftop plant and telecommunications structures across Australia.",
    body: [
      "Helicopter operations open up the impossible — ridge-top comms towers, city rooftop plant swaps and remote infrastructure with no road access.",
      "Aerial lifts are planned with the same rigour as our ground work: load charts, longline rigging, exclusion zones and CASA-compliant flight operations.",
    ],
    capabilities: ["Aerial external-load lifting", "Remote & no-road-access sites", "Rooftop plant installs & swaps", "Telco towers & antennas", "Longline precision rigging", "CASA-compliant operations"],
    specs: [
      { k: "Type", v: "Aerial crane" },
      { k: "Access", v: "Remote / rooftop" },
      { k: "Response", v: "24 / 7" },
    ],
    image: IMG.helicopter,
    machines: ["HELI"],
  },
  {
    slug: "heavy-haulage",
    chapter: "04",
    title: "Heavy Haulage",
    short: "Semi-trailers, low loaders and counterweight trucks — complete lift logistics.",
    lede: "Heavy transport and haulage supporting every lift — semi-trailers, low loaders, counterweight trucks and machinery relocation with full route coordination.",
    body: [
      "A crane is only half the job. Our transport division moves the counterweights, the load and the machinery — permits, pilots and route surveys handled in-house.",
      "Machinery relocations run door-to-door: we load at the origin, haul, and lift into final position at the destination. One booking, complete logistics.",
    ],
    capabilities: ["Semi-trailer & low loader fleet", "Counterweight & support trucks", "Machinery & plant relocation", "Permits, pilots & route surveys", "Door-to-door project moves", "Integrated with crane crews"],
    specs: [
      { k: "Fleet", v: "Semi · low loader" },
      { k: "Loads", v: "Plant & machinery" },
      { k: "Permits", v: "Handled in-house" },
    ],
    image: IMG.stockLogistics,
    machines: ["HT-45"],
  },
  {
    slug: "lift-studies",
    chapter: "05",
    title: "Lift Studies",
    short: "3D lift studies, site inspections, rigging engineering and full safety documentation.",
    lede: "Every complex lift starts on paper. Detailed lift studies, site inspections, rigging engineering and safety documentation — signed off before a load leaves the ground.",
    body: [
      "Our lift planners model crane positions, boom clearances and load paths in 3D, confirming ground bearing, exclusion zones and rigging arrangements before mobilisation.",
      "You receive a complete documentation pack — lift study, SWMS, crane and rigging certification — ready for your site safety team on day one.",
    ],
    capabilities: ["3D lift studies & drawings", "Site inspections & assessments", "Ground bearing & pad design", "Rigging engineering", "SWMS & safety documentation", "On-site lift supervision"],
    specs: [
      { k: "Planning", v: "3D lift studies" },
      { k: "Docs", v: "Full safety pack" },
      { k: "On-site", v: "Supervision" },
    ],
    image: IMG.stockPlans,
    machines: [],
  },
];

export const FLEET = [
  {
    code: "AT-100",
    name: "100T All-Terrain Crane",
    tagline: "Power. Precision. Performance.",
    blurb: "Built for the most demanding lifts with superior reach, control and stability.",
    image: "/images/fleet-at-100.png",
    vector: true,
    serviceSlug: "mobile-cranes",
    specs: [
      { icon: "hook", label: "Max lift capacity", value: "100", unit: "tonnes" },
      { icon: "boom", label: "Main boom length", value: "60", unit: "metres" },
      { icon: "height", label: "Max tip height", value: "81", unit: "metres" },
      { icon: "radius", label: "Max working radius", value: "48", unit: "metres" },
      { icon: "jib", label: "Jib extension", value: "17–32", unit: "m" },
      { icon: "axle", label: "Axles", value: "4 × 8", unit: "drive" },
      { icon: "weight", label: "Counterweight", value: "24", unit: "tonnes" },
      { icon: "timer", label: "Setup time", value: "20–30", unit: "min" },
    ],
  },
  {
    code: "AT-250",
    name: "250T All-Terrain Crane",
    tagline: "All-terrain, pro-grade to 250T.",
    blurb: "Our flagship all-terrain — road-legal to 250T with long main boom and luffing jib for heavy, high and long-reach lifts.",
    image: "/images/fleet-at-100.png",
    vector: true,
    serviceSlug: "mobile-cranes",
    specs: [
      { icon: "hook", label: "Max lift capacity", value: "250", unit: "tonnes" },
      { icon: "boom", label: "Main boom length", value: "80", unit: "metres" },
      { icon: "height", label: "Max tip height", value: "110+", unit: "metres" },
      { icon: "radius", label: "Max working radius", value: "68", unit: "metres" },
      { icon: "jib", label: "Luffing jib", value: "43", unit: "metres" },
      { icon: "axle", label: "Axles", value: "7 × 8", unit: "drive" },
      { icon: "weight", label: "Counterweight", value: "80", unit: "tonnes" },
      { icon: "timer", label: "Setup time", value: "30–45", unit: "min" },
    ],
  },
  {
    code: "FR-25",
    name: "25T Franna Pick & Carry",
    tagline: "No setup. No fuss. Just lift.",
    blurb: "The tight-access workhorse — picks the load and carries it anywhere on site.",
    image: "/images/fleet-franna-25.png",
    vector: true,
    serviceSlug: "mobile-cranes",
    specs: [
      { icon: "hook", label: "Max lift capacity", value: "25", unit: "tonnes" },
      { icon: "boom", label: "Boom length", value: "18.4", unit: "metres" },
      { icon: "timer", label: "Setup time", value: "0", unit: "instant" },
      { icon: "radius", label: "Travel speed", value: "80", unit: "km/h" },
      { icon: "axle", label: "Drive", value: "4 × 4", unit: "artic" },
      { icon: "grade", label: "Pick & carry", value: "100", unit: "%" },
    ],
  },
  {
    code: "SL-250",
    name: "Crawler Cranes 40T – 250T",
    tagline: "The heavy hitter.",
    blurb: "Lattice-boom crawlers from 40T to 250T for structural steel, bridge beams and major infrastructure.",
    image: "/images/fleet-crawler.png",
    vector: true,
    serviceSlug: "mobile-cranes",
    specs: [
      { icon: "hook", label: "Capacity range", value: "40–250", unit: "tonnes" },
      { icon: "boom", label: "Main boom", value: "84", unit: "metres" },
      { icon: "jib", label: "Luffing jib", value: "91", unit: "metres" },
      { icon: "grade", label: "Ground pressure", value: "Low", unit: "tracks" },
      { icon: "weight", label: "Superlift", value: "Yes", unit: "config" },
      { icon: "remote", label: "Tandem capable", value: "Yes", unit: "multi-crane" },
    ],
  },
  {
    code: "TWR-65",
    name: "Tower Crane",
    tagline: "Maximum reach, minimum footprint.",
    blurb: "Long-duration tower cranes for commercial and high-rise construction.",
    image: IMG.tower,
    portrait: true,
    serviceSlug: "tower-cranes",
    specs: [
      { icon: "hook", label: "Max capacity", value: "12", unit: "tonnes" },
      { icon: "boom", label: "Jib length", value: "65", unit: "metres" },
      { icon: "height", label: "Hook height", value: "80+", unit: "metres" },
      { icon: "timer", label: "Duration", value: "LT", unit: "projects" },
      { icon: "remote", label: "Erection", value: "Full", unit: "service" },
      { icon: "weight", label: "Climbing", value: "Yes", unit: "internal" },
    ],
  },
  {
    code: "HT-45",
    name: "Heavy Haulage Fleet",
    tagline: "The load behind the lift.",
    blurb: "Semi-trailers, low loaders and counterweight trucks with full route coordination.",
    image: IMG.transport,
    serviceSlug: "heavy-haulage",
    specs: [
      { icon: "weight", label: "Payload", value: "45", unit: "tonnes" },
      { icon: "axle", label: "Config", value: "Low", unit: "loader" },
      { icon: "radius", label: "Coverage", value: "3", unit: "states" },
      { icon: "remote", label: "Permits", value: "In-house", unit: "managed" },
      { icon: "timer", label: "Pilots", value: "Yes", unit: "escort" },
      { icon: "hook", label: "Counterweight", value: "Full", unit: "support" },
    ],
  },
  {
    code: "HELI",
    name: "Lifting Helicopter",
    tagline: "When no crane can reach.",
    blurb: "Aerial external-load lifting for remote sites and rooftop installations.",
    image: "/images/fleet-heli.png",
    vector: true,
    serviceSlug: "helicopter-lifting",
    specs: [
      { icon: "hook", label: "External load", value: "1,100", unit: "kg" },
      { icon: "radius", label: "Cruise speed", value: "220", unit: "km/h" },
      { icon: "boom", label: "Longline", value: "30–60", unit: "metres" },
      { icon: "timer", label: "Response", value: "24/7", unit: "on call" },
      { icon: "height", label: "Access", value: "Any", unit: "terrain" },
      { icon: "remote", label: "Compliance", value: "CASA", unit: "certified" },
    ],
  },
];

export const SERVICE_AREAS = [
  {
    state: "Victoria",
    code: "VIC",
    depot: "Melbourne Depot",
    address: "132 Bayfield Road East, Bayswater North VIC 3153",
    blurb: "Full fleet coverage across greater Melbourne and regional Victoria — Frannas to 250T slews.",
    areas: ["Melbourne CBD", "South East Melbourne", "Western Melbourne", "Northern Melbourne", "Geelong", "Regional Victoria"],
  },
  {
    state: "Queensland",
    code: "QLD",
    depot: "Brisbane Depot",
    address: "27 Transport St, Yatala QLD 4207",
    blurb: "Servicing Brisbane, the coasts and regional Queensland with rapid mobilisation.",
    areas: ["Brisbane", "Gold Coast", "Sunshine Coast", "Ipswich", "Toowoomba", "Regional Queensland"],
  },
  {
    state: "South Australia",
    code: "SA",
    depot: "Adelaide Depot",
    address: "70 London Rd, Mile End South SA 5031",
    blurb: "Crane hire and heavy transport across Adelaide and regional South Australia.",
    areas: ["Adelaide", "Northern Adelaide", "Southern Adelaide", "Port Adelaide", "Regional South Australia"],
  },
];

export const INDUSTRIES = [
  "Construction", "Civil Works", "Telecommunications", "Structural Steel",
  "Precast Concrete", "Manufacturing", "Industrial Facilities", "Warehousing",
  "Infrastructure", "Utilities", "Mechanical Services", "Roofing & Cladding",
  "Plant Maintenance", "Emergency Recovery",
];

export const VALUES = [
  { n: "01", title: "Safe & professional lifting.", body: "Safety leads every decision. Detailed planning, certified crews and documented method statements keep loads in the air and people on the ground." },
  { n: "02", title: "Reliable equipment, fast response.", body: "A well-maintained fleet and rapid mobilisation across three states mean the right crane arrives on time, every time." },
  { n: "03", title: "One company, complete lift.", body: "Cranes, operators, riggers, transport and coordination under one roof — clear communication and reliable delivery from plan to pack-down." },
];

export const STATS = [
  { v: "3", suffix: "states", label: "VIC · QLD · SA" },
  { v: "250", suffix: "T", label: "Slew crane capacity" },
  { v: "24/7", suffix: "", label: "Emergency response" },
  { v: "1", suffix: "", label: "Company, full package" },
];

export const MARQUEE_ITEMS = [
  "MOBILE CRANES", "TOWER CRANES", "HELICOPTER LIFTING", "HEAVY HAULAGE", "LIFT STUDIES", "25T – 250T",
];
