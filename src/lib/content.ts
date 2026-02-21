export type Flavor = {
  name: string;
  description: string;
  tags: [string, string, string];
  category: "Fruity" | "Classic" | "Indulgent" | "Seasonal";
  fanFavorite?: boolean;
};

export type Topping = {
  name: string;
  description: string;
  category: "Crunchy" | "Fruity" | "Sauces" | "Premium";
};

export type Combo = {
  name: string;
  base: string;
  flavor: string;
  toppings: string[];
  reason: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  rating: number;
};

export type LocationItem = {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  services: string[];
};

export const navItems = [
  { href: "/menu", label: "Menu" },
  { href: "/toppings", label: "Toppings" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export const flavorCategories = ["All", "Fruity", "Classic", "Indulgent", "Seasonal"] as const;

export const flavors: Flavor[] = [
  {
    name: "Original Tart",
    description: "Bright tang with a clean, creamy finish.",
    tags: ["tart", "smooth", "clean"],
    category: "Classic",
    fanFavorite: true,
  },
  {
    name: "Madagascar Vanilla",
    description: "Classic vanilla depth with soft sweetness.",
    tags: ["classic", "creamy", "mellow"],
    category: "Classic",
  },
  {
    name: "Strawberry Bloom",
    description: "Fresh berry flavor with lively lift.",
    tags: ["fruity", "bright", "juicy"],
    category: "Fruity",
    fanFavorite: true,
  },
  {
    name: "Mango Velvet",
    description: "Tropical mango with smooth, rich texture.",
    tags: ["tropical", "silky", "sweet"],
    category: "Fruity",
  },
  {
    name: "Blueberry Swirl",
    description: "Juicy blueberry notes and gentle tartness.",
    tags: ["berry", "tangy", "smooth"],
    category: "Fruity",
  },
  {
    name: "Salted Caramel",
    description: "Caramel richness balanced by a light salt finish.",
    tags: ["rich", "sweet", "savory"],
    category: "Indulgent",
    fanFavorite: true,
  },
  {
    name: "Chocolate Silk",
    description: "Deep cocoa profile with velvety body.",
    tags: ["cocoa", "bold", "creamy"],
    category: "Indulgent",
  },
  {
    name: "Matcha Breeze",
    description: "Earthy matcha notes with a modern light sweetness.",
    tags: ["earthy", "refined", "subtle"],
    category: "Seasonal",
  },
  {
    name: "Peach Glow",
    description: "Ripe peach flavor with fresh floral aroma.",
    tags: ["stone-fruit", "bright", "juicy"],
    category: "Seasonal",
  },
  {
    name: "Coconut Cloud",
    description: "Delicate coconut profile with airy sweetness.",
    tags: ["tropical", "light", "creamy"],
    category: "Seasonal",
  },
];

export const toppingCategories = ["All", "Crunchy", "Fruity", "Sauces", "Premium"] as const;

export const toppings: Topping[] = [
  { name: "Almond Crunch", description: "Toasted nut pieces for crisp texture.", category: "Crunchy" },
  { name: "Granola Crisp", description: "Oat clusters with subtle sweetness.", category: "Crunchy" },
  { name: "Cookie Crumble", description: "Chocolate cookie bits, rich crunch.", category: "Crunchy" },
  { name: "Waffle Chips", description: "Crisp wafer pieces with buttery notes.", category: "Crunchy" },
  { name: "Pistachio Bits", description: "Roasted pistachio pieces, earthy snap.", category: "Crunchy" },
  { name: "Fresh Strawberry", description: "Sliced berries, bright and juicy.", category: "Fruity" },
  { name: "Blueberries", description: "Whole berries with tart-sweet balance.", category: "Fruity" },
  { name: "Mango Cubes", description: "Soft tropical cubes, ripe sweetness.", category: "Fruity" },
  { name: "Kiwi Pieces", description: "Tangy slices with fresh lift.", category: "Fruity" },
  { name: "Mixed Berry Compote", description: "Soft berry blend, clean tartness.", category: "Fruity" },
  { name: "Dark Chocolate Drizzle", description: "Smooth cocoa sauce, bold finish.", category: "Sauces" },
  { name: "Salted Caramel Sauce", description: "Buttery caramel with gentle salt edge.", category: "Sauces" },
  { name: "Strawberry Sauce", description: "Fruit-forward sauce with clean sweetness.", category: "Sauces" },
  { name: "Honey Stream", description: "Floral sweetness with silky texture.", category: "Sauces" },
  { name: "Condensed Milk", description: "Rich creamy drizzle for extra body.", category: "Sauces" },
  { name: "Mochi Bites", description: "Soft chewy bites for texture contrast.", category: "Premium" },
  { name: "Cheesecake Cubes", description: "Creamy cubes with subtle tang.", category: "Premium" },
  { name: "Brownie Chunks", description: "Dense chocolate pieces, indulgent bite.", category: "Premium" },
  { name: "Popping Boba", description: "Juicy pearls with playful burst.", category: "Premium" },
  { name: "Mini Meringue", description: "Light crisp texture with airy sweetness.", category: "Premium" },
];

export const combos: Combo[] = [
  {
    name: "Berry Clean",
    base: "Tart Base",
    flavor: "Strawberry Bloom",
    toppings: ["Fresh Strawberry", "Blueberries", "Honey Stream"],
    reason: "Bright fruit stays light and balanced.",
  },
  {
    name: "Mango Crunch Velvet",
    base: "Vanilla Base",
    flavor: "Mango Velvet",
    toppings: ["Granola Crisp", "Mango Cubes", "Condensed Milk"],
    reason: "Creamy tropical profile with crisp contrast.",
  },
  {
    name: "Cocoa Salt Balance",
    base: "Chocolate Base",
    flavor: "Chocolate Silk",
    toppings: ["Almond Crunch", "Salted Caramel Sauce"],
    reason: "Rich cocoa lifted by salt and texture.",
  },
  {
    name: "Matcha Modern",
    base: "Tart Base",
    flavor: "Matcha Breeze",
    toppings: ["Kiwi Pieces", "Mochi Bites", "Honey Stream"],
    reason: "Earthy, bright, and layered.",
  },
  {
    name: "Caramel Comfort",
    base: "Vanilla Base",
    flavor: "Salted Caramel",
    toppings: ["Brownie Chunks", "Waffle Chips"],
    reason: "Dessert-forward flavor with satisfying crunch.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Clean flavors, perfect texture, and consistently fresh toppings every visit.",
    name: "Ariana M.",
    location: "Austin, TX",
    rating: 5,
  },
  {
    quote: "The flavor balance is excellent and the service always feels polished.",
    name: "Daniel R.",
    location: "Plano, TX",
    rating: 5,
  },
  {
    quote: "Best frozen yogurt spot nearby. Great variety without feeling overwhelming.",
    name: "Lena C.",
    location: "Irving, TX",
    rating: 5,
  },
];

export const locations: LocationItem[] = [
  {
    name: "YoBerry Downtown",
    address: "245 Elm Street",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    phone: "(214) 555-0182",
    hours: "Mon-Sun: 11:00 AM - 10:00 PM",
    services: ["Dine-in", "Takeaway", "Online Pickup"],
  },
  {
    name: "YoBerry Uptown",
    address: "880 McKinney Ave",
    city: "Dallas",
    state: "TX",
    zip: "75204",
    phone: "(214) 555-0135",
    hours: "Mon-Sun: 12:00 PM - 10:30 PM",
    services: ["Dine-in", "Takeaway"],
  },
  {
    name: "YoBerry Legacy",
    address: "6400 Legacy Drive",
    city: "Plano",
    state: "TX",
    zip: "75024",
    phone: "(469) 555-0122",
    hours: "Mon-Sun: 11:30 AM - 10:00 PM",
    services: ["Dine-in", "Takeaway", "Catering Pickup"],
  },
];

export const faqs = [
  {
    question: "Do flavors vary by location?",
    answer: "Yes. Most core flavors stay consistent, while seasonal items can differ by store.",
  },
  {
    question: "Do you offer dairy-free options?",
    answer: "Selected flavors may vary by location. Check labels in-store or contact us before visiting.",
  },
  {
    question: "Can I place catering requests online?",
    answer: "Yes. Submit the catering form with date, guest count, and location details.",
  },
  {
    question: "Do you offer online ordering?",
    answer: "Participating stores offer pickup ordering. Availability appears on each location card.",
  },
  {
    question: "How quickly do you respond to contact requests?",
    answer: "Most inquiries receive a response within one business day.",
  },
];

export const whyYoberryPillars = [
  {
    title: "Fresh Ingredients",
    body: "Balanced ingredients selected for clean taste and consistency.",
  },
  {
    title: "Crafted Flavor",
    body: "Profiles designed to feel rich without being heavy.",
  },
  {
    title: "Warm Service",
    body: "A bright, smooth experience from first click to first bite.",
  },
];


