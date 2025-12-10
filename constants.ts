import { InventoryRow, InventoryAgeRow, ProductMetric, SalesMetric } from "./types";

export const TOOLTIP_DEFINITIONS: Record<string, string> = {
  "active_sku": "在售SKU数：当前Listing状态为Active且可售库存大于0的SKU数量。",
  "sell_through": "动销率：(近30天销量 / 平均库存) * 100%。反映库存周转效率。",
  "effective_sell_through": "有效动销率：去除新品保护期内及不可售状态后的动销计算，更能反映真实销售能力。",
  "effective_active_styles": "有效动销款式：过去30天内产生实际销售且未退款的款式数量。",
};

// Derived from Image 2 (Store Overview)
export const MONTHLY_SALES_DATA: SalesMetric[] = [
  { label: "销售数量(件)", value: "6,353", isHighlight: true },
  { label: "在售款式", value: "37" },
  { label: "动销款式", value: "44" },
  { label: "有效动销款式", value: "21", tooltipKey: "effective_active_styles" },
  { label: "动销率", value: "118.92%", tooltipKey: "sell_through" },
  { label: "有效动销率", value: "56.76%", tooltipKey: "effective_sell_through" },
];

export const REALTIME_SALES_DATA: SalesMetric[] = [
  { label: "实时月销售量(件)", value: "1,536" },
  { label: "实时月销售金额($)", value: "435,384.35" },
  { label: "实时在售款式", value: "36" },
  { label: "实时动销款式", value: "39" },
  { label: "实时有效动销款式", value: "10" },
  { label: "实时动销率", value: "108.33%" },
  { label: "实时有效动销率", value: "27.78%" },
];

export const PRODUCT_METRICS: ProductMetric[] = [
  { label: "需补货SKU数", value: 626, type: 'warning' },
  { label: "售价异常SKU数", value: 2383, type: 'warning' },
  { label: "滞销SKU数", value: 399, type: 'neutral' },
  { label: "没有关联SKU数", value: 0, type: 'neutral' },
  { label: "没有成本SKU数", value: 0, type: 'neutral' },
  { label: "没有重量SKU数", value: 799, type: 'neutral' },
  { label: "有效SKU数", value: 134, type: 'info' },
  { label: "有效件数", value: "10,664", type: 'info' },
];

// Derived from Image 1 (Inventory Overview)
export const INVENTORY_DATA: InventoryRow[] = [
  {
    salesperson: "黄艳萍",
    lastMonthSales: 297,
    fbaStock: 2564,
    fbaAvailable: 1062,
    reserved: 53,
    inbound: 1445,
    unfulfillable: 3,
    researching: 6,
    skuCount: 105,
    activeSkuCount: 98,
    sellThroughRate: "11.5%",
    effectiveSellThroughRate: "9.2%",
    largeInventorySku: 105,
    availableLargeSku: 50,
    restockSku: 1,
    oceanStock: 2502,
    oceanRatio: "97.58%",
    turnover: 1.39,
    estSalesTime: "8.62个月",
    noReviewSku: 12,
    noASku: 5
  },
  {
    salesperson: "游梦婷",
    lastMonthSales: 1116,
    fbaStock: 4878,
    fbaAvailable: 2976,
    reserved: 664,
    inbound: 1230,
    unfulfillable: 8,
    researching: 1,
    skuCount: 196,
    activeSkuCount: 180,
    sellThroughRate: "22.8%",
    effectiveSellThroughRate: "18.5%",
    largeInventorySku: 163,
    availableLargeSku: 127,
    restockSku: 24,
    oceanStock: 4428,
    oceanRatio: "90.77%",
    turnover: 2.75,
    estSalesTime: "4.36个月",
    noReviewSku: 8,
    noASku: 2
  },
  {
    salesperson: "林丽梅",
    lastMonthSales: 165,
    fbaStock: 1966,
    fbaAvailable: 600,
    reserved: 222,
    inbound: 1144,
    unfulfillable: 0,
    researching: 1,
    skuCount: 163,
    activeSkuCount: 150,
    sellThroughRate: "8.4%",
    effectiveSellThroughRate: "6.1%",
    largeInventorySku: 106,
    availableLargeSku: 38,
    restockSku: 1,
    oceanStock: 1876,
    oceanRatio: "95.42%",
    turnover: 1.01,
    estSalesTime: "11.92个月",
    noReviewSku: 20,
    noASku: 15
  },
  {
    salesperson: "郭融海",
    lastMonthSales: 416,
    fbaStock: 1701,
    fbaAvailable: 852,
    reserved: 207,
    inbound: 638,
    unfulfillable: 3,
    researching: 5,
    skuCount: 80,
    activeSkuCount: 75,
    sellThroughRate: "24.5%",
    effectiveSellThroughRate: "20.1%",
    largeInventorySku: 79,
    availableLargeSku: 66,
    restockSku: 3,
    oceanStock: 1220,
    oceanRatio: "71.72%",
    turnover: 2.94,
    estSalesTime: "4.08个月",
    noReviewSku: 5,
    noASku: 1
  },
  {
    salesperson: "李丹霞",
    lastMonthSales: 196,
    fbaStock: 1602,
    fbaAvailable: 1545,
    reserved: 38,
    inbound: 16,
    unfulfillable: 3,
    researching: 1,
    skuCount: 93,
    activeSkuCount: 88,
    sellThroughRate: "12.2%",
    effectiveSellThroughRate: "10.0%",
    largeInventorySku: 71,
    availableLargeSku: 69,
    restockSku: 1,
    oceanStock: 1232,
    oceanRatio: "76.9%",
    turnover: 1.47,
    estSalesTime: "8.16个月",
    noReviewSku: 2,
    noASku: 0
  },
  {
    salesperson: "前丽萍",
    lastMonthSales: 0,
    fbaStock: 0,
    fbaAvailable: 0,
    reserved: 0,
    inbound: 0,
    unfulfillable: 0,
    researching: 0,
    skuCount: 8184,
    activeSkuCount: 0,
    sellThroughRate: "0.0%",
    effectiveSellThroughRate: "0.0%",
    largeInventorySku: 0,
    availableLargeSku: 0,
    restockSku: 0,
    oceanStock: 0,
    oceanRatio: "NAN%",
    turnover: 0,
    estSalesTime: "nan个月",
    noReviewSku: 0,
    noASku: 0
  },
];

export const INVENTORY_AGE_DATA: InventoryAgeRow[] = [
  {
    salesperson: "游梦婷",
    details: [
      { range: "0-3月", effectiveQty: 2602, firstLegCost: 29265.59, productCost: 110468.85, performance: -0 },
      { range: "4-6月", effectiveQty: 889, firstLegCost: 8634.26, productCost: 41690.24, performance: -503.25 },
      { range: "7-9月", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: -0 },
      { range: "10-12月", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: -0 },
      { range: "12+", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: -0 },
    ]
  },
  {
    salesperson: "李丹霞",
    details: [
      { range: "0-3月", effectiveQty: 711, firstLegCost: 9189.2, productCost: 38269.85, performance: -0 },
      { range: "4-6月", effectiveQty: 763, firstLegCost: 7779.05, productCost: 38757.05, performance: -465.36 },
      { range: "7-9月", effectiveQty: 103, firstLegCost: 1401.89, productCost: 4332.67, performance: -114.69 },
      { range: "10-12月", effectiveQty: 24, firstLegCost: 208.11, productCost: 939.41, performance: -68.85 },
      { range: "12+", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: -0 },
    ]
  },
  {
    salesperson: "黄艳萍",
    details: [
      { range: "0-3月", effectiveQty: 1072, firstLegCost: 13432.65, productCost: 69995.44, performance: -0 },
      { range: "4-6月", effectiveQty: 59, firstLegCost: 858.34, productCost: 4694.63, performance: -55.53 },
      { range: "7-9月", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: -0 },
      { range: "10-12月", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: -0 },
      { range: "12+", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: -0 },
    ]
  },
  // Added dummy data for other salespersons to maintain structure
  {
    salesperson: "林丽梅",
    details: [
      { range: "0-3月", effectiveQty: 500, firstLegCost: 6500.00, productCost: 25000.00, performance: 0 },
      { range: "4-6月", effectiveQty: 200, firstLegCost: 2400.00, productCost: 9000.00, performance: -120.00 },
      { range: "7-9月", effectiveQty: 50, firstLegCost: 600.00, productCost: 2500.00, performance: -45.00 },
      { range: "10-12月", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: 0 },
      { range: "12+", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: 0 },
    ]
  },
  {
    salesperson: "郭融海",
    details: [
      { range: "0-3月", effectiveQty: 800, firstLegCost: 9600.00, productCost: 40000.00, performance: 0 },
      { range: "4-6月", effectiveQty: 300, firstLegCost: 3500.00, productCost: 14000.00, performance: -200.00 },
      { range: "7-9月", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: 0 },
      { range: "10-12月", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: 0 },
      { range: "12+", effectiveQty: 0, firstLegCost: 0, productCost: 0, performance: 0 },
    ]
  },
];