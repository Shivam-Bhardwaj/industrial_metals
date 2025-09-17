export type InventoryItem = {
  id: string;
  material: string;
  shape: string;
  alloy: string;
  temper?: string;
  sizes: string;
  summary: string;
  features: string[];
};

export const inventoryItems: InventoryItem[] = [
  {
    id: "al-6061-plate",
    material: "Aluminum",
    shape: "Plate",
    alloy: "6061-T651",
    temper: "T651",
    sizes: "0.25\" – 8\" thick, up to 60\" wide",
    summary: "Multi-purpose structural aluminum plate held for precision saw cutting.",
    features: [
      "Tight tolerance saw cutting to ±0.005\"",
      "DFARS and domestic melts stocked",
      "Mill test reports on file"
    ]
  },
  {
    id: "al-7075-plate",
    material: "Aluminum",
    shape: "Plate",
    alloy: "7075-T651",
    temper: "T651",
    sizes: "0.5\" – 6\" thick, standard and oversize sheets",
    summary: "High-strength aerospace grade plate ready for tooling and structural work.",
    features: [
      "Stress relieved and precision leveled",
      "Ideal for fixturing and molds",
      "Same-day pickup on cut blanks"
    ]
  },
  {
    id: "al-2024-sheet",
    material: "Aluminum",
    shape: "Sheet",
    alloy: "2024-T3",
    temper: "T3",
    sizes: "0.032\" – 0.190\" thickness, full sheets and blanks",
    summary: "Aircraft sheet stock with excellent fatigue resistance and formability.",
    features: [
      "Clad and bare sheet available",
      "Protective PVC masking on request",
      "Certified to aerospace specifications"
    ]
  },
  {
    id: "al-6061-bar",
    material: "Aluminum",
    shape: "Bar",
    alloy: "6061-T6511",
    temper: "T6511",
    sizes: "0.5\" – 8\" round and square, cut-to-length",
    summary: "Versatile bar and rod inventory for machining and fabrication.",
    features: [
      "Round, square, and rectangular profiles",
      "Bundle cutting for production runs",
      "Tolerance held for immediate machining"
    ]
  },
  {
    id: "ss-304-plate",
    material: "Stainless Steel",
    shape: "Plate",
    alloy: "304/304L",
    sizes: "0.125\" – 2\" plate, full and half sheets",
    summary: "General purpose corrosion-resistant stainless plate ready for fabrication.",
    features: [
      "Laser and waterjet partners for profile cutting",
      "Pickled & passivated options",
      "Food-grade documentation available"
    ]
  },
  {
    id: "ss-316l-tube",
    material: "Stainless Steel",
    shape: "Tube",
    alloy: "316L",
    sizes: "0.5\" – 4\" OD, seamless and welded",
    summary: "Marine and process-grade tubing stocked in sanitary conditions.",
    features: [
      "Bright annealed finish",
      "Meets ASTM A269 and A213",
      "Cut and deburred to length"
    ]
  },
  {
    id: "ti-grade5-bar",
    material: "Titanium",
    shape: "Bar",
    alloy: "Grade 5 (Ti-6Al-4V)",
    sizes: "0.5\" – 4\" round and hex bar",
    summary: "High strength-to-weight titanium bar for aerospace and medical machining.",
    features: [
      "AMS and MIL specifications supported",
      "Ultrasonic testing available",
      "Vacuum melt sources"
    ]
  },
  {
    id: "ti-grade2-sheet",
    material: "Titanium",
    shape: "Sheet",
    alloy: "Grade 2",
    sizes: "0.040\" – 0.125\" thickness",
    summary: "Commercially pure titanium sheet stocked for forming and chemical processing.",
    features: [
      "Excellent corrosion resistance",
      "Protective paper interleave",
      "Custom blanking and kitting"
    ]
  },
  {
    id: "plastic-uhmw-sheet",
    material: "Plastics",
    shape: "Sheet",
    alloy: "UHMW",
    sizes: "0.25\" – 2\" thickness, natural and black",
    summary: "Low-friction UHMW sheet for wear strips, guards, and conveying equipment.",
    features: [
      "CNC routing and shaping",
      "Cut-to-size panels",
      "FDA compliant grades"
    ]
  },
  {
    id: "plastic-acetal-rod",
    material: "Plastics",
    shape: "Rod",
    alloy: "Acetal (Delrin)",
    sizes: "0.375\" – 6\" diameter",
    summary: "Engineering plastic rod ideal for bushings, gears, and precision components.",
    features: [
      "Color coded stock for easy ID",
      "Tight diameter tolerances",
      "Lengths up to 120\""
    ]
  }
];

const uniqueStrings = (values: string[]) => Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));

export const inventoryMaterials = uniqueStrings(inventoryItems.map((item) => item.material));
export const inventoryShapes = uniqueStrings(inventoryItems.map((item) => item.shape));
export const inventoryAlloys = uniqueStrings(inventoryItems.map((item) => item.alloy));
