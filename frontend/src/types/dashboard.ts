/** Khớp `DashboardDtos.DashboardKpisResponse`. */
export type DashboardPeriod =
  | "week"
  | "month"
  | "quarter"
  | "month_1"
  | "month_2"
  | "month_3"
  | "month_4"
  | "month_5"
  | "month_6"
  | "month_7"
  | "month_8"
  | "month_9"
  | "month_10"
  | "month_11"
  | "month_12";

export type DashboardKpisResponse = {
  productCount: number;
  variantCount: number;
  storeCount: number;
  customerCount: number;
  orderTotalCount: number;
  orderCompletedCount: number;
  completedRevenueTotal: string;
  lowStockCount: number;
  salesReturnCount: number;
  periodKey: DashboardPeriod;
  periodLabel: string;
  periodRevenueTotal: string;
  periodImportTotal: string;
  periodNetIncomeTotal: string;
  previousPeriodLabel: string;
  previousPeriodRevenueTotal: string;
  periodRevenueChangePercent: string | null;
};
