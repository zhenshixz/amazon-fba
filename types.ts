export interface SalesMetric {
  label: string;
  value: string | number;
  subValue?: string;
  isHighlight?: boolean;
  tooltipKey?: string;
}

export interface ProductMetric {
  label: string;
  value: number | string;
  type: 'neutral' | 'warning' | 'info';
}

export interface InventoryRow {
  salesperson: string;
  lastMonthSales: number;
  fbaStock: number;
  fbaAvailable: number;
  reserved: number;
  inbound: number;
  unfulfillable: number;
  researching: number;
  skuCount: number;
  // New Fields Requested
  activeSkuCount: number;
  sellThroughRate: string;
  effectiveSellThroughRate: string;
  // End New Fields
  largeInventorySku: number;
  availableLargeSku: number;
  restockSku: number;
  oceanStock: number;
  oceanRatio: string;
  turnover: number;
  estSalesTime: string;
  // Latest additions
  noReviewSku: number;
  noASku: number;
}

export interface InventoryAgeDetail {
  range: string;
  effectiveQty: number;
  firstLegCost: number;
  productCost: number;
  performance: number;
}

export interface InventoryAgeRow {
  salesperson: string;
  details: InventoryAgeDetail[];
}