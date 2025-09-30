// Common utility functions used across the portfolio manager application

/**
 * Format a number as currency
 */
export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Format a number as percentage
 */
export function formatPercentage(value: number, decimals = 2): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Calculate the total value of assets
 */
export function calculateTotalValue(
  assets: Array<{ quantity: number; price: number }>
): number {
  return assets.reduce(
    (total, asset) => total + asset.quantity * asset.price,
    0
  );
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}
