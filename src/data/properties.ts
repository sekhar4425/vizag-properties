export interface Property {
  id: string;
  slug: string;
  title: string;
  type: 'villa' | 'apartment' | 'plot';
  location: string;
  microMarket: string;
  priceMin: number;
  priceMax: number;
  currency: string;
  area: number;
  areaUnit: string;
  configuration: string;
  possession: string;
  developer: string;
  reraNumber: string;
  description: string;
  highlights: string[];
  amenities: string[];
  images: string[];
  floorPlans: string[];
  brochure: string;
  virtualTour: boolean;
  latitude: number;
  longitude: number;
  rentalYield: string;
  maintenanceCharges: string;
  paymentPlan: string;
  status: 'available' | 'sold' | 'upcoming';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  demoData: boolean;
}

export const properties: Property[] = [
  {
    id: "prop-001",
    slug: "luxury-sea-view-villa-rushikonda",
    title: "[DEMO] Luxury Sea View Villa",
    type: "villa",
    location: "Rushikonda",
    microMarket: "Rushikonda Beach Road",
    priceMin: 35000000,
    priceMax: 45000000,
    currency: "INR",
    area: 4500,
    areaUnit: "sq.ft",
    configuration: "4 BHK + Maid's Room",
    possession: "Ready to Move",
    developer: "Prestige Group",
    reraNumber: "RERA-AP-12345",
    description: "Experience unparalleled luxury with breathtaking sea views. This premium villa offers state-of-the-art amenities and private beach access.",
    highlights: ["Sea View", "Private Pool", "Smart Home Automation", "Italian Marble Flooring"],
    amenities: ["Clubhouse", "Gym", "Swimming Pool", "24/7 Security", "Power Backup"],
    images: ["/images/villa-1.png"],
    floorPlans: ["/images/floorplans/fp-1.jpg"],
    brochure: "/brochures/villa-rushikonda.pdf",
    virtualTour: true,
    latitude: 17.8205,
    longitude: 83.3831,
    rentalYield: "Indicative",
    maintenanceCharges: "₹15,000/month",
    paymentPlan: "Construction Linked Plan",
    status: "available",
    featured: true,
    createdAt: "2023-01-15T00:00:00Z",
    updatedAt: "2023-10-01T00:00:00Z",
    demoData: true
  },
  {
    id: "prop-002",
    slug: "premium-villas-bheemunipatnam",
    title: "[DEMO] Heritage Premium Villas",
    type: "villa",
    location: "Bheemunipatnam",
    microMarket: "Heritage Zone",
    priceMin: 25000000,
    priceMax: 30000000,
    currency: "INR",
    area: 3200,
    areaUnit: "sq.ft",
    configuration: "3 BHK + Study",
    possession: "Dec 2024",
    developer: "Salarpuria Sattva",
    reraNumber: "RERA-AP-23456",
    description: "Nestled in the historic town of Bheemunipatnam, these villas combine colonial architecture with modern luxury living.",
    highlights: ["Heritage Architecture", "Lush Landscaping", "Private Garden", "Vastu Compliant"],
    amenities: ["Jogging Track", "Kids Play Area", "Multipurpose Hall", "CCTV Surveillance"],
    images: ["/images/villa-1.png"],
    floorPlans: ["/images/floorplans/fp-2.jpg"],
    brochure: "/brochures/villa-bheemli.pdf",
    virtualTour: false,
    latitude: 17.8922,
    longitude: 83.4449,
    rentalYield: "Indicative",
    maintenanceCharges: "₹12,000/month",
    paymentPlan: "20:80 Subvention",
    status: "upcoming",
    featured: false,
    createdAt: "2023-02-10T00:00:00Z",
    updatedAt: "2023-09-15T00:00:00Z",
    demoData: true
  },
  {
    id: "prop-003",
    slug: "hillside-villa-madhurawada",
    title: "[DEMO] Hillside Eco Villas",
    type: "villa",
    location: "Madhurawada",
    microMarket: "IT SEZ Corridor",
    priceMin: 40000000,
    priceMax: 50000000,
    currency: "INR",
    area: 5000,
    areaUnit: "sq.ft",
    configuration: "5 BHK",
    possession: "Ready to Move",
    developer: "L&T Realty",
    reraNumber: "RERA-AP-34567",
    description: "Eco-friendly hillside villas offering panoramic views of the Eastern Ghats. Close to IT hub, ensuring high appreciation.",
    highlights: ["Solar Powered", "Rainwater Harvesting", "Terrace Garden", "Hill View"],
    amenities: ["Spa", "Tennis Court", "Mini Theatre", "Supermarket"],
    images: ["/images/villa-1.png"],
    floorPlans: ["/images/floorplans/fp-3.jpg"],
    brochure: "/brochures/villa-madhurawada.pdf",
    virtualTour: true,
    latitude: 17.8283,
    longitude: 83.3503,
    rentalYield: "Indicative",
    maintenanceCharges: "₹18,000/month",
    paymentPlan: "Downpayment Plan",
    status: "available",
    featured: true,
    createdAt: "2023-03-05T00:00:00Z",
    updatedAt: "2023-11-02T00:00:00Z",
    demoData: true
  },
  {
    id: "prop-004",
    slug: "oceanfront-residences-mvp-colony",
    title: "[DEMO] Oceanfront Residences",
    type: "apartment",
    location: "MVP Colony",
    microMarket: "Sector 1",
    priceMin: 15000000,
    priceMax: 25000000,
    currency: "INR",
    area: 2100,
    areaUnit: "sq.ft",
    configuration: "3 BHK Premium",
    possession: "Jun 2025",
    developer: "Godrej Properties",
    reraNumber: "RERA-AP-45678",
    description: "Premium high-rise apartments offering spectacular ocean views in Vizag's most sought-after residential neighborhood.",
    highlights: ["High-rise Living", "Sky Lounge", "Premium Fittings", "Two Car Parks"],
    amenities: ["Infinity Pool", "Gym", "Badminton Court", "Lounge"],
    images: ["/images/apartment-1.png"],
    floorPlans: ["/images/floorplans/fp-4.jpg"],
    brochure: "/brochures/apt-mvp.pdf",
    virtualTour: true,
    latitude: 17.7397,
    longitude: 83.3364,
    rentalYield: "Indicative",
    maintenanceCharges: "₹8,000/month",
    paymentPlan: "Construction Linked",
    status: "available",
    featured: true,
    createdAt: "2023-04-20T00:00:00Z",
    updatedAt: "2023-11-10T00:00:00Z",
    demoData: true
  },
  {
    id: "prop-005",
    slug: "urban-suites-gajuwaka",
    title: "[DEMO] Urban Executive Suites",
    type: "apartment",
    location: "Gajuwaka",
    microMarket: "Industrial Hub",
    priceMin: 8000000,
    priceMax: 12000000,
    currency: "INR",
    area: 1200,
    areaUnit: "sq.ft",
    configuration: "2 BHK",
    possession: "Ready to Move",
    developer: "Aparna Constructions",
    reraNumber: "RERA-AP-56789",
    description: "Modern apartments designed for the young urban professional. Strategically located near major industrial and commercial hubs.",
    highlights: ["Smart Lock", "Modular Kitchen", "Balcony with View", "Strategic Location"],
    amenities: ["Gym", "Community Hall", "Children's Area", "Intercom"],
    images: ["/images/apartment-1.png"],
    floorPlans: ["/images/floorplans/fp-5.jpg"],
    brochure: "/brochures/apt-gajuwaka.pdf",
    virtualTour: false,
    latitude: 17.6904,
    longitude: 83.2039,
    rentalYield: "Indicative",
    maintenanceCharges: "₹5,000/month",
    paymentPlan: "Downpayment",
    status: "available",
    featured: false,
    createdAt: "2023-05-15T00:00:00Z",
    updatedAt: "2023-10-25T00:00:00Z",
    demoData: true
  },
  {
    id: "prop-006",
    slug: "tech-park-apartments-madhurawada",
    title: "[DEMO] Tech Park View Apartments",
    type: "apartment",
    location: "Madhurawada",
    microMarket: "IT SEZ",
    priceMin: 12000000,
    priceMax: 18000000,
    currency: "INR",
    area: 1600,
    areaUnit: "sq.ft",
    configuration: "3 BHK",
    possession: "Mar 2024",
    developer: "Navayuga Engineering",
    reraNumber: "RERA-AP-67890",
    description: "Spacious apartments located adjacent to the IT SEZ. Ideal for tech professionals seeking walk-to-work convenience.",
    highlights: ["Walk to Work", "Co-working Space", "High Rental Demand", "Energy Efficient"],
    amenities: ["Swimming Pool", "Cafeteria", "Billiards Room", "Yoga Deck"],
    images: ["/images/apartment-1.png"],
    floorPlans: ["/images/floorplans/fp-6.jpg"],
    brochure: "/brochures/apt-techpark.pdf",
    virtualTour: true,
    latitude: 17.8281,
    longitude: 83.3508,
    rentalYield: "Indicative",
    maintenanceCharges: "₹6,500/month",
    paymentPlan: "Flexi Plan",
    status: "available",
    featured: true,
    createdAt: "2023-06-01T00:00:00Z",
    updatedAt: "2023-11-05T00:00:00Z",
    demoData: true
  },
  {
    id: "prop-007",
    slug: "green-meadows-plots-bheemunipatnam",
    title: "[DEMO] Green Meadows Elite Plots",
    type: "plot",
    location: "Bheemunipatnam",
    microMarket: "NH16 Corridor",
    priceMin: 6000000,
    priceMax: 10000000,
    currency: "INR",
    area: 2400,
    areaUnit: "sq.yd",
    configuration: "Premium Plots",
    possession: "Immediate",
    developer: "Subhagruha Projects",
    reraNumber: "RERA-AP-78901",
    description: "VMRDA approved premium residential plots in a gated community. Excellent connectivity to NH16 and upcoming Bhogapuram airport.",
    highlights: ["VMRDA Approved", "Clear Title", "Gated Community", "Underground Cabling"],
    amenities: ["Black Top Roads", "Avenue Plantation", "Water Supply", "Street Lights"],
    images: ["/images/plot-1.png"],
    floorPlans: [],
    brochure: "/brochures/plots-bheemli.pdf",
    virtualTour: false,
    latitude: 17.8925,
    longitude: 83.4442,
    rentalYield: "Indicative",
    maintenanceCharges: "₹1,000/month",
    paymentPlan: "Outright Purchase",
    status: "available",
    featured: true,
    createdAt: "2023-07-10T00:00:00Z",
    updatedAt: "2023-11-15T00:00:00Z",
    demoData: true
  },
  {
    id: "prop-008",
    slug: "sunrise-enclave-plots-rushikonda",
    title: "[DEMO] Sunrise Enclave Plots",
    type: "plot",
    location: "Rushikonda",
    microMarket: "IT Hill-3",
    priceMin: 10000000,
    priceMax: 15000000,
    currency: "INR",
    area: 3000,
    areaUnit: "sq.yd",
    configuration: "Villa Plots",
    possession: "Immediate",
    developer: "Ramky Estates",
    reraNumber: "RERA-AP-89012",
    description: "Exclusive villa plots overlooking the Bay of Bengal. Perfect investment opportunity in Vizag's fastest growing premium neighborhood.",
    highlights: ["Sea View Potential", "Corner Plots Available", "Premium Locality", "High ROI"],
    amenities: ["Compound Wall", "Security Gate", "Parks", "Drainage System"],
    images: ["/images/plot-1.png"],
    floorPlans: [],
    brochure: "/brochures/plots-rushikonda.pdf",
    virtualTour: false,
    latitude: 17.8208,
    longitude: 83.3835,
    rentalYield: "Indicative",
    maintenanceCharges: "₹1,500/month",
    paymentPlan: "Outright Purchase",
    status: "available",
    featured: false,
    createdAt: "2023-08-20T00:00:00Z",
    updatedAt: "2023-11-18T00:00:00Z",
    demoData: true
  },
  {
    id: "prop-009",
    slug: "highway-front-plots-madhurawada",
    title: "[DEMO] Highway Front Commercial Plots",
    type: "plot",
    location: "Madhurawada",
    microMarket: "NH16 Junction",
    priceMin: 8000000,
    priceMax: 12000000,
    currency: "INR",
    area: 1800,
    areaUnit: "sq.yd",
    configuration: "Commercial/Mixed Use",
    possession: "Immediate",
    developer: "Lansum Properties",
    reraNumber: "RERA-AP-90123",
    description: "Prime highway facing plots suitable for commercial or mixed-use development. Unmatched visibility and connectivity.",
    highlights: ["Highway Facing", "Commercial Zoning", "High Footfall Potential", "Excellent Connectivity"],
    amenities: ["Wide Frontage", "Service Road Access", "Transformer Provision", "Water Connection"],
    images: ["/images/plot-1.png"],
    floorPlans: [],
    brochure: "/brochures/plots-highway.pdf",
    virtualTour: false,
    latitude: 17.8285,
    longitude: 83.3501,
    rentalYield: "Indicative",
    maintenanceCharges: "Not Applicable",
    paymentPlan: "Outright Purchase",
    status: "available",
    featured: true,
    createdAt: "2023-09-05T00:00:00Z",
    updatedAt: "2023-11-20T00:00:00Z",
    demoData: true
  }
];

export function getProperties(filters?: { type?: string; location?: string }): Property[] {
  let filtered = properties;
  if (filters?.type) {
    filtered = filtered.filter(p => p.type === filters.type);
  }
  if (filters?.location) {
    filtered = filtered.filter(p => p.location.toLowerCase() === filters.location!.toLowerCase());
  }
  return filtered;
}

export function getPropertyBySlug(type: string, slug: string): Property | undefined {
  return properties.find(p => p.type === type && p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.featured);
}

export function getPropertiesByType(type: string): Property[] {
  return properties.filter(p => p.type === type);
}
