export type InventoryItem = {
  material: string;
  shape: string;
  alloy: string;
  temper: string;
  dimensions: string;
  sku: string;
  availableQty: number;
};

/**
 * Demo inventory data used for filtering and UI fixtures.
 * Dimensions are expressed in imperial units (inches/feet) and availableQty represents the number of stock lengths or sheets
 * staged in the warehouse when sample data was captured.
 */
export const inventory: InventoryItem[] = [
  {
    material: "Aluminum",
    shape: "Plate",
    alloy: "6061",
    temper: "T651",
    dimensions: "1\" x 48\" x 144\"",
    sku: "AL-PL-6061-T651-1X48X144",
    availableQty: 12
  },
  {
    material: "Aluminum",
    shape: "Round Bar",
    alloy: "7075",
    temper: "T6511",
    dimensions: "2\" DIA x 12 ft",
    sku: "AL-RB-7075-T6511-2DIA",
    availableQty: 18
  },
  {
    material: "Stainless Steel",
    shape: "Sheet",
    alloy: "304L",
    temper: "Annealed",
    dimensions: "0.125\" x 48\" x 96\"",
    sku: "SS-SH-304L-0125X48X96",
    availableQty: 22
  },
  {
    material: "Stainless Steel",
    shape: "Tube",
    alloy: "316L",
    temper: "Annealed",
    dimensions: "1\" OD x 0.065\" wall x 20 ft",
    sku: "SS-TU-316L-1OD0065W",
    availableQty: 30
  },
  {
    material: "Titanium",
    shape: "Flat Bar",
    alloy: "Grade 5",
    temper: "Annealed",
    dimensions: "0.75\" x 4\" x 120\"",
    sku: "TI-FB-GR5-075X4X120",
    availableQty: 6
  },
  {
    material: "Engineering Plastic",
    shape: "Plate",
    alloy: "UHMW",
    temper: "Natural",
    dimensions: "0.5\" x 48\" x 120\"",
    sku: "PL-PL-UHMW-05X48X120",
    availableQty: 14
  }
];

type InventoryStringField = {
  [K in keyof InventoryItem]: InventoryItem[K] extends string ? K : never;
}[keyof InventoryItem];

const createUniqueList = <K extends InventoryStringField>(key: K): InventoryItem[K][] => {
  const values = Array.from(new Set(inventory.map((item) => item[key])));
  return values.sort((a, b) => a.localeCompare(b));
};

export const inventoryMaterials = createUniqueList("material");
export const inventoryShapes = createUniqueList("shape");
export const inventoryAlloys = createUniqueList("alloy");
