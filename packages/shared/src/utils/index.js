"use strict";
// Common utility functions used across the portfolio manager application
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = formatCurrency;
exports.formatPercentage = formatPercentage;
exports.calculateTotalValue = calculateTotalValue;
exports.generateId = generateId;
/**
 * Format a number as currency
 */
function formatCurrency(amount, currency = "USD") {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
    }).format(amount);
}
/**
 * Format a number as percentage
 */
function formatPercentage(value, decimals = 2) {
    return `${(value * 100).toFixed(decimals)}%`;
}
/**
 * Calculate the total value of assets
 */
function calculateTotalValue(assets) {
    return assets.reduce((total, asset) => total + asset.quantity * asset.price, 0);
}
/**
 * Generate a unique ID
 */
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}
