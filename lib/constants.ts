export const BUSINESS = {
  name: "The Laundry Co.",
  tagline: "Your Neighborhood Laundromat",
  taglineEs: "Tu Lavandería del Vecindario",
  address: "565 E Willow St, Long Beach, CA 90806",
  phone: "(562) 269-0542",
  phoneRaw: "5622690542",
  email: "info@laundrylb.com",
  domain: "laundrylb.com",
  hours: {
    weekday: "6:00 AM - 11:00 PM",
    weekend: "6:00 AM - 11:00 PM",
  },
  coordinates: {
    lat: 33.8067,
    lng: -118.1853,
  },
  social: {
    instagram: "laundrylb",
  },
};

export const SERVICES = [
  {
    id: "self-service",
    name: "Self-Service",
    nameEs: "Autoservicio",
    description: "Modern machines, clean facility, free WiFi",
    descriptionEs: "Máquinas modernas, instalaciones limpias, WiFi gratis",
    icon: "washer",
    href: "/self-service",
  },
  {
    id: "wash-fold",
    name: "Wash & Fold",
    nameEs: "Lavado y Doblado",
    description: "Drop off your laundry, we'll handle the rest",
    descriptionEs: "Deja tu ropa, nosotros nos encargamos",
    icon: "fold",
    href: "/wash-and-fold",
  },
  {
    id: "pickup-delivery",
    name: "Pickup & Delivery",
    nameEs: "Recogida y Entrega",
    description: "We come to you - convenient laundry service",
    descriptionEs: "Vamos a tu casa - servicio conveniente",
    icon: "truck",
    href: "/pickup-delivery",
  },
  {
    id: "medical-scrubs",
    name: "Medical Scrubs",
    nameEs: "Uniformes Médicos",
    description: "Specialized cleaning for healthcare workers",
    descriptionEs: "Limpieza especializada para trabajadores de salud",
    icon: "medical",
    href: "/medical-scrubs",
  },
];

export const PRICING = {
  selfService: {
    small: { price: 3.5, label: "Small Load" },
    medium: { price: 5.0, label: "Medium Load" },
    large: { price: 7.0, label: "Large Load" },
    dryer: { price: 0.25, label: "Dryer (per 8 min)" },
  },
  washFold: {
    regular: { price: 1.65, label: "Regular (per lb)" },
    sameDay: { price: 2.0, label: "Same Day (per lb)" },
    minimum: 10,
  },
  pickupDelivery: {
    fee: 0.25,
    freeMinimum: 30,
  },
  scrubs: {
    price: 1.5,
    discount: 10,
  },
};

export const NEIGHBORHOODS = [
  {
    id: "memorial-heights",
    name: "Memorial Heights",
    nameEs: "Memorial Heights",
    description: "Just minutes from Long Beach Memorial Hospital",
    descriptionEs: "A solo minutos del Hospital Memorial de Long Beach",
    distance: "0.5 miles",
    href: "/memorial-heights",
  },
  {
    id: "wrigley",
    name: "Wrigley",
    nameEs: "Wrigley",
    description: "Historic neighborhood, family-friendly service",
    descriptionEs: "Vecindario histórico, servicio familiar",
    distance: "1 mile",
    href: "/wrigley",
  },
  {
    id: "california-heights",
    name: "California Heights",
    nameEs: "California Heights",
    description: "Tree-lined streets deserve clean clothes",
    descriptionEs: "Calles arboladas merecen ropa limpia",
    distance: "1.2 miles",
    href: "/california-heights",
  },
  {
    id: "signal-hill",
    name: "Signal Hill",
    nameEs: "Signal Hill",
    description: "Your nearest laundromat from Signal Hill",
    descriptionEs: "Tu lavandería más cercana desde Signal Hill",
    distance: "1.5 miles",
    href: "/signal-hill",
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home", labelEs: "Inicio" },
  { href: "/self-service", label: "Self-Service", labelEs: "Autoservicio" },
  { href: "/wash-and-fold", label: "Wash & Fold", labelEs: "Lavado y Doblado" },
  { href: "/pickup-delivery", label: "Pickup & Delivery", labelEs: "Recogida y Entrega" },
  { href: "/medical-scrubs", label: "Medical Scrubs", labelEs: "Uniformes Médicos" },
  { href: "/pricing", label: "Pricing", labelEs: "Precios" },
  { href: "/contact", label: "Contact", labelEs: "Contacto" },
];
